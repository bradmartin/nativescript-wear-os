import { WearOsListView } from './wear-os-listview.android';
import { View } from 'tns-core-modules/ui/core/view';
import { ProxyViewContainer } from 'tns-core-modules/ui/proxy-view-container';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { TNS_WearOsListViewHolder } from './tns-wear-os-listview-holder';
import {
  ItemEventData,
  ITEMLOADING,
  layout,
  LayoutTypeOptions
} from './wear-os-listview-base';

export let TNS_WearOsListViewAdapterClass;

export function ensureWearOsListViewAdapterClass() {
  if (TNS_WearOsListViewAdapterClass) {
    return;
  }

  class TNS_WearOsListViewAdapter extends android.support.v7.widget.RecyclerView
    .Adapter<any> {
    owner: WeakRef<WearOsListView>;

    constructor(owner: WeakRef<WearOsListView>) {
      super();
      this.owner = owner;
      return global.__native(this);
    }

    public onCreateViewHolder(
      parent: android.view.ViewGroup,
      viewType: number
    ) {
      const owner = this.owner ? this.owner.get() : null;
      if (!owner) {
        return null;
      }
      const template = owner._itemTemplatesInternal[viewType];
      const view: View =
        template.createView() || owner._getDefaultItemContent(viewType);

      if (view instanceof View && !(view instanceof ProxyViewContainer)) {
        owner._addView(view);
      } else {
        const sp = new StackLayout();
        sp.addChild(view);
        owner._addView(sp);
      }

      owner._realizedItems.set(view.nativeView, view);

      return new TNS_WearOsListViewHolder(
        new WeakRef(view),
        new WeakRef(owner)
      );
    }

    public onBindViewHolder(holder: TNS_WearOsListViewHolder, index: number) {
      const owner = this.owner ? this.owner.get() : null;
      if (owner) {
        const args = <ItemEventData>{
          eventName: ITEMLOADING,
          object: owner,
          android: holder,
          ios: undefined,
          index,
          view: holder.view
        };

        owner.notify(args);

        if (owner.layoutType === LayoutTypeOptions.STAGGERED) {
          let random;
          const max = layout.toDeviceIndependentPixels(
            owner._effectiveItemHeight
          );
          const min =
            layout.toDeviceIndependentPixels(owner._effectiveItemHeight) *
            (1 / 3);
          if (min && max) {
            if (owner._staggeredMap && owner._staggeredMap.has(index)) {
              random = owner._staggeredMap.get(index);
            } else {
              random =
                (owner._random as java.util.Random).nextInt(max - min + min) +
                min;
              if (!owner._staggeredMap) {
                owner._staggeredMap = new Map<number, number>();
              }
              owner._staggeredMap.set(index, random);
            }
            holder.view.height = random;
          }
        } else {
          if (owner._itemHeight) {
            holder.view.height = layout.toDeviceIndependentPixels(
              owner._effectiveItemHeight
            );
          }

          if (owner._itemWidth) {
            holder.view.width = layout.toDeviceIndependentPixels(
              owner._effectiveItemWidth
            );
          }
        }

        owner._prepareItem(holder.view, index);
      }
    }

    public getItemId(i: number) {
      const owner = this.owner ? this.owner.get() : null;
      let id = i;
      if (owner && owner.items) {
        const item = (owner as any).items.getItem
          ? (owner as any).items.getItem(i)
          : owner.items[i];
        if (item) {
          id = owner.itemIdGenerator(item, i, owner.items);
        }
      }
      return long(id);
    }

    public getItemCount(): number {
      const owner = this.owner ? this.owner.get() : null;
      return owner && owner.items && owner.items.length
        ? owner.items.length
        : 0;
    }

    public getItemViewType(index: number) {
      const owner = this.owner ? this.owner.get() : null;
      if (owner) {
        const template = owner._getItemTemplate(index);
        return owner._itemTemplatesInternal.indexOf(template);
      }
      return 0;
    }
  }

  TNS_WearOsListViewAdapterClass = TNS_WearOsListViewAdapter;
}

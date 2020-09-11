import {
  ItemEventData,
  KeyedTemplate,
  Observable,
  PercentLength,
  ProxyViewContainer,
  StackLayout,
  Template,
  Utils,
  View
} from '@nativescript/core';
import {
  ITEMDESELECTED,
  itemHeightProperty,
  ITEMLOADING,
  ITEMSELECTED,
  ItemsSource,
  ITEMTAP,
  itemTemplatesProperty,
  itemWidthProperty,
  LayoutTypeOptions,
  WearOsListViewBase
} from './wear-os-listview-base';

// Need to make sure the base is all exposed
// export * from './wear-os-listview-base';

export class WearOsListView extends WearOsListViewBase {
  static itemLoadingEvent = ITEMLOADING;
  static itemTapEvent = ITEMTAP;
  nativeViewProtected: any;
  listView: TNS_WearableRecyclerView;
  circularScrollingEnabled: boolean = false;
  useScalingScroll: boolean = false;
  _itemWidth: any;
  _itemHeight: any;
  itemWidth: PercentLength;
  itemHeight: PercentLength;
  spanCount: number;
  items: any[] | ItemsSource;
  itemTemplate: string | Template;
  _realizedItems = new Map<android.view.View, View>();
  _random: java.util.Random;
  _itemsSelected: any[];
  _staggeredMap: Map<number, number>;
  private _androidViewId: number = -1;

  // get android(): TNS_WearableRecyclerView {
  //   return this.listView;
  // }

  constructor() {
    super();
  }

  createNativeView() {
    // const weakRefLocal = new WeakRef<WearOsListView>(this);
    this._itemsSelected = [];
    this._staggeredMap = new Map<number, number>();
    this._random = new java.util.Random();
    this.listView = new TNS_WearableRecyclerView(
      this._context,
      new WeakRef<any>(this)
    );

    return this.listView;
  }

  initNativeView() {
    super.initNativeView();
    const that = new WeakRef(this);

    this.nativeViewProtected.setEnabled(false);

    if (this._androidViewId < 0) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this.nativeViewProtected.setId(this._androidViewId);

    // To align the edge children (first and last) with the center of the screen
    this.listView.setEdgeItemsCenteringEnabled(true);

    const adapter = new TNS_WearOsListViewAdapter(new WeakRef(this));
    adapter.owner = that;
    adapter.setHasStableIds(true);

    // assigning to any bc typings don't have the inherited methods for some unknown reason
    (this.listView as any).setAdapter(adapter);
    (<any>this.listView).adapter = adapter;

    // Only square watches you typically don't want to use the custom layout scaling for items to rotate around the circle
    // so we'll check if the device screen is round or not
    const androidConfig = (Utils.android.getApplicationContext() as android.content.Context)
      .getResources()
      .getConfiguration();

    // https://developer.android.com/reference/android/content/res/Configuration.html#isScreenRound()
    const isCircleWatch = (androidConfig as any).isScreenRound();

    // only if the user wants to use scaling scroll for circle watches
    if (isCircleWatch === true && this.useScalingScroll) {
      // create the custom scrolling layout callback - this is how the items are scaled/animated on scrolling
      const customScrollingLayoutCallback = new TNS_CustomScrollingLayoutCallback();

      // assigning to any bc typings don't have the inherited methods for some unknown reason
      (this.listView as any).setLayoutManager(
        new androidx.wear.widget.WearableLinearLayoutManager(
          this._context,
          customScrollingLayoutCallback
        )
      );
    } else {
      // normal layout manager with no animation on square watches
      // assigning to any bc typings don't have the inherited methods for some unknown reason
      (this.listView as any).setLayoutManager(
        new androidx.wear.widget.WearableLinearLayoutManager(this._context)
      );
    }

    // By default, circular scrolling is disabled in the WearableRecyclerView. If you want to enable a circular scrolling gesture in your child view, use the WearableRecyclerView’s setCircularScrollingGestureEnabled() method.
    if (this.circularScrollingEnabled === true) {
      this.listView.setCircularScrollingGestureEnabled(true);
    }

    const params = new androidx.recyclerview.widget.RecyclerView.LayoutParams(
      -1, // androidx.wear.widget.RecyclerView.LayoutParams.MATCH_PARENT
      -1 // androidx.wear.widget.RecyclerView.LayoutParams.MATCH_PARENT
    );

    // brad  - none of these methods are available need to double check docs
    // this.listView.setLayoutParams(params);

    // this.listView.setVerticalScrollBarEnabled(true);
    // this.listView.setScrollBarSize(20);

    itemWidthProperty.coerce(this);
    itemHeightProperty.coerce(this);
  }

  disposeNativeView() {
    const nativeView = this.nativeViewProtected;
    nativeView.setAdapter(null);

    this.eachChildView(view => {
      if (view && view.parent) {
        view.parent._removeView(view);
      }
      return true;
    });
    // (<any>nativeView).itemClickListener.owner = null;
    (<any>nativeView).adapter.owner = null;
    this._clearRealizedCells();
    super.disposeNativeView();
  }

  onLoaded() {
    super.onLoaded();
    // Without this call itemClick won't be fired... :(
    this.requestLayout();
  }

  onLayout(left: number, top: number, right: number, bottom: number) {
    super.onLayout(left, top, right, bottom);
    this.refresh();
  }

  refresh(): void {
    // assigning to any bc typings don't have the inherited methods for some unknown reason
    const nativeView = this.listView as any;
    if (!nativeView || !nativeView.getAdapter()) {
      return;
    }
    // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
    this._realizedItems.forEach((view, nativeView) => {
      if (!(view.bindingContext instanceof Observable)) {
        view.bindingContext = null;
      }
    });
    // this.setLayoutType(this.layoutType);
    // this.listView.requestLayout();
    nativeView.getAdapter().notifyDataSetChanged();
  }

  scrollToIndex(index: number) {
    const nativeView = this.nativeViewProtected;
    if (nativeView) {
      nativeView.setSelection(index);
    }
  }

  scrollToIndexAnimated(index: number) {
    const nativeView = this.nativeViewProtected;
    if (nativeView) {
      nativeView.smoothScrollToPosition(index);
    }
  }

  get _childrenCount(): number {
    return this._realizedItems.size;
  }

  eachChildView(callback: (child: View) => boolean): void {
    this._realizedItems.forEach((view, nativeView) => {
      if (view.parent instanceof WearOsListView) {
        callback(view);
      } else {
        // in some cases (like item is unloaded from another place (like angular) view.parent becomes undefined)
        if (view.parent) {
          callback(<View>view.parent);
        }
      }
    });
  }

  private _clearRealizedCells(): void {
    // clear the cache
    this._realizedItems.forEach((view, nativeView) => {
      if (view.parent) {
        // This is to clear the StackLayout that is used to wrap non LayoutBase & ProxyViewContainer instances.
        if (!(view.parent instanceof WearOsListView)) {
          this._removeView(view.parent);
        }
        view.parent._removeView(view);
      }
    });

    this._realizedItems.clear();
    this._staggeredMap.clear();
  }

  [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemTemplatesInternal = new Array<KeyedTemplate>(
      this._defaultTemplate
    );
    if (value) {
      this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
    }
    // assigning to any bc typings don't have the inherited methods for some unknown reason
    (this.listView as any).setAdapter(
      new TNS_WearOsListViewAdapter(new WeakRef(this))
    );
    this.refresh();
  }
}

@NativeClass()
class TNS_CustomScrollingLayoutCallback extends androidx.wear.widget
  .WearableLinearLayoutManager.LayoutCallback {
  /** How much should we scale the icon at most. */
  private static MAX_ICON_PROGRESS = 2;

  constructor() {
    super();
  }

  onLayoutFinished(
    child: android.view.View,
    parent: androidx.recyclerview.widget.RecyclerView
  ) {
    // Figure out % progress from top to bottom
    const centerOffset = child.getHeight() / 2.0 / parent.getHeight();
    const yRelativeToCenterOffset =
      child.getY() / parent.getHeight() + centerOffset;

    const progresstoCenter = Math.sin(yRelativeToCenterOffset * Math.PI);

    // Normalize for center
    let mProgressToCenter = Math.abs(0.5 - yRelativeToCenterOffset);
    // Adjust to the maximum scale
    mProgressToCenter = Math.min(
      mProgressToCenter,
      TNS_CustomScrollingLayoutCallback.MAX_ICON_PROGRESS
    );

    // scale the items
    child.setScaleX(1 - mProgressToCenter);
    child.setScaleY(1 - mProgressToCenter);
    child.setX(+(1 - progresstoCenter) * 100);
  }
}

@NativeClass()
class TNS_WearOsListViewAdapter extends androidx.recyclerview.widget
  .RecyclerView.Adapter<any> {
  owner: WeakRef<WearOsListView>;

  constructor(owner: WeakRef<WearOsListView>) {
    super();
    this.owner = owner;
    return global.__native(this);
  }

  onCreateViewHolder(parent: android.view.ViewGroup, viewType: number) {
    const owner = this.owner ? this.owner.get() : null;
    if (!owner) {
      return null;
    }
    const template = owner._itemTemplatesInternal[viewType];

    let view: View = template.createView();

    if (view instanceof View && !(view instanceof ProxyViewContainer)) {
      owner._addView(view);
    } else {
      const sp = new StackLayout();
      sp.addChild(view || owner._getDefaultItemContent(viewType));
      owner._addView(sp);
      view = sp;
    }

    owner._realizedItems.set(view.nativeView, view);

    return new TNS_WearOsListViewHolder(new WeakRef(view), new WeakRef(owner));
  }

  onBindViewHolder(holder: TNS_WearOsListViewHolder, index: number) {
    const owner = this.owner ? this.owner.get() : null;
    if (owner) {
      let view = holder.view;
      const args = <ItemEventData>{
        eventName: ITEMLOADING,
        object: owner,
        android: holder,
        ios: undefined,
        index,
        view: view
      };

      owner.notify(args);

      if (args.view !== view) {
        view = args.view;
        // the view has been changed on the event handler
        // (holder.view as StackLayout).removeChildren();
        (holder.view as StackLayout).removeChildren();
        (holder.view as StackLayout).addChild(args.view);
        // holder["defaultItemView"] = false;
      }

      if (owner.layoutType === LayoutTypeOptions.STAGGERED) {
        let random;
        const max = Utils.layout.toDeviceIndependentPixels(
          owner._effectiveItemHeight
        );
        const min =
          Utils.layout.toDeviceIndependentPixels(owner._effectiveItemHeight) *
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
          view.height = random;
        }
      } else {
        if (owner._itemHeight) {
          view.height = Utils.layout.toDeviceIndependentPixels(
            owner._effectiveItemHeight
          );
        }

        if (owner._itemWidth) {
          view.width = Utils.layout.toDeviceIndependentPixels(
            owner._effectiveItemWidth
          );
        }
      }

      owner._prepareItem(view, index);
    }
  }

  getItemId(i: number) {
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

  getItemCount(): number {
    const owner = this.owner ? this.owner.get() : null;
    return owner && owner.items && owner.items.length ? owner.items.length : 0;
  }

  getItemViewType(index: number) {
    const owner = this.owner ? this.owner.get() : null;
    if (owner) {
      const template = owner._getItemTemplate(index);
      return owner._itemTemplatesInternal.indexOf(template);
    }
    return 0;
  }
}

@NativeClass()
@Interfaces([
  android.view.View.OnClickListener,
  android.view.View.OnLongClickListener
])
class TNS_WearOsListViewHolder extends androidx.recyclerview.widget.RecyclerView
  .ViewHolder {
  _selected: boolean = false;

  constructor(
    private owner: WeakRef<View>,
    private list: WeakRef<WearOsListView>
  ) {
    super(owner.get().nativeViewProtected);
    const that = global.__native(this);
    owner.get().nativeViewProtected.setOnClickListener(that);
    owner.get().nativeViewProtected.setOnLongClickListener(that);
    return that;
  }

  isSelected(): boolean {
    return this._selected;
  }

  setIsSelected(selected: boolean) {
    this._selected = selected;
  }

  get view(): View {
    return this.owner ? this.owner.get() : null;
  }

  onClick(v: android.view.View) {
    const listView = this.list.get();
    const index = this.getAdapterPosition();
    listView.notify<ItemEventData>({
      eventName: ITEMTAP,
      object: listView,
      index: index,
      view: this.view,
      android: v,
      ios: undefined
    });

    if (listView.selectionBehavior !== 'Press') return;
    const items = listView.items as any;
    const item = items.getItem ? items.getItem(index) : items[index];
    if (listView.multipleSelection) {
      if (this.isSelected()) {
        listView._itemsSelected = listView._itemsSelected.filter(selected => {
          if (selected !== item) {
            return selected;
          }
        });
        this.setIsSelected(false);
        listView.notify<ItemEventData>({
          eventName: ITEMDESELECTED,
          object: listView,
          index: index,
          view: this.view,
          android: v,
          ios: undefined
        });
      } else {
        this.setIsSelected(true);
        listView._itemsSelected.push(item);
        listView.notify<ItemEventData>({
          eventName: ITEMSELECTED,
          object: listView,
          index: index,
          view: this.view,
          android: v,
          ios: undefined
        });
      }
    } else {
      if (this.isSelected()) {
        listView._itemsSelected.pop();
        this.setIsSelected(false);
        listView.notify<ItemEventData>({
          eventName: ITEMDESELECTED,
          object: listView,
          index: index,
          view: this.view,
          android: v,
          ios: undefined
        });
      } else {
        this.setIsSelected(true);
        listView._itemsSelected.push(item);
        listView.notify<ItemEventData>({
          eventName: ITEMSELECTED,
          object: listView,
          index: index,
          view: this.view,
          android: v,
          ios: undefined
        });
      }
    }
  }

  onLongClick(v: android.view.View) {
    const listView = this.list.get();
    const index = this.getAdapterPosition();
    if (listView.selectionBehavior === 'LongPress') {
      const items = listView.items as any;
      const item = items.getItem ? items.getItem(index) : items[index];
      if (listView.multipleSelection) {
        if (this.isSelected()) {
          listView._itemsSelected = listView._itemsSelected.filter(selected => {
            if (selected !== item) {
              return selected;
            }
          });
          this.setIsSelected(false);

          listView.notify<ItemEventData>({
            eventName: ITEMDESELECTED,
            object: listView,
            index: index,
            view: this.view,
            android: v,
            ios: undefined
          });
        } else {
          this.setIsSelected(true);
          listView._itemsSelected.push(item);
          listView.notify<ItemEventData>({
            eventName: ITEMSELECTED,
            object: listView,
            index: index,
            view: this.view,
            android: v,
            ios: undefined
          });
        }
      } else {
        if (this.isSelected()) {
          listView._itemsSelected.pop();
          this.setIsSelected(false);
          listView.notify<ItemEventData>({
            eventName: ITEMDESELECTED,
            object: listView,
            index: index,
            view: this.view,
            android: v,
            ios: undefined
          });
        } else {
          this.setIsSelected(true);
          listView._itemsSelected.push(item);
          listView.notify<ItemEventData>({
            eventName: ITEMSELECTED,
            object: listView,
            index: index,
            view: this.view,
            android: v,
            ios: undefined
          });
        }
      }
    }
    return true;
  }
}

@NativeClass()
class TNS_WearableRecyclerView extends androidx.wear.widget
  .WearableRecyclerView {
  constructor(
    context: android.content.Context,
    private owner: WeakRef<WearOsListView>
  ) {
    super(context);
    return global.__native(this);
  }

  onLayout(changed: boolean, l: number, t: number, r: number, b: number) {
    if (changed) {
      const owner = this.owner.get();
      owner.onLayout(l, t, r, b);
    }
    // @ts-ignore
    super.onLayout(changed, l, t, r, b);
  }
}

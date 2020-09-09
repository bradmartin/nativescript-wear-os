import { View } from '@nativescript/core';
import {
  ITEMDESELECTED,
  ItemEventData,
  ITEMSELECTED,
  ITEMTAP
} from './wear-os-listview-base';
import { WearOsListView } from './wear-os-listview.android';

@Interfaces([
  android.view.View.OnClickListener,
  android.view.View.OnLongClickListener,
])
@NativeClass()
export class TNS_WearOsListViewHolder extends androidx.recyclerview.widget
  .RecyclerView.ViewHolder {
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

  public onClick(v: android.view.View) {
    const listView = this.list.get();
    const index = this.getAdapterPosition();
    listView.notify<ItemEventData>({
      eventName: ITEMTAP,
      object: listView,
      index: index,
      view: this.view,
      android: v,
      ios: undefined,
    });

    if (listView.selectionBehavior !== 'Press') return;
    const items = listView.items as any;
    const item = items.getItem ? items.getItem(index) : items[index];
    if (listView.multipleSelection) {
      if (this.isSelected()) {
        listView._itemsSelected = listView._itemsSelected.filter((selected) => {
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
          ios: undefined,
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
          ios: undefined,
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
          ios: undefined,
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
          ios: undefined,
        });
      }
    }
  }

  public onLongClick(v: android.view.View) {
    const listView = this.list.get();
    const index = this.getAdapterPosition();
    if (listView.selectionBehavior === 'LongPress') {
      const items = listView.items as any;
      const item = items.getItem ? items.getItem(index) : items[index];
      if (listView.multipleSelection) {
        if (this.isSelected()) {
          listView._itemsSelected = listView._itemsSelected.filter(
            (selected) => {
              if (selected !== item) {
                return selected;
              }
            }
          );
          this.setIsSelected(false);

          listView.notify<ItemEventData>({
            eventName: ITEMDESELECTED,
            object: listView,
            index: index,
            view: this.view,
            android: v,
            ios: undefined,
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
            ios: undefined,
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
            ios: undefined,
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
            ios: undefined,
          });
        }
      }
    }
    return true;
  }
}

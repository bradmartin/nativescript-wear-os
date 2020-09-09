import {
  KeyedTemplate,
  Observable,
  PercentLength,
  Template,
  Utils,
  View
} from '@nativescript/core';
import { TNS_CustomScrollingLayoutCallback } from './tns-custom-scrolling-layout-callback';
import {
  ensureWearOsListViewAdapterClass,
  TNS_WearOsListViewAdapterClass
} from './tns-wear-os-adapter';
import { TNS_WearableRecyclerView } from './tns-wearable-recyclerview';
import * as BASE from './wear-os-listview-base';

// Need to make sure the base is all exposed
export * from './wear-os-listview-base';

export class WearOsListView extends BASE.WearOsListViewBase {
  static itemLoadingEvent = BASE.ITEMLOADING;
  static itemTapEvent = BASE.ITEMTAP;
  nativeViewProtected: any;
  listView: TNS_WearableRecyclerView;
  circularScrollingEnabled: boolean = false;
  useScalingScroll: boolean = false;
  _itemWidth: any;
  _itemHeight: any;
  itemWidth: PercentLength;
  itemHeight: PercentLength;
  spanCount: number;
  items: any[] | BASE.ItemsSource;
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

  public createNativeView() {
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

  public initNativeView() {
    super.initNativeView();
    const that = new WeakRef(this);

    this.nativeViewProtected.setEnabled(false);

    if (this._androidViewId < 0) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this.nativeViewProtected.setId(this._androidViewId);

    // To align the edge children (first and last) with the center of the screen
    this.listView.setEdgeItemsCenteringEnabled(true);

    ensureWearOsListViewAdapterClass();
    const adapter = new TNS_WearOsListViewAdapterClass(new WeakRef(this));
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

    BASE.itemWidthProperty.coerce(this);
    BASE.itemHeightProperty.coerce(this);
  }

  public disposeNativeView() {
    const nativeView = this.nativeViewProtected;
    nativeView.setAdapter(null);

    this.eachChildView((view) => {
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

  public onLoaded() {
    super.onLoaded();
    // Without this call itemClick won't be fired... :(
    this.requestLayout();
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    super.onLayout(left, top, right, bottom);
    this.refresh();
  }

  public refresh(): void {
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

  public scrollToIndex(index: number) {
    const nativeView = this.nativeViewProtected;
    if (nativeView) {
      nativeView.setSelection(index);
    }
  }

  public scrollToIndexAnimated(index: number) {
    const nativeView = this.nativeViewProtected;
    if (nativeView) {
      nativeView.smoothScrollToPosition(index);
    }
  }

  get _childrenCount(): number {
    return this._realizedItems.size;
  }

  public eachChildView(callback: (child: View) => boolean): void {
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

  [BASE.itemTemplatesProperty.getDefault](): KeyedTemplate[] {
    return null;
  }

  [BASE.itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
    this._itemTemplatesInternal = new Array<KeyedTemplate>(
      this._defaultTemplate
    );
    if (value) {
      this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
    }
    // assigning to any bc typings don't have the inherited methods for some unknown reason
    (this.listView as any).setAdapter(
      new TNS_WearOsListViewAdapterClass(new WeakRef(this))
    );
    this.refresh();
  }
}

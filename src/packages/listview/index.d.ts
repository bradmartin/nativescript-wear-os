import { PercentLength, Template, View } from '@nativescript/core';
import { TNS_WearableRecyclerView } from './tns-wearable-recyclerview';
import { ItemsSource, WearOsListViewBase } from './wear-os-listview-base';

export declare class WearOsListView extends WearOsListViewBase {
  static itemLoadingEvent: string;
  static itemTapEvent: string;
  nativeViewProtected: any;
  listView: TNS_WearableRecyclerView;
  circularScrollingEnabled: boolean;
  _itemWidth: any;
  _itemHeight: any;
  itemWidth: PercentLength;
  itemHeight: PercentLength;
  spanCount: number;
  items: any[] | ItemsSource;
  itemTemplate: string | Template;
  _realizedItems: Map<globalAndroid.view.View, View>;
  _random: java.util.Random;
  _itemsSelected: any[];
  _staggeredMap: Map<number, number>;
  private _androidViewId;
  readonly android: TNS_WearableRecyclerView;
  constructor();
  createNativeView(): TNS_WearableRecyclerView;
  initNativeView(): void;
  disposeNativeView(): void;
  onLoaded(): void;
  onLayout(left: number, top: number, right: number, bottom: number): void;
  refresh(): void;
  scrollToIndex(index: number): void;
  scrollToIndexAnimated(index: number): void;
  readonly _childrenCount: number;
  eachChildView(callback: (child: View) => boolean): void;
  private _clearRealizedCells;
}

export interface ItemEventData {
  eventName: string;
  object: any;
  index: number;
  view: View;
  android: any;
  ios: any;
}

export interface ItemsSource {
  length: number;

  getItem(index: number): any;
}

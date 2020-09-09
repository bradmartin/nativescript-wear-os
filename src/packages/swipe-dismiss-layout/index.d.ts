import { AddChildFromBuilder, View } from '@nativescript/core';

export declare class SwipeDismissLayout
  extends View
  implements AddChildFromBuilder {
  static dimissedEvent: string;
  static swipeCanceledEvent: string;
  static swipeStartedEvent: string;
  private _android;
  private _holder;
  private _callback;
  private _androidViewId;
  private _childViews;
  constructor();
  readonly android: androidx.wear.widget.SwipeDismissFrameLayout;
  createNativeView(): androidx.wear.widget.SwipeDismissFrameLayout;
  initNativeView(): void;
  disposeNativeView(): void;
  onLoaded(): void;
  _addChildFromBuilder(name: string, value: View): void;
}

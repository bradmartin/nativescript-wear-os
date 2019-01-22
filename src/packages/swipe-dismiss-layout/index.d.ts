import { AddChildFromBuilder } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
export declare class SwipeDismissLayout extends View
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
  readonly android: globalAndroid.support.wear.widget.SwipeDismissFrameLayout;
  createNativeView(): globalAndroid.support.wear.widget.SwipeDismissFrameLayout;
  initNativeView(): void;
  disposeNativeView(): void;
  onLoaded(): void;
  _addChildFromBuilder(name: string, value: View): void;
}

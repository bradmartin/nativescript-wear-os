import { AddChildFromBuilder } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
import { TNS_SwipeDismissFrameLayoutCallback } from './callback';

export class SwipeDismissLayout extends View implements AddChildFromBuilder {
  /**
   * String value for hooking into the layout dismissed event. This event fires when the swipe layout has been dismissed.
   */
  public static dimissedEvent = 'dismissed';
  /**
   * String value for hooking into the layout dismissed event. This event fires when the swipe layout has been dismissed.
   */
  public static swipeCanceledEvent = 'swipeCanceled';
  /**
   * String value for hooking into the layout dismissed event. This event fires when the swipe layout has been dismissed.
   */
  public static swipeStartedEvent = 'swipeStarted';
  private _android: android.support.wear.widget.SwipeDismissFrameLayout;
  private _holder: android.widget.LinearLayout;
  private _callback: TNS_SwipeDismissFrameLayoutCallback;
  private _androidViewId: number;
  private _childViews: Map<number, View>;

  constructor() {
    super();
  }
  get android() {
    return this._android;
  }

  get swipeable() {
    return (this._android as any).isSwipeable();
  }

  set swipeable(value: boolean) {
    this._android.setSwipeable(value);
  }

  createNativeView() {
    this._android = new android.support.wear.widget.SwipeDismissFrameLayout(
      this._context
    );
    this._holder = new android.widget.LinearLayout(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);

    this._holder.setOrientation(android.widget.LinearLayout.VERTICAL);
    this._holder.setGravity(android.view.Gravity.FILL_VERTICAL);
    this._holder.setLayoutParams(
      new android.view.ViewGroup.LayoutParams(
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.ViewGroup.LayoutParams.FILL_PARENT
      )
    );

    this._android.addView(this._holder);

    return this._android;
  }

  public initNativeView() {
    super.initNativeView();
    // add the layout callback
    this._callback = new TNS_SwipeDismissFrameLayoutCallback(
      new WeakRef(this as any)
    );
    this._android.addCallback(this._callback);
  }

  public disposeNativeView() {
    super.disposeNativeView();
  }

  public onLoaded(): void {
    super.onLoaded();
    this._childViews.forEach(value => {
      if (!value.parent) {
        this._addView(value);
        this._holder.addView(value.nativeView);
      }
    });
  }

  _addChildFromBuilder(name: string, value: View): void {
    if (!this._childViews) {
      this._childViews = new Map<number, View>();
    }
    if (!value.parent) {
      this._childViews.set(value._domId, value);
    }
  }
}

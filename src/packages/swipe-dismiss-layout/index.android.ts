import {
  AddChildFromBuilder,
  ContentView
} from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
import { AndroidX_WidgetNamespace } from '../../index';
import { TNS_SwipeDismissFrameLayoutCallback } from './callback';

export class SwipeDismissLayout extends ContentView
  implements AddChildFromBuilder {
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
  private _android: any; // androidx.wear.widget.SwipeDismissFrameLayout;
  private _holder: android.widget.LinearLayout;
  private _callback: TNS_SwipeDismissFrameLayoutCallback;
  private _androidViewId: number;
  private _content: View;

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
    this._android = new AndroidX_WidgetNamespace.SwipeDismissFrameLayout(
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

  initNativeView() {
    super.initNativeView();
    // add the layout callback
    this._callback = new TNS_SwipeDismissFrameLayoutCallback(
      new WeakRef(this as any)
    );
    this._android.addCallback(this._callback);
  }

  disposeNativeView() {
    super.disposeNativeView();
  }

  onLoaded(): void {
    super.onLoaded();
    if (this._content.nativeView.getParent() != null) {
      (this._content.nativeView.getParent() as android.view.ViewGroup).removeView(
        this._content.nativeView
      );
    }
    this._holder.addView(this._content.nativeView);
  }

  get _childrenCount(): number {
    return this._content ? 1 : 0;
  }

  public _onContentChanged(oldView: View, newView: View) {
    //
  }

  public _addChildFromBuilder(name: string, value: any) {
    if (value instanceof View) {
      this.content = value;
    }
  }

  public eachChildView(callback: (child: View) => boolean) {
    const content = this._content;
    if (content) {
      callback(content);
    }
  }
}

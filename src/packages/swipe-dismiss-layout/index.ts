import { AddChildFromBuilder, ContentView, View } from '@nativescript/core';

export class SwipeDismissLayout
  extends ContentView
  implements AddChildFromBuilder {
  /**
   * String value for hooking into the layout dismissed event. This event fires when the swipe layout has been dismissed.
   */
  static dimissedEvent = 'dismissed';
  /**
   * String value for hooking into the layout dismissed event. This event fires when the swipe layout has been dismissed.
   */
  static swipeCanceledEvent = 'swipeCanceled';
  /**
   * String value for hooking into the layout dismissed event. This event fires when the swipe layout has been dismissed.
   */
  static swipeStartedEvent = 'swipeStarted';
  private _android: androidx.wear.widget.SwipeDismissFrameLayout;
  private _holder: android.widget.LinearLayout;
  private _callback: any;
  private _androidViewId: number;
  private _content: View;

  constructor() {
    super();
  }
  // get android() {
  //   return this._android;
  // }

  get swipeable() {
    return this._android.isSwipeable();
  }

  set swipeable(value: boolean) {
    this._android.setSwipeable(value);
  }

  createNativeView() {
    this._android = new androidx.wear.widget.SwipeDismissFrameLayout(
      this._context
    );
    this._holder = new android.widget.LinearLayout(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    (this._android as any).setId(this._androidViewId);

    this._holder.setOrientation(android.widget.LinearLayout.VERTICAL);
    this._holder.setGravity(android.view.Gravity.FILL_VERTICAL);
    this._holder.setLayoutParams(
      new android.view.ViewGroup.LayoutParams(
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.ViewGroup.LayoutParams.FILL_PARENT
      )
    );

    (this._android as any).addView(this._holder);

    return this._android;
  }

  initNativeView() {
    super.initNativeView();
    this._callback = new TNS_SwipeDismissFrameLayoutCallback(new WeakRef(this));
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

  _onContentChanged(oldView: View, newView: View) {
    //
  }

  _addChildFromBuilder(name: string, value: any) {
    if (value instanceof View) {
      this.content = value;
    }
  }

  eachChildView(callback: (child: View) => boolean) {
    const content = this._content;
    if (content) {
      callback(content);
    }
  }
}

@NativeClass()
class TNS_SwipeDismissFrameLayoutCallback extends androidx.wear.widget
  .SwipeDismissFrameLayout.Callback {
  private readonly owner: WeakRef<SwipeDismissLayout>;

  constructor(owner: WeakRef<SwipeDismissLayout>) {
    super();
    this.owner = owner;
    return global.__native(this);
  }

  onDismissed(layout: any) {
    const owner = this.owner && this.owner.get();
    if (owner) {
      owner.notify({
        eventName: SwipeDismissLayout.dimissedEvent,
        object: owner
      });
    }
  }

  onSwipeCanceled(layout) {
    const owner = this.owner && this.owner.get();
    if (owner) {
      owner.notify({
        eventName: SwipeDismissLayout.swipeCanceledEvent,
        object: owner
      });
    }
  }

  onSwipeStarted(layout) {
    const owner = this.owner && this.owner.get();
    if (owner) {
      owner.notify({
        eventName: SwipeDismissLayout.swipeStartedEvent,
        object: owner
      });
    }
  }
}

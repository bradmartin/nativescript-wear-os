import { AddChildFromBuilder, ContentView, View } from '@nativescript/core';

export class BoxInsetLayout extends ContentView implements AddChildFromBuilder {
  private _android: any;
  private _holder: android.widget.LinearLayout;
  private _androidViewId: number;
  private _content: View;

  constructor() {
    super();
  }

  // get android() {
  //   return this._android;
  // }

  createNativeView() {
    this._android = new androidx.wear.widget.BoxInsetLayout(this._context);
    this._holder = new android.widget.LinearLayout(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);
    this._holder.setOrientation(android.widget.LinearLayout.VERTICAL);
    this._holder.setGravity(android.view.Gravity.FILL_VERTICAL);
    (this._holder as any).setLayoutParams(
      new androidx.wear.widget.BoxInsetLayout.LayoutParams(
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.Gravity.FILL_VERTICAL,
        15 // androidx.wear.widget.BoxInsetLayout.LayoutParams.BOX_ALL
      )
    );

    this._android.addView(this._holder);

    return this._android;
  }

  initNativeView() {
    super.initNativeView();
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

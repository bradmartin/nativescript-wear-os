/// <reference path="../../node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="../../typings/wear-27.1.1.d.ts" />

import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
import { ContentView } from 'tns-core-modules/ui/content-view';

export class BoxInsetLayout extends ContentView implements AddChildFromBuilder {
  private _android: android.support.wear.widget.BoxInsetLayout;
  private _holder: android.widget.LinearLayout;
  private _androidViewId: number;
  private _childViews: Map<number, View>;

  constructor() {
    super();
  }

  get android() {
    return this._android;
  }

  public createNativeView() {
    this._android = new android.support.wear.widget.BoxInsetLayout(
      this._context
    );
    this._holder = new android.widget.LinearLayout(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);
    this._holder.setOrientation(android.widget.LinearLayout.VERTICAL);
    this._holder.setGravity(android.view.Gravity.FILL_VERTICAL);
    (this._holder as any).setLayoutParams(
      new android.support.wear.widget.BoxInsetLayout.LayoutParams(
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.Gravity.FILL_VERTICAL,
        android.support.wear.widget.BoxInsetLayout.LayoutParams.BOX_ALL
      )
    );

    this._android.addView(this._holder);

    return this._android;
  }

  public initNativeView() {
    super.initNativeView();
  }

  public disposeNativeView() {
    super.disposeNativeView();
  }

  _addChildFromBuilder(name: string, value: View): void {
    if (value instanceof View) {
      this.content = value;
    }
  }
}

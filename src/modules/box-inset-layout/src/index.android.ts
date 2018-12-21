import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';

export class BoxInsetLayout extends View implements AddChildFromBuilder {
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
    this._holder.setLayoutParams(
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

  public onLoaded(): void {
    super.onLoaded();
    this._childViews.forEach(value => {
      this._addView(value);
      this._holder.addView(value.nativeView);
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

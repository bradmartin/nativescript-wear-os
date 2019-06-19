import { screen } from 'tns-core-modules/platform';
import { AddChildFromBuilder, ContentView } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
import { ad } from 'tns-core-modules/utils/utils';

export class WearOsLayout extends ContentView implements AddChildFromBuilder {
  public disableInsetConstraint: boolean = false;
  private _android: android.widget.LinearLayout;
  private _androidViewId: number;
  private _content: View;
  private static SCALE_FACTOR = 0.146467; // c = a * sqrt(2)

  constructor() {
    super();
  }

  get android() {
    return this._android;
  }

  createNativeView() {
    this._android = new android.widget.LinearLayout(this._context);
    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);

    this._android.setOrientation(android.widget.LinearLayout.VERTICAL);
    this._android.setGravity(android.view.Gravity.FILL_VERTICAL);
    this._android.setLayoutParams(
      new android.view.ViewGroup.LayoutParams(
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.ViewGroup.LayoutParams.FILL_PARENT
      )
    );

    if (this.disableInsetConstraint === false) {
      // Check for inset here and if we have it apply the default padding for circle watches
      const inset = this._adjustInset();
      if (inset) {
        this._android.setPadding(inset, inset, inset, inset);
      }
    }

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
    if (this.content.nativeView.getParent() != null) {
      (this.content.nativeView.getParent() as android.view.ViewGroup).removeView(
        this.content.nativeView
      );
    }

    this._android.addView(this.content.nativeView);
  }

  get _childrenCount(): number {
    return this.content ? 1 : 0;
  }

  _onContentChanged(oldView: View, newView: View) {
    //
  }

  _addChildFromBuilder(name: string, value: any) {
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

  /**
   * If the watch is a round/circle then the inset value will be returned.
   */
  private _adjustInset() {
    let result = null;

    const androidConfig = (ad.getApplicationContext() as android.content.Context)
      .getResources()
      .getConfiguration();
    // https://developer.android.com/reference/android/content/res/Configuration.html#isScreenRound()
    const isCircleWatch = (androidConfig as any).isScreenRound();

    if (isCircleWatch) {
      result = WearOsLayout.SCALE_FACTOR * screen.mainScreen.widthPixels;
    }
    return result;
  }
}

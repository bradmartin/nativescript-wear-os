import { screen } from 'tns-core-modules/platform';
import { AddChildFromBuilder } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
import { ad } from 'tns-core-modules/utils/utils';

declare const com: any;

export class WearOsLayout extends View implements AddChildFromBuilder {
  private _android: any;
  private _holder: android.widget.LinearLayout;
  private _androidViewId: number;
  private _childViews: Map<number, View>;
  private static SCALE_FACTOR = 0.146467; // c = a * sqrt(2)

  public scrollable = false;

  constructor() {
    super();
  }

  get android() {
    return this._android;
  }

  set scrollEnabled(value: boolean) {
    if (value) {
      this.scrollable = value;
      this._android.setEnableScrolling(value);
    }
  }

  createNativeView() {
    this._android = new com.github.bradmartin.LockableNestedScrollView(
      this._context
    );

    console.log('scrollable on wearos layout: ', this.scrollable);
    // check if user wants to disable scroll
    if (this.scrollable === false) {
      console.log('setting scroll to false');
      this._android.setEnableScrolling(false);
      console.log(this._android);
    }

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

    // Check for inset here and if we have it apply he default padding for circle watches
    const inset = this._adjustInset();
    if (inset) {
      this._holder.setPadding(inset, inset, inset, inset);
    }

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

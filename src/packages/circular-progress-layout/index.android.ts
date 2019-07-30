import { Color } from 'tns-core-modules/color';
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';

export class CircularProgressLayout extends View
  implements AddChildFromBuilder {
  private _android: any;
  private _holder: android.widget.LinearLayout;
  private _androidViewId: number;
  private _childViews: Map<number, View>;

  constructor() {
    super();
  }

  get android() {
    return this._android;
  }

  set strokeWidth(value: number) {
    if (value) {
      this.android.setStrokeWidth(value);
    }
  }

  set indeterminate(value: boolean) {
    if (value) {
      this.android.setIndeterminate(value);
    }
  }

  set totalTime(value) {
    if (value) {
      this.android.setTotalTime(value);
    }
  }

  set backgroundColor(value) {
    this.android.setBackgroundColor(new Color(value).android);
  }

  public createNativeView() {
    this._android = new androidx.wear.widget.CircularProgressLayout(
      this._context
    );
    // this._holder = new android.widget.LinearLayout(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    (this._android as any).setId(this._androidViewId);
    // this._holder.setOrientation(android.widget.LinearLayout.VERTICAL);
    // this._holder.setGravity(android.view.Gravity.FILL_VERTICAL);
    // (this._holder as any).setLayoutParams(
    //   new androidx.wear.widget.BoxInsetLayout.LayoutParams(
    //     android.view.ViewGroup.LayoutParams.FILL_PARENT,
    //     android.view.ViewGroup.LayoutParams.FILL_PARENT,
    //     android.view.Gravity.FILL_VERTICAL,
    //     15 // androidx.wear.widget.BoxInsetLayout.LayoutParams.BOX_ALL
    //   )
    // );

    // this._android.addView(this._holder);

    return this._android;
  }

  public initNativeView() {
    super.initNativeView();

    if (this.totalTime) {
      this.android.setTotalTime(this.totalTime);
    }

    const timerFinishedListener = new androidx.wear.widget.CircularProgressLayout.OnTimerFinishedListener(
      {
        onTimerFinished(param0) {
          console.log('timer finished');
        }
      }
    );
    this.android.setOnTimerFinishedListener(timerFinishedListener);
  }

  public disposeNativeView() {
    super.disposeNativeView();
  }

  public startTimer() {
    this.android.startTimer();
  }

  public stopTimer() {
    this.android.stopTimer();
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

import { AddChildFromBuilder, View } from '@nativescript/core';
export declare class CircularProgressLayout
  extends View
  implements AddChildFromBuilder {
  private _android;
  private _holder;
  private _androidViewId;
  private _childViews;
  constructor();
  set strokeWidth(value: number);
  set indeterminate(value: boolean);
  set totalTime(value: any);
  createNativeView(): any;
  initNativeView(): void;
  disposeNativeView(): void;
  startTimer(): void;
  stopTimer(): void;
  onLoaded(): void;
  _addChildFromBuilder(name: string, value: View): void;
}

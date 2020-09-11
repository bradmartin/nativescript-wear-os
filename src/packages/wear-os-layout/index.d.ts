import { AddChildFromBuilder, View } from '@nativescript/core';

export declare class WearOsLayout extends View implements AddChildFromBuilder {
  private _android: android.widget.ScrollView;
  private _holder: android.widget.LinearLayout;
  private _androidViewId: number;
  private _childViews: Map<number, View>;
  private static FACTOR;
  constructor();
  readonly android: android.widget.ScrollView;
  createNativeView(): android.widget.ScrollView;
  initNativeView(): void;
  disposeNativeView(): void;
  onLoaded(): void;
  _addChildFromBuilder(name: string, value: View): void;
  private _adjustInset;
}

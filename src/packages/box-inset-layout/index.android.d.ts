import { AddChildFromBuilder, ContentView, View } from '@nativescript/core';
export declare class BoxInsetLayout
  extends ContentView
  implements AddChildFromBuilder {
  private _android;
  private _holder;
  private _androidViewId;
  private _content;
  constructor();
  createNativeView(): any;
  initNativeView(): void;
  disposeNativeView(): void;
  onLoaded(): void;
  get _childrenCount(): number;
  _onContentChanged(oldView: View, newView: View): void;
  _addChildFromBuilder(name: string, value: any): void;
  eachChildView(callback: (child: View) => boolean): void;
}

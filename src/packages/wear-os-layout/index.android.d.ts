import { AddChildFromBuilder, ContentView, View } from '@nativescript/core';
export declare class WearOsLayout extends ContentView implements AddChildFromBuilder {
    disableInsetConstraint: boolean;
    private _android;
    private _androidViewId;
    private _content;
    private static SCALE_FACTOR;
    constructor();
    createNativeView(): globalAndroid.widget.LinearLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    get _childrenCount(): number;
    _onContentChanged(oldView: View, newView: View): void;
    _addChildFromBuilder(name: string, value: any): void;
    eachChildView(callback: (child: View) => boolean): void;
    private _adjustInset;
}

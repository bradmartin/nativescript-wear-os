/// <reference path="../../node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="../../typings/wear-27.1.1.d.ts" />
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
import { ContentView } from 'tns-core-modules/ui/content-view';
export declare class BoxInsetLayout extends ContentView implements AddChildFromBuilder {
    private _android;
    private _holder;
    private _androidViewId;
    private _childViews;
    constructor();
    readonly android: globalAndroid.support.wear.widget.BoxInsetLayout;
    createNativeView(): globalAndroid.support.wear.widget.BoxInsetLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    _addChildFromBuilder(name: string, value: View): void;
}

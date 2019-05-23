/// <reference path="../../typings/wear-27.1.1.d.ts" />
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
export declare class BoxInsetLayout extends View implements AddChildFromBuilder {
    private _android;
    private _holder;
    private _androidViewId;
    private _childViews;
    constructor();
    readonly android: globalAndroid.support.wear.widget.BoxInsetLayout;
    createNativeView(): globalAndroid.support.wear.widget.BoxInsetLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    _addChildFromBuilder(name: string, value: View): void;
}

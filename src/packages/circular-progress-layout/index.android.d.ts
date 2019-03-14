/// <reference path="../../node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="../../typings/wear-27.1.1.d.ts" />
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
export declare class CircularProgressLayout extends View implements AddChildFromBuilder {
    private _android;
    private _holder;
    private _androidViewId;
    private _childViews;
    constructor();
    readonly android: globalAndroid.support.wear.widget.CircularProgressLayout;
    strokeWidth: number;
    indeterminate: boolean;
    totalTime: any;
    backgroundColor: any;
    createNativeView(): globalAndroid.support.wear.widget.CircularProgressLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    startTimer(): void;
    stopTimer(): void;
    onLoaded(): void;
    _addChildFromBuilder(name: string, value: View): void;
}

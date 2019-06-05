/// <reference path="../../typings/wear-27.1.1.d.ts" />
import { ContentView } from 'tns-core-modules/ui/content-view';
import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
export declare class BoxInsetLayout extends ContentView implements AddChildFromBuilder {
    private _android;
    private _holder;
    private _androidViewId;
    private _content;
    constructor();
    readonly android: globalAndroid.support.wear.widget.BoxInsetLayout;
    createNativeView(): globalAndroid.support.wear.widget.BoxInsetLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    readonly _childrenCount: number;
    _onContentChanged(oldView: View, newView: View): void;
    _addChildFromBuilder(name: string, value: any): void;
    eachChildView(callback: (child: View) => boolean): void;
}

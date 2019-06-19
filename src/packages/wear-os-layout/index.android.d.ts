import { AddChildFromBuilder, ContentView } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
export declare class WearOsLayout extends ContentView implements AddChildFromBuilder {
    disableInsetConstraint: boolean;
    private _android;
    private _androidViewId;
    private _content;
    private static SCALE_FACTOR;
    constructor();
    readonly android: globalAndroid.widget.LinearLayout;
    createNativeView(): globalAndroid.widget.LinearLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    readonly _childrenCount: number;
    _onContentChanged(oldView: View, newView: View): void;
    _addChildFromBuilder(name: string, value: any): void;
    eachChildView(callback: (child: View) => boolean): void;
    private _adjustInset;
}

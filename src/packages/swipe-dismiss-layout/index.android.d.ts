import { AddChildFromBuilder, ContentView } from 'tns-core-modules/ui/content-view';
import { View } from 'tns-core-modules/ui/core/view';
export declare class SwipeDismissLayout extends ContentView implements AddChildFromBuilder {
    static dimissedEvent: string;
    static swipeCanceledEvent: string;
    static swipeStartedEvent: string;
    private _android;
    private _holder;
    private _callback;
    private _androidViewId;
    private _content;
    constructor();
    readonly android: any;
    swipeable: boolean;
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    readonly _childrenCount: number;
    _onContentChanged(oldView: View, newView: View): void;
    _addChildFromBuilder(name: string, value: any): void;
    eachChildView(callback: (child: View) => boolean): void;
}

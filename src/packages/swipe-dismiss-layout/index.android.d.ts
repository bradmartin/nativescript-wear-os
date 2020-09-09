import { AddChildFromBuilder, ContentView, View } from '@nativescript/core';
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
    get swipeable(): boolean;
    set swipeable(value: boolean);
    createNativeView(): androidx.wear.widget.SwipeDismissFrameLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    get _childrenCount(): number;
    _onContentChanged(oldView: View, newView: View): void;
    _addChildFromBuilder(name: string, value: any): void;
    eachChildView(callback: (child: View) => boolean): void;
}

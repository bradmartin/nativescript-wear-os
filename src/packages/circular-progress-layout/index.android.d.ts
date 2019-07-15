import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
export declare class CircularProgressLayout extends View implements AddChildFromBuilder {
    private _android;
    private _holder;
    private _androidViewId;
    private _childViews;
    constructor();
    readonly android: any;
    strokeWidth: number;
    indeterminate: boolean;
    totalTime: any;
    backgroundColor: any;
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    startTimer(): void;
    stopTimer(): void;
    onLoaded(): void;
    _addChildFromBuilder(name: string, value: View): void;
}

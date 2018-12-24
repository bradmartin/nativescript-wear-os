import { SwipeDismissFrameLayout } from './index.android';
export declare class TNS_SwipeDismissFrameLayoutCallback extends android.support.wear
    .widget.SwipeDismissFrameLayout.Callback {
    private owner;
    constructor(owner: WeakRef<SwipeDismissFrameLayout>);
    onDismissed(layout: android.support.wear.widget.SwipeDismissFrameLayout): void;
    onSwipeCanceled(layout: android.support.wear.widget.SwipeDismissFrameLayout): void;
    onSwipeStarted(layout: android.support.wear.widget.SwipeDismissFrameLayout): void;
}

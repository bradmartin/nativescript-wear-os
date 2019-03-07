import { SwipeDismissLayout } from './index';
export declare class TNS_SwipeDismissFrameLayoutCallback extends android.support.wear
    .widget.SwipeDismissFrameLayout.Callback {
    private owner;
    constructor(owner: WeakRef<SwipeDismissLayout>);
    onDismissed(layout: android.support.wear.widget.SwipeDismissFrameLayout): void;
    onSwipeCanceled(layout: android.support.wear.widget.SwipeDismissFrameLayout): void;
    onSwipeStarted(layout: android.support.wear.widget.SwipeDismissFrameLayout): void;
}

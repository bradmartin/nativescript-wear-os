import { SwipeDismissLayout } from './index';
export declare class TNS_SwipeDismissFrameLayoutCallback extends androidx.wear.widget
    .SwipeDismissFrameLayout.Callback {
    private owner;
    constructor(owner: WeakRef<SwipeDismissLayout>);
    onDismissed(layout: any): void;
    onSwipeCanceled(layout: any): void;
    onSwipeStarted(layout: any): void;
}

import { AndroidX_WidgetNamespace } from '../../index';
import { SwipeDismissLayout } from './index';
export declare class TNS_SwipeDismissFrameLayoutCallback extends AndroidX_WidgetNamespace
    .SwipeDismissFrameLayout.Callback {
    private owner;
    constructor(owner: WeakRef<SwipeDismissLayout>);
    onDismissed(layout: any): void;
    onSwipeCanceled(layout: any): void;
    onSwipeStarted(layout: any): void;
}

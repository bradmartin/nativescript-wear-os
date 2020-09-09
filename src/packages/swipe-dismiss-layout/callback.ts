import { SwipeDismissLayout } from './index';

export class TNS_SwipeDismissFrameLayoutCallback extends androidx.wear.widget
  .SwipeDismissFrameLayout.Callback {
  constructor(private owner: WeakRef<SwipeDismissLayout>) {
    super();
    return global.__native(this);
  }

  onDismissed(layout: any) {
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.dimissedEvent,
      object: owner,
    });
  }

  onSwipeCanceled(layout) {
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.swipeCanceledEvent,
      object: owner,
    });
  }

  onSwipeStarted(layout) {
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.swipeStartedEvent,
      object: owner,
    });
  }
}

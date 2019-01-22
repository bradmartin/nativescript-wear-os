import { SwipeDismissLayout } from './index';

// tslint:disable-next-line:class-name
export class TNS_SwipeDismissFrameLayoutCallback extends android.support.wear
  .widget.SwipeDismissFrameLayout.Callback {
  constructor(private owner: WeakRef<SwipeDismissLayout>) {
    super();
    return global.__native(this);
  }

  onDismissed(layout: android.support.wear.widget.SwipeDismissFrameLayout) {
    // console.log('onDismissed', layout);
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.dimissedEvent,
      object: owner
    });
  }

  onSwipeCanceled(layout: android.support.wear.widget.SwipeDismissFrameLayout) {
    // console.log('swipe canceled', layout);
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.swipeCanceledEvent,
      object: owner
    });
  }

  onSwipeStarted(layout: android.support.wear.widget.SwipeDismissFrameLayout) {
    // console.log('swipe started', layout);
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.swipeStartedEvent,
      object: owner
    });
  }
}

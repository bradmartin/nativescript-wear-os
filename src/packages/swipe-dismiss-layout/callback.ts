import { AndroidX_WidgetNamespace } from '../../index';
import { SwipeDismissLayout } from './index';

// tslint:disable-next-line:class-name
export class TNS_SwipeDismissFrameLayoutCallback extends AndroidX_WidgetNamespace
  .SwipeDismissFrameLayout.Callback {
  constructor(private owner: WeakRef<SwipeDismissLayout>) {
    super();
    return global.__native(this);
  }

  onDismissed(layout: any) {
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.dimissedEvent,
      object: owner
    });
  }

  onSwipeCanceled(layout) {
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.swipeCanceledEvent,
      object: owner
    });
  }

  onSwipeStarted(layout) {
    const owner = this.owner.get();
    owner.notify({
      eventName: SwipeDismissLayout.swipeStartedEvent,
      object: owner
    });
  }
}

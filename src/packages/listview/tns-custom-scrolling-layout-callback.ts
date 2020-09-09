@NativeClass()
export class TNS_CustomScrollingLayoutCallback extends androidx.wear.widget
  .WearableLinearLayoutManager.LayoutCallback {
  /** How much should we scale the icon at most. */
  private static MAX_ICON_PROGRESS = 2;

  constructor() {
    super();
  }

  onLayoutFinished(
    child: android.view.View,
    parent: androidx.recyclerview.widget.RecyclerView
  ) {
    // Figure out % progress from top to bottom
    const centerOffset = child.getHeight() / 2.0 / parent.getHeight();
    const yRelativeToCenterOffset =
      child.getY() / parent.getHeight() + centerOffset;

    const progresstoCenter = Math.sin(yRelativeToCenterOffset * Math.PI);

    // Normalize for center
    let mProgressToCenter = Math.abs(0.5 - yRelativeToCenterOffset);
    // Adjust to the maximum scale
    mProgressToCenter = Math.min(
      mProgressToCenter,
      TNS_CustomScrollingLayoutCallback.MAX_ICON_PROGRESS
    );

    // scale the items
    child.setScaleX(1 - mProgressToCenter);
    child.setScaleY(1 - mProgressToCenter);
    child.setX(+(1 - progresstoCenter) * 100);
  }
}

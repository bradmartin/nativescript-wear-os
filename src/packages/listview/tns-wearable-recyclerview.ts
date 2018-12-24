import { WearOsListView } from './wear-os-listview.android';

export class TNS_WearableRecyclerView extends android.support.wear.widget
  .WearableRecyclerView {
  constructor(
    context: android.content.Context,
    private owner: WeakRef<WearOsListView>
  ) {
    super(context);
    return global.__native(this);
  }

  public onLayout(
    changed: boolean,
    l: number,
    t: number,
    r: number,
    b: number
  ) {
    if (changed) {
      const owner = this.owner.get();
      owner.onLayout(l, t, r, b);
    }
    super.onLayout(changed, l, t, r, b);
  }
}

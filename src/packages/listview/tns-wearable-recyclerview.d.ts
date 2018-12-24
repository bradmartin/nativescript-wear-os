import { WearOsListView } from './wear-os-listview.android';
export declare class TNS_WearableRecyclerView extends android.support.wear.widget
    .WearableRecyclerView {
    private owner;
    constructor(context: android.content.Context, owner: WeakRef<WearOsListView>);
    onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
}

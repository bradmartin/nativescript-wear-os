import { AndroidX_WidgetNamespace } from '../../index';
import { WearOsListView } from './wear-os-listview.android';
export declare class TNS_WearableRecyclerView extends AndroidX_WidgetNamespace.WearableRecyclerView {
    private owner;
    constructor(context: android.content.Context, owner: WeakRef<WearOsListView>);
    onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
}

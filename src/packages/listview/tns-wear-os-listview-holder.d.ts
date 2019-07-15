import { View } from 'tns-core-modules/ui/core/view';
import { RecyclerView_Namespace } from '../../index';
import { WearOsListView } from './wear-os-listview.android';
export declare class TNS_WearOsListViewHolder extends RecyclerView_Namespace.RecyclerView.ViewHolder implements android.view.View.OnClickListener, android.view.View.OnLongClickListener {
    private owner;
    private list;
    _selected: boolean;
    constructor(owner: WeakRef<View>, list: WeakRef<WearOsListView>);
    isSelected(): boolean;
    setIsSelected(selected: boolean): void;
    readonly view: View;
    onClick(v: android.view.View): void;
    onLongClick(v: android.view.View): boolean;
}

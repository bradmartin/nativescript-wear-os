import { View } from '@nativescript/core';
import { WearOsListView } from './wear-os-listview.android';
export declare class TNS_WearOsListViewHolder extends androidx.recyclerview.widget
    .RecyclerView.ViewHolder {
    private owner;
    private list;
    _selected: boolean;
    constructor(owner: WeakRef<View>, list: WeakRef<WearOsListView>);
    isSelected(): boolean;
    setIsSelected(selected: boolean): void;
    get view(): View;
    onClick(v: android.view.View): void;
    onLongClick(v: android.view.View): boolean;
}

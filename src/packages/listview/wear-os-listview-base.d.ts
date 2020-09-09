import { ChangedData, CoercibleProperty, KeyedTemplate, PercentLength, Property, Template, View } from '@nativescript/core';
export * from '@nativescript/core/ui/core/view';
export declare const ITEMLOADING = "itemLoading";
export declare const LOADMOREITEMS = "loadMoreItems";
export declare const ITEMTAP = "itemTap";
export declare const SCROLLEVENT = "scroll";
export declare const ITEMSELECTED = "itemSelected";
export declare const ITEMSELECTING = "itemSelecting";
export declare const ITEMDESELECTED = "itemDeselected";
export declare const ITEMDESELECTING = "itemDeselecting";
export declare const PULLTOREFRESHINITIATEDEVENT = "pullToRefreshInitiated";
export declare type Orientation = 'horizontal' | 'vertical';
export declare namespace knownTemplates {
    const itemTemplate = "itemTemplate";
}
export declare namespace knownMultiTemplates {
    const itemTemplates = "itemTemplates";
}
export declare namespace knownCollections {
    const items = "items";
}
export declare const wearOsListViewTraceCategory = "ns-wear-os-listview";
export declare function WearOsListViewLog(message: string): void;
export declare function WearOsListViewError(message: string): void;
export interface ItemEventData {
    eventName: string;
    object: any;
    index: number;
    view: View;
    android: any;
    ios: any;
}
export interface ItemsSource {
    length: number;
    getItem(index: number): any;
}
export declare abstract class WearOsListViewBase extends View {
    abstract refresh(): void;
    static knownFunctions: string[];
    hideScrollBar: boolean;
    max: PercentLength;
    min: PercentLength;
    _itemWidth: any;
    _itemHeight: any;
    itemWidth: PercentLength;
    itemHeight: PercentLength;
    layoutType: LayoutType;
    spanCount: number;
    items: any[] | ItemsSource;
    itemTemplate: string | Template;
    static itemLoadingEvent: string;
    static itemTapEvent: string;
    static loadMoreItemsEvent: string;
    static scrollEvent: string;
    pullToRefresh: boolean;
    _defaultTemplate: KeyedTemplate;
    _itemTemplatesInternal: KeyedTemplate[];
    itemTemplates: string | Array<KeyedTemplate>;
    _innerWidth: number;
    _innerHeight: number;
    _effectiveItemHeight: number;
    _effectiveItemWidth: number;
    orientation: Orientation;
    private _itemTemplateSelectorBindable;
    itemReorder: boolean;
    selectionBehavior: 'None' | 'Press' | 'LongPress';
    multipleSelection: boolean;
    constructor();
    get itemIdGenerator(): (item: any, index: number, items: any) => number;
    set itemIdGenerator(generatorFn: (item: any, index: number, items: any) => number);
    get itemTemplateSelector(): string | ((item: any, index: number, items: any) => string);
    set itemTemplateSelector(value: string | ((item: any, index: number, items: any) => string));
    onLayout(left: number, top: number, right: number, bottom: number): void;
    _getItemTemplate(index: number): KeyedTemplate;
    _prepareItem(item: View, index: number): void;
    _getDefaultItemContent(index: number): View;
    _updateNativeItems(args: ChangedData<any>): void;
    private _getDataItem;
    private _itemIdGenerator;
    private _itemTemplateSelector;
}
export declare type LayoutType = 'grid' | 'linear' | 'staggered';
export declare enum LayoutTypeOptions {
    GRID = "grid",
    LINEAR = "linear",
    STAGGERED = "staggered"
}
export declare const itemsProperty: Property<WearOsListViewBase, any[] | ItemsSource>;
export declare const itemTemplateProperty: Property<WearOsListViewBase, string | Template>;
export declare const itemTemplatesProperty: Property<WearOsListViewBase, string | KeyedTemplate[]>;
export declare const layoutTypeProperty: Property<WearOsListViewBase, LayoutType>;
export declare const spanCountProperty: Property<WearOsListViewBase, number>;
export declare const itemWidthProperty: CoercibleProperty<WearOsListViewBase, PercentLength>;
export declare const itemHeightProperty: CoercibleProperty<WearOsListViewBase, PercentLength>;
export declare const orientationProperty: Property<WearOsListViewBase, Orientation>;
export declare const maxProperty: Property<WearOsListViewBase, PercentLength>;
export declare const minProperty: Property<WearOsListViewBase, PercentLength>;
export declare const hideScrollBarProperty: Property<WearOsListViewBase, boolean>;
export declare const circularScrollingEnabled: Property<WearOsListViewBase, boolean>;
export declare const useScalingScroll: Property<WearOsListViewBase, boolean>;

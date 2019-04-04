declare const _default: {
    props: {
        items: {
            type: (ArrayConstructor | ObjectConstructor)[];
            required: boolean;
        };
        '+alias': {
            type: StringConstructor;
            default: string;
        };
        '+index': {
            type: StringConstructor;
        };
        itemTemplateSelector: {
            type: FunctionConstructor;
            default: any;
        };
    };
    template: string;
    watch: {
        items: {
            handler(newVal: any): void;
            deep: boolean;
        };
    };
    created(): void;
    mounted(): void;
    methods: {
        onItemTap(args: any): void;
        onItemLoading(args: any): void;
        refresh(): void;
        scrollToIndex(index: any, animate?: boolean, snapMode?: number): void;
        getSelectedItems(): any;
    };
};
export default _default;

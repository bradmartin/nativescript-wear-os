import { WearOsListView } from '../';
const VUE_VIEW = '__vueVNodeRef__';

function extend(to, _from): any {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}


export default {
    props: {
        items: {
            type: [Array, Object],
            required: true
        },
        '+alias': {
            type: String,
            default: 'item'
        },
        '+index': {
            type: String
        },
        itemTemplateSelector: {
            type: Function,
            default: undefined
        }
    },
    template: `<NativeWearOsListView ref="listView" :items="items" v-bind="$attrs" v-on="listeners" @itemTap="onItemTap" @itemLoading="onItemLoading"
  >
  <slot /></NativeWearOsListView>`,
    // computed: {
    //   scrollDirection: function() {
    //     return this.orientation !== "vertical" ? "Horizontal" : "Vertical";
    //   }
    // },
    watch: {
        items: {
            handler(newVal) {
                // console.log("items changed", newVal);
                this.$refs.listView.setAttribute('items', newVal);
                this.refresh();
            },
            deep: true
        }
    },
    created() {
        // we need to remove the itemTap handler from a clone of the $listeners
        // object because we are emitting the event ourselves with added data.
        const listeners = extend({}, this.$listeners);
        delete listeners.itemTap;
        this.listeners = listeners;

        this.getItemContext = getItemContext.bind(this);
    },
    mounted() {
        if (!this.$templates) {
            return;
        }

        this.$refs.listView.setAttribute(
            '_itemTemplatesInternal',
            this.$templates.getKeyedTemplates()
        );
        this.$refs.listView.setAttribute('_itemTemplateSelector', (item, index) => {
            return this.$templates.selectorFn(this.getItemContext(item, index));
        });
    },
    methods: {
        onItemTap(args) {
            this.$emit('itemTap', Object.assign({ item: this.items[args.index] }, args));
        },
        onItemLoading(args) {
            if (!this.$templates) {
                return;
            }

            const index = args.index;
            const items = args.object.items;

            const currentItem =
                typeof items.getItem === 'function'
                    ? items.getItem(index)
                    : items[index];
            console.log('onItemLoading', index, !!currentItem);

            const name = args.object._itemTemplateSelector(currentItem, index, items);
            const context = this.getItemContext(currentItem, index);
            const oldVnode = args.view && args.view[VUE_VIEW];
            console.log(
              'onItemLoading1',
              name,
              args.view
            );

            args.view = this.$templates.patchTemplate(name, context, oldVnode);
            console.log('onItemLoading2', name, args.view);
        },
        refresh() {
            this.$refs.listView.nativeView.refresh();
        },
        scrollToIndex(index, animate = false, snapMode = 0) {
            this.listView.nativeView.scrollToIndex(index, animate, snapMode);
        },
        getSelectedItems() {
            return this.listView.nativeView.getSelectedItems();
        }
    }
};
function getItemContext(
  item,
  index,
  alias = this.$props['+alias'],
  index_alias = this.$props['+index']
) {
  return {
    [alias]: item,
    [index_alias || '$index']: index,
    $even: index % 2 === 0,
    $odd: index % 2 !== 0
  };
}
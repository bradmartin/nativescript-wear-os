import { WearOsListView } from '../';

const WearOsListViewPlugin = {
  install(Vue, options) {
    Vue.registerElement(
      'WearOsListView',
      function() {
        return WearOsListView;
      },
      {
        component: require('./component').default
      }
    );
  }
};

export default WearOsListViewPlugin;

export * from './packages/box-inset-layout';
export * from './packages/circular-progress-layout';
export * from './packages/listview';
export * from './packages/swipe-dismiss-layout';
export * from './packages/wear-os-layout';
export * from './utils';

declare const global: any;

export const AndroidX_WidgetNamespace: any = useAndroidX()
  ? androidx.wear.widget
  : android.support.wear.widget;

export const RecyclerView_Namespace: any = useAndroidX()
  ? androidx.recyclerview.widget
  : android.support.v7.widget;

function useAndroidX() {
  return global.androidx && androidx.wear;
}

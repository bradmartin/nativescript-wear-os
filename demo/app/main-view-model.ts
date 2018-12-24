import { ItemEventData } from 'nativescript-wear-os/packages/listview';
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { topmost } from 'tns-core-modules/ui/frame';

export class HelloWorldModel extends Observable {
  public items = new ObservableArray([
    <any>{
      title: 'NativeScript',
      image: 'res://icon'
    },
    {
      title: 'Angular',
      image: '~/images/angular.png'
    },
    {
      title: 'TypeScript',
      image: '~/images/typescript.png'
    },
    {
      title: 'Brad Wayne',
      image: '~/images/bradmartin.jpeg'
    },
    {
      title: 'VS Code',
      image: '~/images/vscode.png'
    },
    {
      title: 'Emfinger',
      image: '~/images/emfinger.png'
    },
    {
      title: 'Permobil',
      image: '~/images/permobil.png'
    }
  ]);

  constructor() {
    super();
    this.set('items', this.items);
  }

  onItemTap(args: ItemEventData) {
    const x = this.items.getItem(args.index);
    console.log('tapped item', x);
    if (args.index === 0) {
      topmost().currentPage.frame.navigate(
        './wear-os-layout-page/wear-os-layout-page'
      );
    } else if (args.index === 1) {
      topmost().currentPage.frame.navigate('./box-inset-page/box-inset-page');
    }
  }
}

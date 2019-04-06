import { ItemEventData } from 'nativescript-wear-os/packages/listview';
import {
  showFailure,
  showSuccess,
  confirm
} from 'nativescript-wear-os/packages/dialogs';
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Frame, topmost } from 'tns-core-modules/ui/frame';

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
      image: '~/images/bradmartin.jpg'
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
    const frame = topmost().currentPage.frame as Frame;

    console.log('tapped item', x);

    if (args.index === 0) {
      showSuccess('Great choice! NativeScript is awesome.', 4);
      // frame.navigate('./wear-os-layout-page/wear-os-layout-page');
    } else if (args.index === 1) {
      showFailure('Wow... you like Angular. Everyone has their choice.');
      // frame.navigate('./box-inset-page/box-inset-page');
    } else if (args.index === 2) {
      confirm('Do you like this?').then(result => {
        if (result === true) {
          console.log('yay');
        } else {
          console.log('boo');
        }
      });
      // frame.navigate('./circular-progress-page/circular-progress-page');
    }
  }
}

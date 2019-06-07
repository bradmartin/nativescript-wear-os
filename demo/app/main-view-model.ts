import * as themes from 'nativescript-themes';
import { SwipeDismissLayout } from 'nativescript-wear-os';
import {
  confirm,
  showFailure,
  showSuccess
} from 'nativescript-wear-os/packages/dialogs';
import { ItemEventData } from 'nativescript-wear-os/packages/listview';
import * as application from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Frame, Page, topmost } from 'tns-core-modules/ui/frame';
import { Prop } from './prop';
import { hideOffScreenLayout, showOffScreenLayout } from './utils';

export class HelloWorldModel extends Observable {
  @Prop()
  public isSwipeLayoutVisible = false;

  @Prop()
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
  private _swipeLayout: SwipeDismissLayout;

  constructor(page: Page) {
    super();

    const x = page.getViewById('swipePage');
    this._swipeLayout = x as SwipeDismissLayout;
    console.log(this._swipeLayout.android);
    this._swipeLayout.on(SwipeDismissLayout.dimissedEvent, args => {
      console.log('dimissedEvent', args.object);
      // hide the offscreen layout when dismissed
      hideOffScreenLayout(this._swipeLayout, { x: 500, y: 0 });
      this.isSwipeLayoutVisible = false;
    });

    application.on('exitAmbient', args => {
      console.log('app has EXITED ambient mode...');
      themes.applyTheme('default.css');
    });

    application.on('enterAmbient', args => {
      console.log('app has ENTERED ambient mode...');
      themes.applyTheme('ambient.css');
    });
  }

  labelLoaded(args) {
    console.log('label loaded BITCH');
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
      confirm({
        message: 'Do you like WearOS?',
        title: 'Pick Something',
        autoCloseTime: 3
      }).then(result => {
        if (result === true) {
          console.log('yay');
          frame.navigate('./box-inset-page/box-inset-page');
        } else {
          console.log('boo');
        }
      });
    } else if (args.index === 3) {
      showOffScreenLayout(this._swipeLayout);
      this.isSwipeLayoutVisible = true;
    }
  }

  toggleSwipeBehavior() {
    const x = (this._swipeLayout as any).swipeable;
    console.log('is the swipe layout swipeable?', x);
    // if (x) {
    //   this._swipeLayout.swipeable = false;
    // } else {
    //   this._swipeLayout.swipeable = true;
    // }
  }
}

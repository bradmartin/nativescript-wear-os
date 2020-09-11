import {
  Application,
  Frame,
  Observable,
  ObservableArray,
  Page
} from '@nativescript/core';
import * as themes from 'nativescript-themes';
import {
  confirm,
  ItemEventData,
  showFailure,
  showSuccess,
  SwipeDismissLayout
} from 'nativescript-wear-os';
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
    const x = page.getViewById('swipePage') as unknown;
    this._swipeLayout = <SwipeDismissLayout>x;
    console.log(this._swipeLayout.android);
    this._swipeLayout.on(SwipeDismissLayout.dimissedEvent, args => {
      console.log('dimissedEvent', args.object);
      // hide the offscreen layout when dismissed
      hideOffScreenLayout(this._swipeLayout, { x: 500, y: 0 });
      this.isSwipeLayoutVisible = false;
    });

    Application.on('exitAmbient', args => {
      console.log('app has EXITED ambient mode...');
      themes.applyTheme('default.css');
    });

    Application.on('enterAmbient', args => {
      console.log('app has ENTERED ambient mode...');
      themes.applyTheme('ambient.css');
    });
  }

  onItemTap(args: ItemEventData) {
    const x = this.items.getItem(args.index);
    const frame = Frame.topmost().currentPage.frame as Frame;

    console.log('tapped item', x);

    if (args.index === 0) {
      showSuccess('Great choice! NativeScript is awesome.', 4)
        .then(() => {
          console.log('success dialog has completed.');
        })
        .catch(err => {
          console.log('success dialog error', err);
        });

      // frame.navigate('./wear-os-layout-page/wear-os-layout-page');
    } else if (args.index === 1) {
      showFailure('Wow... you like Angular. Everyone has their choice.')
        .then(() => {
          console.log('failure dialog has completed.');
        })
        .catch(err => {
          console.log('failure dialog error', err);
        });
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
}

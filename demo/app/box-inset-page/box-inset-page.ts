import { Frame } from 'tns-core-modules/ui/frame';

export function pageLoaded() {
  console.log('page loaded');
}

export function navBack(args) {
  const btn = args.object;
  const frame = btn.page.frame as Frame;
  frame.goBack();
}

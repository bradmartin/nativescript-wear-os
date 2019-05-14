import { Frame } from 'tns-core-modules/ui/frame';

export function navBack(args) {
  const btn = args.object;
  const frame = btn.page.frame as Frame;
  frame.goBack();
}

export function layoutLoaded(args) {
  console.log('layoutLoaded', args.object);
  console.log('layout android', args.object.android);
  args.object.scrollEnabled = false;
}

import { Frame } from '@nativescript/core';
export function pageLoaded() {
  console.log('page loaded');
}

export function navBack(args) {
  const btn = args.object;
  const frame = btn.page.frame as Frame;
  frame.goBack();
}

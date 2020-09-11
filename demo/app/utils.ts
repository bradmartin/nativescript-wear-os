import { View } from '@nativescript/core';
import { SwipeDismissLayout } from 'nativescript-wear-os';

export function hideOffScreenLayout(
  view: View | SwipeDismissLayout,
  position: { x: number; y: number }
) {
  if (view) {
    view.visibility = 'collapse';
    view.animate({
      target: view as any,
      duration: 300,
      translate: {
        x: position.x,
        y: position.y,
      },
    });
  }
}

export function showOffScreenLayout(view: View | SwipeDismissLayout) {
  if (view) {
    view.visibility = 'visible';
    view.animate({
      target: view as any,
      duration: 400,
      translate: {
        x: 0,
        y: 0,
      },
    });
  }
}

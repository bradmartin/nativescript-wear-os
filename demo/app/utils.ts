import { View } from 'tns-core-modules/ui/core/view/view';

export function hideOffScreenLayout(
  view: View,
  position: { x: number; y: number }
) {
  if (view) {
    view.visibility = 'collapse';
    view.animate({
      target: view,
      duration: 300,
      translate: {
        x: position.x,
        y: position.y
      }
    });
  }
}

export function showOffScreenLayout(view: View) {
  if (view) {
    view.visibility = 'visible';
    view.animate({
      target: view,
      duration: 400,
      translate: {
        x: 0,
        y: 0
      }
    });
  }
}

/// <reference path="android-declarations.d.ts" />
/// <reference path="./android-support-28.d.ts" />

declare module android {
  export namespace support {
    export namespace wear {
      export namespace ambient {
        export class AmbientDelegate {
          public static class: java.lang.Class<
            android.support.wear.ambient.AmbientDelegate
          >;
        }
        export namespace AmbientDelegate {
          export class AmbientCallback {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientDelegate.AmbientCallback
            >;
            /**
             * Constructs a new instance of the android.support.wear.ambient.AmbientDelegate$AmbientCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onEnterAmbient(param0: android.os.Bundle): void;
              onUpdateAmbient(): void;
              onExitAmbient(): void;
            });
            public constructor();
            public onExitAmbient(): void;
            public onEnterAmbient(param0: android.os.Bundle): void;
            public onUpdateAmbient(): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace ambient {
        export class AmbientMode {
          public static class: java.lang.Class<
            android.support.wear.ambient.AmbientMode
          >;
          public static EXTRA_BURN_IN_PROTECTION: string;
          public static EXTRA_LOWBIT_AMBIENT: string;
          public static FRAGMENT_TAG: string;
          public static attachAmbientSupport(
            param0: android.app.Activity
          ): android.support.wear.ambient.AmbientMode.AmbientController;
          public constructor();
          public onCreate(param0: android.os.Bundle): void;
          public onAttach(param0: android.content.Context): void;
          public onPause(): void;
          public onDetach(): void;
          public onStop(): void;
          public onDestroy(): void;
          public onResume(): void;
          public dump(
            param0: string,
            param1: java.io.FileDescriptor,
            param2: java.io.PrintWriter,
            param3: native.Array<string>
          ): void;
        }
        export namespace AmbientMode {
          export abstract class AmbientCallback {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientMode.AmbientCallback
            >;
            public onExitAmbient(): void;
            public constructor();
            public onEnterAmbient(param0: android.os.Bundle): void;
            public onUpdateAmbient(): void;
          }
          export class AmbientCallbackProvider {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientMode.AmbientCallbackProvider
            >;
            /**
             * Constructs a new instance of the android.support.wear.ambient.AmbientMode$AmbientCallbackProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getAmbientCallback(): android.support.wear.ambient.AmbientMode.AmbientCallback;
            });
            public constructor();
            public getAmbientCallback(): android.support.wear.ambient.AmbientMode.AmbientCallback;
          }
          export class AmbientController {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientMode.AmbientController
            >;
            public isAmbient(): boolean;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace ambient {
        export class AmbientModeSupport {
          public static class: java.lang.Class<
            android.support.wear.ambient.AmbientModeSupport
          >;
          public static EXTRA_BURN_IN_PROTECTION: string;
          public static EXTRA_LOWBIT_AMBIENT: string;
          public static FRAGMENT_TAG: string;
          public static attach(
            param0: android.support.v4.app.FragmentActivity
          ): android.support.wear.ambient.AmbientModeSupport.AmbientController;
          public constructor();
          public onCreate(param0: android.os.Bundle): void;
          public onAttach(param0: android.content.Context): void;
          public onPause(): void;
          public onDetach(): void;
          public onStop(): void;
          public onDestroy(): void;
          public onResume(): void;
          public dump(
            param0: string,
            param1: java.io.FileDescriptor,
            param2: java.io.PrintWriter,
            param3: native.Array<string>
          ): void;
        }
        export namespace AmbientModeSupport {
          export abstract class AmbientCallback {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientModeSupport.AmbientCallback
            >;
            public onExitAmbient(): void;
            public constructor();
            public onEnterAmbient(param0: android.os.Bundle): void;
            public onUpdateAmbient(): void;
          }
          export class AmbientCallbackProvider {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientModeSupport.AmbientCallbackProvider
            >;
            /**
             * Constructs a new instance of the android.support.wear.ambient.AmbientModeSupport$AmbientCallbackProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getAmbientCallback(): android.support.wear.ambient.AmbientModeSupport.AmbientCallback;
            });
            public constructor();
            public getAmbientCallback(): android.support.wear.ambient.AmbientModeSupport.AmbientCallback;
          }
          export class AmbientController {
            public static class: java.lang.Class<
              android.support.wear.ambient.AmbientModeSupport.AmbientController
            >;
            public isAmbient(): boolean;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace ambient {
        export class SharedLibraryVersion {
          public static class: java.lang.Class<
            android.support.wear.ambient.SharedLibraryVersion
          >;
          public static version(): number;
          public static verifySharedLibraryPresent(): void;
        }
        export namespace SharedLibraryVersion {
          export class PresenceHolder {
            public static class: java.lang.Class<
              android.support.wear.ambient.SharedLibraryVersion.PresenceHolder
            >;
          }
          export class VersionHolder {
            public static class: java.lang.Class<
              android.support.wear.ambient.SharedLibraryVersion.VersionHolder
            >;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace ambient {
        export class WearableControllerProvider {
          public static class: java.lang.Class<
            android.support.wear.ambient.WearableControllerProvider
          >;
          public constructor();
          public getWearableController(
            param0: android.app.Activity,
            param1: android.support.wear.ambient.AmbientDelegate.AmbientCallback
          ): com.google.android.wearable.compat.WearableActivityController;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace internal {
        export namespace widget {
          export class ResourcesUtil {
            public static class: java.lang.Class<
              android.support.wear.internal.widget.ResourcesUtil
            >;
            public static getScreenHeightPx(
              param0: android.content.Context
            ): number;
            public static getFractionOfScreenPx(
              param0: android.content.Context,
              param1: number,
              param2: number
            ): number;
            public static getScreenWidthPx(
              param0: android.content.Context
            ): number;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace internal {
        export namespace widget {
          export namespace drawer {
            export class MultiPagePresenter extends android.support.wear
              .internal.widget.drawer.WearableNavigationDrawerPresenter {
              public static class: java.lang.Class<
                android.support.wear.internal.widget.drawer.MultiPagePresenter
              >;
              public constructor();
              public constructor(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView,
                param1: android.support.wear.internal.widget.drawer.MultiPagePresenter.Ui,
                param2: boolean
              );
              public onDrawerTapped(): boolean;
              public onNewAdapter(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
              ): void;
              public onSelected(param0: number): void;
              public onDataSetChanged(): void;
              public onSetCurrentItemRequested(
                param0: number,
                param1: boolean
              ): void;
            }
            export namespace MultiPagePresenter {
              export class Ui {
                public static class: java.lang.Class<
                  android.support.wear.internal.widget.drawer.MultiPagePresenter.Ui
                >;
                /**
                 * Constructs a new instance of the android.support.wear.internal.widget.drawer.MultiPagePresenter$Ui interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  initialize(
                    param0: android.support.wear.widget.drawer.WearableNavigationDrawerView,
                    param1: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
                  ): void;
                  notifyNavigationPagerAdapterDataChanged(): void;
                  notifyPageIndicatorDataChanged(): void;
                  setNavigationPagerAdapter(
                    param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
                  ): void;
                  setNavigationPagerSelectedItem(
                    param0: number,
                    param1: boolean
                  ): void;
                });
                public constructor();
                public notifyPageIndicatorDataChanged(): void;
                public setNavigationPagerSelectedItem(
                  param0: number,
                  param1: boolean
                ): void;
                public initialize(
                  param0: android.support.wear.widget.drawer.WearableNavigationDrawerView,
                  param1: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
                ): void;
                public notifyNavigationPagerAdapterDataChanged(): void;
                public setNavigationPagerAdapter(
                  param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace internal {
        export namespace widget {
          export namespace drawer {
            export class MultiPageUi extends android.support.wear.internal
              .widget.drawer.MultiPagePresenter.Ui {
              public static class: java.lang.Class<
                android.support.wear.internal.widget.drawer.MultiPageUi
              >;
              public constructor();
              public setNavigationPagerSelectedItem(
                param0: number,
                param1: boolean
              ): void;
              public initialize(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView,
                param1: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
              ): void;
              public notifyPageIndicatorDataChanged(): void;
              public setNavigationPagerAdapter(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
              ): void;
              public notifyNavigationPagerAdapterDataChanged(): void;
            }
            export namespace MultiPageUi {
              export class NavigationPagerAdapter {
                public static class: java.lang.Class<
                  android.support.wear.internal.widget.drawer.MultiPageUi.NavigationPagerAdapter
                >;
                public instantiateItem(
                  param0: android.view.ViewGroup,
                  param1: number
                ): any;
                public destroyItem(
                  param0: android.view.ViewGroup,
                  param1: number,
                  param2: any
                ): void;
                public getItemPosition(param0: any): number;
                public getCount(): number;
                public isViewFromObject(
                  param0: android.view.View,
                  param1: any
                ): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace internal {
        export namespace widget {
          export namespace drawer {
            export class SinglePagePresenter extends android.support.wear
              .internal.widget.drawer.WearableNavigationDrawerPresenter {
              public static class: java.lang.Class<
                android.support.wear.internal.widget.drawer.SinglePagePresenter
              >;
              public constructor();
              public constructor(
                param0: android.support.wear.internal.widget.drawer.SinglePagePresenter.Ui,
                param1: boolean
              );
              public onDrawerTapped(): boolean;
              public onNewAdapter(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
              ): void;
              public onSelected(param0: number): void;
              public onDataSetChanged(): void;
              public onSetCurrentItemRequested(
                param0: number,
                param1: boolean
              ): void;
            }
            export namespace SinglePagePresenter {
              export class Ui {
                public static class: java.lang.Class<
                  android.support.wear.internal.widget.drawer.SinglePagePresenter.Ui
                >;
                /**
                 * Constructs a new instance of the android.support.wear.internal.widget.drawer.SinglePagePresenter$Ui interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  setPresenter(
                    param0: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
                  ): void;
                  initialize(param0: number): void;
                  setIcon(
                    param0: number,
                    param1: android.graphics.drawable.Drawable,
                    param2: string
                  ): void;
                  setText(param0: string, param1: boolean): void;
                  selectItem(param0: number): void;
                  deselectItem(param0: number): void;
                  closeDrawerDelayed(param0: number): void;
                  peekDrawer(): void;
                });
                public constructor();
                public closeDrawerDelayed(param0: number): void;
                public setIcon(
                  param0: number,
                  param1: android.graphics.drawable.Drawable,
                  param2: string
                ): void;
                public setText(param0: string, param1: boolean): void;
                public selectItem(param0: number): void;
                public deselectItem(param0: number): void;
                public setPresenter(
                  param0: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
                ): void;
                public peekDrawer(): void;
                public initialize(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace internal {
        export namespace widget {
          export namespace drawer {
            export class SinglePageUi extends android.support.wear.internal
              .widget.drawer.SinglePagePresenter.Ui {
              public static class: java.lang.Class<
                android.support.wear.internal.widget.drawer.SinglePageUi
              >;
              public initialize(param0: number): void;
              public closeDrawerDelayed(param0: number): void;
              public selectItem(param0: number): void;
              public setIcon(
                param0: number,
                param1: android.graphics.drawable.Drawable,
                param2: string
              ): void;
              public peekDrawer(): void;
              public constructor(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView
              );
              public setPresenter(
                param0: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
              ): void;
              public setText(param0: string, param1: boolean): void;
              public deselectItem(param0: number): void;
            }
            export namespace SinglePageUi {
              export class OnSelectedClickHandler {
                public static class: java.lang.Class<
                  android.support.wear.internal.widget.drawer.SinglePageUi.OnSelectedClickHandler
                >;
                public onClick(param0: android.view.View): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace internal {
        export namespace widget {
          export namespace drawer {
            export abstract class WearableNavigationDrawerPresenter {
              public static class: java.lang.Class<
                android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
              >;
              public constructor();
              public onDrawerTapped(): boolean;
              public onNewAdapter(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
              ): void;
              public onSelected(param0: number): void;
              public onDataSetChanged(): void;
              public onSetCurrentItemRequested(
                param0: number,
                param1: boolean
              ): void;
              public onItemSelectedListenerRemoved(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener
              ): void;
              public onItemSelectedListenerAdded(
                param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace utils {
        export class MetadataConstants {
          public static class: java.lang.Class<
            android.support.wear.utils.MetadataConstants
          >;
          public static STANDALONE_METADATA_NAME: string;
          public static NOTIFICATION_BRIDGE_MODE_METADATA_NAME: string;
          public static NOTIFICATION_BRIDGE_MODE_BRIDGING: string;
          public static NOTIFICATION_BRIDGE_MODE_NO_BRIDGING: string;
          public static WATCH_FACE_PREVIEW_METADATA_NAME: string;
          public static WATCH_FACE_PREVIEW_CIRCULAR_METADATA_NAME: string;
          public static isStandalone(param0: android.content.Context): boolean;
          public static getPreviewDrawableResourceId(
            param0: android.content.Context,
            param1: boolean
          ): number;
          public static isNotificationBridgingEnabled(
            param0: android.content.Context
          ): boolean;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class BezierSCurveInterpolator {
          public static class: java.lang.Class<
            android.support.wear.widget.BezierSCurveInterpolator
          >;
          public static INSTANCE: android.support.wear.widget.BezierSCurveInterpolator;
          public getInterpolation(param0: number): number;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class BoxInsetLayout extends android.view.ViewGroup {
          public static class: java.lang.Class<
            android.support.wear.widget.BoxInsetLayout
          >;
          public onMeasure(param0: number, param1: number): void;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number
          );
          public generateLayoutParams(
            param0: android.util.AttributeSet
          ): android.support.wear.widget.BoxInsetLayout.LayoutParams;
          public constructor(param0: android.content.Context);
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet
          );
          public checkLayoutParams(
            param0: android.view.ViewGroup.LayoutParams
          ): boolean;
          public generateLayoutParams(
            param0: android.view.ViewGroup.LayoutParams
          ): android.view.ViewGroup.LayoutParams;
          public onLayout(
            param0: boolean,
            param1: number,
            param2: number,
            param3: number,
            param4: number
          ): void;
          public setForeground(
            param0: android.graphics.drawable.Drawable
          ): void;
          public onAttachedToWindow(): void;
        }
        export namespace BoxInsetLayout {
          export class LayoutParams {
            public static class: java.lang.Class<
              android.support.wear.widget.BoxInsetLayout.LayoutParams
            >;
            public static BOX_NONE: number;
            public static BOX_LEFT: number;
            public static BOX_TOP: number;
            public static BOX_RIGHT: number;
            public static BOX_BOTTOM: number;
            public static BOX_ALL: number;
            public boxedEdges: number;
            public constructor(
              param0: android.view.ViewGroup.MarginLayoutParams
            );
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet
            );
            public constructor(param0: android.view.ViewGroup.LayoutParams);
            public constructor(param0: number, param1: number, param2: number);
            public constructor(param0: number, param1: number);
            public constructor(
              param0: android.support.wear.widget.BoxInsetLayout.LayoutParams
            );
            public constructor(
              param0: number,
              param1: number,
              param2: number,
              param3: number
            );
            public constructor(param0: android.widget.FrameLayout.LayoutParams);
          }
          export namespace LayoutParams {
            export class BoxedEdges {
              public static class: java.lang.Class<
                android.support.wear.widget.BoxInsetLayout.LayoutParams.BoxedEdges
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.BoxInsetLayout$LayoutParams$BoxedEdges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class CircledImageView {
          public static class: java.lang.Class<
            android.support.wear.widget.CircledImageView
          >;
          public setImageTint(param0: number): void;
          public onDraw(param0: android.graphics.Canvas): void;
          public getCircleRadius(): number;
          public getImageDrawable(): android.graphics.drawable.Drawable;
          public setCircleRadius(param0: number): void;
          public setImageHorizontalOffcenterPercentage(param0: number): void;
          public getCircleRadiusPressed(): number;
          public onVisibilityChanged(
            param0: android.view.View,
            param1: number
          ): void;
          public getDefaultCircleColor(): number;
          public setCircleColorStateList(
            param0: android.content.res.ColorStateList
          ): void;
          public setCircleColor(param0: number): void;
          public setShadowVisibility(param0: number): void;
          public onSetAlpha(param0: number): boolean;
          public setCircleRadiusPercent(param0: number): void;
          public getCircleColorStateList(): android.content.res.ColorStateList;
          public setImageResource(param0: number): void;
          public setPadding(
            param0: number,
            param1: number,
            param2: number,
            param3: number
          ): void;
          public getColorChangeAnimationDuration(): number;
          public showIndeterminateProgress(param0: boolean): void;
          public getCircleRadiusPressedPercent(): number;
          public onMeasure(param0: number, param1: number): void;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number
          );
          public setColorChangeAnimationDuration(param0: number): void;
          public getCircleRadiusPercent(): number;
          public setCircleRadiusPressedPercent(param0: number): void;
          public setImageCirclePercentage(param0: number): void;
          public getInitialCircleRadius(): number;
          public onSizeChanged(
            param0: number,
            param1: number,
            param2: number,
            param3: number
          ): void;
          public setProgress(param0: number): void;
          public setCircleHidden(param0: boolean): void;
          public setCircleBorderCap(param0: android.graphics.Paint.Cap): void;
          public constructor(param0: android.content.Context);
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet
          );
          public setPressed(param0: boolean): void;
          public setCircleRadiusPressed(param0: number): void;
          public onWindowVisibilityChanged(param0: number): void;
          public onLayout(
            param0: boolean,
            param1: number,
            param2: number,
            param3: number,
            param4: number
          ): void;
          public setCircleBorderWidth(param0: number): void;
          public drawableStateChanged(): void;
          public setImageDrawable(
            param0: android.graphics.drawable.Drawable
          ): void;
          public setCircleBorderColor(param0: number): void;
        }
        export namespace CircledImageView {
          export class OvalShadowPainter {
            public static class: java.lang.Class<
              android.support.wear.widget.CircledImageView.OvalShadowPainter
            >;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class CircularProgressLayout {
          public static class: java.lang.Class<
            android.support.wear.widget.CircularProgressLayout
          >;
          public onDetachedFromWindow(): void;
          public setTotalTime(param0: number): void;
          public getStrokeWidth(): number;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number
          );
          public getOnTimerFinishedListener(): android.support.wear.widget.CircularProgressLayout.OnTimerFinishedListener;
          public getStartingRotation(): number;
          public stopTimer(): void;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number,
            param3: number
          );
          public setBackgroundColor(param0: number): void;
          public getColorSchemeColors(): native.Array<number>;
          public isTimerRunning(): boolean;
          public setStartingRotation(param0: number): void;
          public setIndeterminate(param0: boolean): void;
          public startTimer(): void;
          public constructor(param0: android.content.Context);
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet
          );
          public setColorSchemeColors(param0: native.Array<number>): void;
          public setOnTimerFinishedListener(
            param0: android.support.wear.widget.CircularProgressLayout.OnTimerFinishedListener
          ): void;
          public onLayout(
            param0: boolean,
            param1: number,
            param2: number,
            param3: number,
            param4: number
          ): void;
          public getBackgroundColor(): number;
          public getProgressDrawable(): android.support.v4.widget.CircularProgressDrawable;
          public getTotalTime(): number;
          public isIndeterminate(): boolean;
          public setStrokeWidth(param0: number): void;
        }
        export namespace CircularProgressLayout {
          export class OnTimerFinishedListener {
            public static class: java.lang.Class<
              android.support.wear.widget.CircularProgressLayout.OnTimerFinishedListener
            >;
            /**
             * Constructs a new instance of the android.support.wear.widget.CircularProgressLayout$OnTimerFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onTimerFinished(
                param0: android.support.wear.widget.CircularProgressLayout
              ): void;
            });
            public constructor();
            public onTimerFinished(
              param0: android.support.wear.widget.CircularProgressLayout
            ): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class CircularProgressLayoutController {
          public static class: java.lang.Class<
            android.support.wear.widget.CircularProgressLayoutController
          >;
          public getOnTimerFinishedListener(): android.support.wear.widget.CircularProgressLayout.OnTimerFinishedListener;
          public setOnTimerFinishedListener(
            param0: android.support.wear.widget.CircularProgressLayout.OnTimerFinishedListener
          ): void;
        }
        export namespace CircularProgressLayoutController {
          export class CircularProgressTimer {
            public static class: java.lang.Class<
              android.support.wear.widget.CircularProgressLayoutController.CircularProgressTimer
            >;
            public onFinish(): void;
            public onTick(param0: number): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class CurvingLayoutCallback extends android.support.wear.widget
          .WearableLinearLayoutManager.LayoutCallback {
          public static class: java.lang.Class<
            android.support.wear.widget.CurvingLayoutCallback
          >;
          public constructor(param0: android.content.Context);
          public constructor();
          public onLayoutFinished(
            param0: android.view.View,
            param1: android.support.v7.widget.RecyclerView
          ): void;
          public adjustAnchorOffsetXY(
            param0: android.view.View,
            param1: native.Array<number>
          ): void;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class ProgressDrawable {
          public static class: java.lang.Class<
            android.support.wear.widget.ProgressDrawable
          >;
          public stopAnimation(): void;
          public setRingColor(param0: number): void;
          public startAnimation(): void;
          public onLevelChange(param0: number): boolean;
          public setAlpha(param0: number): void;
          public setColorFilter(param0: android.graphics.ColorFilter): void;
          public setRingWidth(param0: number): void;
          public draw(param0: android.graphics.Canvas): void;
          public getOpacity(): number;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class RoundedDrawable {
          public static class: java.lang.Class<
            android.support.wear.widget.RoundedDrawable
          >;
          public getAlpha(): number;
          public onBoundsChange(param0: android.graphics.Rect): void;
          public setBackgroundColor(param0: number): void;
          public setAlpha(param0: number): void;
          public setColorFilter(param0: android.graphics.ColorFilter): void;
          public setDrawable(param0: android.graphics.drawable.Drawable): void;
          public getRadius(): number;
          public inflate(
            param0: android.content.res.Resources,
            param1: org.xmlpull.v1.XmlPullParser,
            param2: android.util.AttributeSet,
            param3: android.content.res.Resources.Theme
          ): void;
          public setClipEnabled(param0: boolean): void;
          public isClipEnabled(): boolean;
          public constructor();
          public setRadius(param0: number): void;
          public getBackgroundColor(): number;
          public getDrawable(): android.graphics.drawable.Drawable;
          public draw(param0: android.graphics.Canvas): void;
          public getOpacity(): number;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class ScrollManager {
          public static class: java.lang.Class<
            android.support.wear.widget.ScrollManager
          >;
          public setScrollDegreesPerScreen(param0: number): void;
          public getBezelWidth(): number;
          public getScrollDegreesPerScreen(): number;
          public setBezelWidth(param0: number): void;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class SimpleAnimatorListener {
          public static class: java.lang.Class<
            android.support.wear.widget.SimpleAnimatorListener
          >;
          public onAnimationComplete(param0: android.animation.Animator): void;
          public onAnimationEnd(param0: android.animation.Animator): void;
          public constructor();
          public onAnimationCancel(param0: android.animation.Animator): void;
          public wasCanceled(): boolean;
          public onAnimationStart(param0: android.animation.Animator): void;
          public onAnimationRepeat(param0: android.animation.Animator): void;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class SwipeDismissFrameLayout extends android.view.ViewGroup extends android.support.wear.widget
          .SwipeDismissLayout  {
          public static class: java.lang.Class<
            android.support.wear.widget.SwipeDismissFrameLayout
          >;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number
          );
          public constructor(param0: android.content.Context);
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet
          );
          public addCallback(
            param0: android.support.wear.widget.SwipeDismissFrameLayout.Callback
          ): void;
          public removeCallback(
            param0: android.support.wear.widget.SwipeDismissFrameLayout.Callback
          ): void;
          
          public setSwipeable(param0: boolean): void;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number,
            param3: number
          );
        }
        export namespace SwipeDismissFrameLayout {
          export abstract class Callback {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissFrameLayout.Callback
            >;
            public constructor();
            public onSwipeCanceled(
              param0: android.support.wear.widget.SwipeDismissFrameLayout
            ): void;
            public onSwipeStarted(
              param0: android.support.wear.widget.SwipeDismissFrameLayout
            ): void;
            public onDismissed(
              param0: android.support.wear.widget.SwipeDismissFrameLayout
            ): void;
          }
          export class MyOnDismissedListener extends android.support.wear.widget
            .SwipeDismissLayout.OnDismissedListener {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissFrameLayout.MyOnDismissedListener
            >;
            public onDismissed(
              param0: android.support.wear.widget.SwipeDismissLayout
            ): void;
          }
          export class MyOnPreSwipeListener extends android.support.wear.widget
            .SwipeDismissLayout.OnPreSwipeListener {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissFrameLayout.MyOnPreSwipeListener
            >;
            public onPreSwipe(
              param0: android.support.wear.widget.SwipeDismissLayout,
              param1: number,
              param2: number
            ): boolean;
          }
          export class MyOnSwipeProgressChangedListener extends android.support
            .wear.widget.SwipeDismissLayout.OnSwipeProgressChangedListener {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissFrameLayout.MyOnSwipeProgressChangedListener
            >;
            public onSwipeProgressChanged(
              param0: android.support.wear.widget.SwipeDismissLayout,
              param1: number,
              param2: number
            ): void;
            public onSwipeCanceled(
              param0: android.support.wear.widget.SwipeDismissLayout
            ): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class SwipeDismissLayout {
          public static class: java.lang.Class<
            android.support.wear.widget.SwipeDismissLayout
          >;
          public static DEFAULT_DISMISS_DRAG_WIDTH_RATIO: number;
          public onTouchEvent(param0: android.view.MotionEvent): boolean;
          public getDismissMinDragWidthRatio(): number;
          public setDismissMinDragWidthRatio(param0: number): void;
          public isSwipeable(): boolean;
          public canScrollHorizontally(param0: number): boolean;
          public setSwipeable(param0: boolean): void;
          public canScroll(
            param0: android.view.View,
            param1: boolean,
            param2: number,
            param3: number,
            param4: number
          ): boolean;
          public requestDisallowInterceptTouchEvent(param0: boolean): void;
          public onInterceptTouchEvent(
            param0: android.view.MotionEvent
          ): boolean;
        }
        export namespace SwipeDismissLayout {
          export class OnDismissedListener {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissLayout.OnDismissedListener
            >;
            /**
             * Constructs a new instance of the android.support.wear.widget.SwipeDismissLayout$OnDismissedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onDismissed(
                param0: android.support.wear.widget.SwipeDismissLayout
              ): void;
            });
            public constructor();
            public onDismissed(
              param0: android.support.wear.widget.SwipeDismissLayout
            ): void;
          }
          export class OnPreSwipeListener {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissLayout.OnPreSwipeListener
            >;
            /**
             * Constructs a new instance of the android.support.wear.widget.SwipeDismissLayout$OnPreSwipeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onPreSwipe(
                param0: android.support.wear.widget.SwipeDismissLayout,
                param1: number,
                param2: number
              ): boolean;
            });
            public constructor();
            public onPreSwipe(
              param0: android.support.wear.widget.SwipeDismissLayout,
              param1: number,
              param2: number
            ): boolean;
          }
          export class OnSwipeProgressChangedListener {
            public static class: java.lang.Class<
              android.support.wear.widget.SwipeDismissLayout.OnSwipeProgressChangedListener
            >;
            /**
             * Constructs a new instance of the android.support.wear.widget.SwipeDismissLayout$OnSwipeProgressChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSwipeProgressChanged(
                param0: android.support.wear.widget.SwipeDismissLayout,
                param1: number,
                param2: number
              ): void;
              onSwipeCanceled(
                param0: android.support.wear.widget.SwipeDismissLayout
              ): void;
            });
            public constructor();
            public onSwipeProgressChanged(
              param0: android.support.wear.widget.SwipeDismissLayout,
              param1: number,
              param2: number
            ): void;
            public onSwipeCanceled(
              param0: android.support.wear.widget.SwipeDismissLayout
            ): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class WearableLinearLayoutManager {
          public static class: java.lang.Class<
            android.support.wear.widget.WearableLinearLayoutManager
          >;
          public scrollVerticallyBy(
            param0: number,
            param1: android.support.v7.widget.RecyclerView.Recycler,
            param2: android.support.v7.widget.RecyclerView.State
          ): number;
          public constructor(param0: android.content.Context);
          public setLayoutCallback(
            param0: android.support.wear.widget.WearableLinearLayoutManager.LayoutCallback
          ): void;
          public constructor(
            param0: android.content.Context,
            param1: android.support.wear.widget.WearableLinearLayoutManager.LayoutCallback
          );
          public onLayoutChildren(
            param0: android.support.v7.widget.RecyclerView.Recycler,
            param1: android.support.v7.widget.RecyclerView.State
          ): void;
          public getLayoutCallback(): android.support.wear.widget.WearableLinearLayoutManager.LayoutCallback;
        }
        export namespace WearableLinearLayoutManager {
          export abstract class LayoutCallback {
            public static class: java.lang.Class<
              android.support.wear.widget.WearableLinearLayoutManager.LayoutCallback
            >;
            public constructor();
            public onLayoutFinished(
              param0: android.view.View,
              param1: android.support.v7.widget.RecyclerView
            ): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export class WearableRecyclerView extends android.support.v7.widget
          .RecyclerView {
          public static class: java.lang.Class<
            android.support.wear.widget.WearableRecyclerView
          >;
          public onTouchEvent(param0: android.view.MotionEvent): boolean;
          public onDetachedFromWindow(): void;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number
          );
          public setScrollDegreesPerScreen(param0: number): void;
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet,
            param2: number,
            param3: number
          );
          public onAttachedToWindow(): void;
          public setEdgeItemsCenteringEnabled(param0: boolean): void;
          public constructor(param0: android.content.Context);
          public constructor(
            param0: android.content.Context,
            param1: android.util.AttributeSet
          );
          public isEdgeItemsCenteringEnabled(): boolean;
          public setCircularScrollingGestureEnabled(param0: boolean): void;
          public setBezelFraction(param0: number): void;
          public getScrollDegreesPerScreen(): number;
          public getBezelFraction(): number;
          public isCircularScrollingGestureEnabled(): boolean;
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class AbsListViewFlingWatcher extends android.support.wear
            .widget.drawer.FlingWatcherFactory.FlingWatcher {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.AbsListViewFlingWatcher
            >;
            public onScroll(
              param0: android.widget.AbsListView,
              param1: number,
              param2: number,
              param3: number
            ): void;
            public onScrollStateChanged(
              param0: android.widget.AbsListView,
              param1: number
            ): void;
            public watch(): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class FlingWatcherFactory {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.FlingWatcherFactory
            >;
          }
          export namespace FlingWatcherFactory {
            export class FlingListener {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.FlingWatcherFactory.FlingListener
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.drawer.FlingWatcherFactory$FlingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onFlingComplete(param0: android.view.View): void;
              });
              public constructor();
              public onFlingComplete(param0: android.view.View): void;
            }
            export class FlingWatcher {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.FlingWatcherFactory.FlingWatcher
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.drawer.FlingWatcherFactory$FlingWatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { watch(): void });
              public constructor();
              public watch(): void;
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class NestedScrollViewFlingWatcher extends android.support.wear
            .widget.drawer.FlingWatcherFactory.FlingWatcher {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.NestedScrollViewFlingWatcher
            >;
            public onScrollChange(
              param0: android.support.v4.widget.NestedScrollView,
              param1: number,
              param2: number,
              param3: number,
              param4: number
            ): void;
            public watch(): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class PageIndicatorView {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.PageIndicatorView
            >;
            public getDotShadowRadius(): number;
            public getDotFadeOutDuration(): number;
            public getDotRadiusSelected(): number;
            public setPager(param0: android.support.v4.view.ViewPager): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number
            );
            public setDotColor(param0: number): void;
            public constructor(param0: android.content.Context);
            public onPageScrollStateChanged(param0: number): void;
            public getDotColorSelected(): number;
            public getDotFadeInDuration(): number;
            public setDotFadeOutDuration(
              param0: number,
              param1: java.util.concurrent.TimeUnit
            ): void;
            public setDotFadeWhenIdle(param0: boolean): void;
            public getDotFadeOutDelay(): number;
            public onMeasure(param0: number, param1: number): void;
            public setDotShadowDx(param0: number): void;
            public setDotRadiusSelected(param0: number): void;
            public setDotColorSelected(param0: number): void;
            public getDotFadeWhenIdle(): boolean;
            public setDotShadowColor(param0: number): void;
            public onDraw(param0: android.graphics.Canvas): void;
            public getDotShadowDx(): number;
            public getDotRadius(): number;
            public getDotShadowColor(): number;
            public setPagerAdapter(
              param0: android.support.v4.view.PagerAdapter
            ): void;
            public setDotFadeOutDelay(param0: number): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet
            );
            public getDotColor(): number;
            public setDotFadeInDuration(
              param0: number,
              param1: java.util.concurrent.TimeUnit
            ): void;
            public setDotRadius(param0: number): void;
            public onPageSelected(param0: number): void;
            public notifyDataSetChanged(): void;
            public onPageScrolled(
              param0: number,
              param1: number,
              param2: number
            ): void;
            public getDotShadowDy(): number;
            public setDotSpacing(param0: number): void;
            public setDotShadowRadius(param0: number): void;
            public getDotSpacing(): number;
            public setDotShadowDy(param0: number): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class RecyclerViewFlingWatcher
            implements
              android.support.wear.widget.drawer.FlingWatcherFactory
                .FlingWatcher {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.RecyclerViewFlingWatcher
            >;
            public watch(): void;
            public onScrollStateChanged(
              param0: android.support.v7.widget.RecyclerView,
              param1: number
            ): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class ScrollViewFlingWatcher extends android.support.wear
            .widget.drawer.FlingWatcherFactory.FlingWatcher {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.ScrollViewFlingWatcher
            >;
            public onScrollChange(
              param0: android.view.View,
              param1: number,
              param2: number,
              param3: number,
              param4: number
            ): void;
            public watch(): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class WearableActionDrawerMenu {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.WearableActionDrawerMenu
            >;
            public setQwertyMode(param0: boolean): void;
            public add(
              param0: number,
              param1: number,
              param2: number,
              param3: string
            ): android.view.MenuItem;
            public close(): void;
            public add(param0: string): android.view.MenuItem;
            public getItem(param0: number): android.view.MenuItem;
            public addSubMenu(
              param0: number,
              param1: number,
              param2: number,
              param3: string
            ): android.view.SubMenu;
            public performIdentifierAction(
              param0: number,
              param1: number
            ): boolean;
            public setGroupVisible(param0: number, param1: boolean): void;
            public findItem(param0: number): android.view.MenuItem;
            public performShortcut(
              param0: number,
              param1: android.view.KeyEvent,
              param2: number
            ): boolean;
            public removeItem(param0: number): void;
            public addIntentOptions(
              param0: number,
              param1: number,
              param2: number,
              param3: android.content.ComponentName,
              param4: native.Array<android.content.Intent>,
              param5: android.content.Intent,
              param6: number,
              param7: native.Array<android.view.MenuItem>
            ): number;
            public isShortcutKey(
              param0: number,
              param1: android.view.KeyEvent
            ): boolean;
            public add(
              param0: number,
              param1: number,
              param2: number,
              param3: number
            ): android.view.MenuItem;
            public addSubMenu(param0: number): android.view.SubMenu;
            public add(param0: number): android.view.MenuItem;
            public clear(): void;
            public setGroupCheckable(
              param0: number,
              param1: boolean,
              param2: boolean
            ): void;
            public addSubMenu(
              param0: number,
              param1: number,
              param2: number,
              param3: number
            ): android.view.SubMenu;
            public removeGroup(param0: number): void;
            public size(): number;
            public addSubMenu(param0: string): android.view.SubMenu;
            public setGroupEnabled(param0: number, param1: boolean): void;
            public hasVisibleItems(): boolean;
          }
          export namespace WearableActionDrawerMenu {
            export class WearableActionDrawerMenuItem {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem
              >;
              public setTitleCondensed(param0: string): android.view.MenuItem;
              public getIcon(): android.graphics.drawable.Drawable;
              public isActionViewExpanded(): boolean;
              public setOnMenuItemClickListener(
                param0: android.view.MenuItem.OnMenuItemClickListener
              ): android.view.MenuItem;
              public setActionView(param0: number): android.view.MenuItem;
              public setIcon(
                param0: android.graphics.drawable.Drawable
              ): android.view.MenuItem;
              public hasSubMenu(): boolean;
              public getNumericShortcut(): string;
              public setIntent(
                param0: android.content.Intent
              ): android.view.MenuItem;
              public setOnActionExpandListener(
                param0: android.view.MenuItem.OnActionExpandListener
              ): android.view.MenuItem;
              public getSubMenu(): android.view.SubMenu;
              public getActionProvider(): android.view.ActionProvider;
              public getActionView(): android.view.View;
              public setChecked(param0: boolean): android.view.MenuItem;
              public setNumericShortcut(param0: string): android.view.MenuItem;
              public setIcon(param0: number): android.view.MenuItem;
              public isCheckable(): boolean;
              public getItemId(): number;
              public setTitle(param0: string): android.view.MenuItem;
              public setAlphabeticShortcut(
                param0: string
              ): android.view.MenuItem;
              public setVisible(param0: boolean): android.view.MenuItem;
              public setEnabled(param0: boolean): android.view.MenuItem;
              public getGroupId(): number;
              public setShortcut(
                param0: string,
                param1: string
              ): android.view.MenuItem;
              public getTitleCondensed(): string;
              public setActionView(
                param0: android.view.View
              ): android.view.MenuItem;
              public getTitle(): string;
              public isVisible(): boolean;
              public expandActionView(): boolean;
              public setShowAsAction(param0: number): void;
              public getAlphabeticShortcut(): string;
              public collapseActionView(): boolean;
              public isEnabled(): boolean;
              public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
              public setShowAsActionFlags(
                param0: number
              ): android.view.MenuItem;
              public setTitle(param0: number): android.view.MenuItem;
              public isChecked(): boolean;
              public setActionProvider(
                param0: android.view.ActionProvider
              ): android.view.MenuItem;
              public getIntent(): android.content.Intent;
              public setCheckable(param0: boolean): android.view.MenuItem;
              public getOrder(): number;
            }
            export namespace WearableActionDrawerMenuItem {
              export class MenuItemChangedListener {
                public static class: java.lang.Class<
                  android.support.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem.MenuItemChangedListener
                >;
                /**
                 * Constructs a new instance of the android.support.wear.widget.drawer.WearableActionDrawerMenu$WearableActionDrawerMenuItem$MenuItemChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  itemChanged(
                    param0: android.support.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem
                  ): void;
                });
                public constructor();
                public itemChanged(
                  param0: android.support.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem
                ): void;
              }
            }
            export class WearableActionDrawerMenuListener {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuListener
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.drawer.WearableActionDrawerMenu$WearableActionDrawerMenuListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                menuItemChanged(param0: number): void;
                menuItemAdded(param0: number): void;
                menuItemRemoved(param0: number): void;
                menuChanged(): void;
              });
              public constructor();
              public menuItemRemoved(param0: number): void;
              public menuItemAdded(param0: number): void;
              public menuChanged(): void;
              public menuItemChanged(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class WearableActionDrawerView extends android.support.wear
            .widget.drawer.WearableDrawerView {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.WearableActionDrawerView
            >;
            public onDrawerOpened(): void;
            public onPeekContainerClicked(param0: android.view.View): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet
            );
            public setTitle(param0: string): void;
            public setOnMenuItemClickListener(
              param0: android.view.MenuItem.OnMenuItemClickListener
            ): void;
            public getMenu(): android.view.Menu;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number,
              param3: number
            );
            public canScrollHorizontally(param0: number): boolean;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number
            );
            public constructor(param0: android.content.Context);
          }
          export namespace WearableActionDrawerView {
            export class ActionItemViewHolder {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableActionDrawerView.ActionItemViewHolder
              >;
              public view: android.view.View;
              public iconView: android.widget.ImageView;
              public textView: android.widget.TextView;
            }
            export class ActionListAdapter extends android.support.v7.widget
              .RecyclerView.Adapter<
              android.support.v7.widget.RecyclerView.ViewHolder
            > {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableActionDrawerView.ActionListAdapter
              >;
              public static TYPE_ACTION: number;
              public static TYPE_TITLE: number;
              public getItemViewType(param0: number): number;
              public getItemCount(): number;
              public onBindViewHolder(
                param0: android.support.v7.widget.RecyclerView.ViewHolder,
                param1: number
              ): void;
              public onCreateViewHolder(
                param0: android.view.ViewGroup,
                param1: number
              ): android.support.v7.widget.RecyclerView.ViewHolder;
            }
            export class TitleViewHolder {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableActionDrawerView.TitleViewHolder
              >;
              public view: android.view.View;
              public textView: android.widget.TextView;
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class WearableDrawerController {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.WearableDrawerController
            >;
            public openDrawer(): void;
            public closeDrawer(): void;
            public peekDrawer(): void;
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class WearableDrawerLayout
            implements
              android.support.wear.widget.drawer.FlingWatcherFactory
                .FlingListener {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.WearableDrawerLayout
            >;
            public onNestedScrollAccepted(
              param0: android.view.View,
              param1: android.view.View,
              param2: number
            ): void;
            public onStopNestedScroll(param0: android.view.View): void;
            public onStartNestedScroll(
              param0: android.view.View,
              param1: android.view.View,
              param2: number
            ): boolean;
            public setDrawerStateCallback(
              param0: android.support.wear.widget.drawer.WearableDrawerLayout.DrawerStateCallback
            ): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number,
              param3: number
            );
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number
            );
            public onApplyWindowInsets(
              param0: android.view.WindowInsets
            ): android.view.WindowInsets;
            public constructor(param0: android.content.Context);
            public computeScroll(): void;
            public onLayout(
              param0: boolean,
              param1: number,
              param2: number,
              param3: number,
              param4: number
            ): void;
            public onNestedScroll(
              param0: android.view.View,
              param1: number,
              param2: number,
              param3: number,
              param4: number
            ): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet
            );
            public onLayoutChange(
              param0: android.view.View,
              param1: number,
              param2: number,
              param3: number,
              param4: number,
              param5: number,
              param6: number,
              param7: number,
              param8: number
            ): void;
            public onNestedPreScroll(
              param0: android.view.View,
              param1: number,
              param2: number,
              param3: native.Array<number>
            ): void;
            public onTouchEvent(param0: android.view.MotionEvent): boolean;
            public addView(
              param0: android.view.View,
              param1: number,
              param2: android.view.ViewGroup.LayoutParams
            ): void;
            public getNestedScrollAxes(): number;
            public onInterceptTouchEvent(
              param0: android.view.MotionEvent
            ): boolean;
            public onNestedFling(
              param0: android.view.View,
              param1: number,
              param2: number,
              param3: boolean
            ): boolean;
            public onFlingComplete(param0: android.view.View): void;
            public onNestedPreFling(
              param0: android.view.View,
              param1: number,
              param2: number
            ): boolean;
          }
          export namespace WearableDrawerLayout {
            export class BottomDrawerDraggerCallback extends android.support
              .wear.widget.drawer.WearableDrawerLayout.DrawerDraggerCallback {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableDrawerLayout.BottomDrawerDraggerCallback
              >;
              public clampViewPositionVertical(
                param0: android.view.View,
                param1: number,
                param2: number
              ): number;
              public onViewPositionChanged(
                param0: android.view.View,
                param1: number,
                param2: number,
                param3: number,
                param4: number
              ): void;
              public onEdgeDragStarted(param0: number, param1: number): void;
              public getDrawerView(): android.support.wear.widget.drawer.WearableDrawerView;
              public onViewReleased(
                param0: android.view.View,
                param1: number,
                param2: number
              ): void;
            }
            export class ClosePeekRunnable {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableDrawerLayout.ClosePeekRunnable
              >;
              public run(): void;
            }
            export abstract class DrawerDraggerCallback {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableDrawerLayout.DrawerDraggerCallback
              >;
              public tryCaptureView(
                param0: android.view.View,
                param1: number
              ): boolean;
              public onViewCaptured(
                param0: android.view.View,
                param1: number
              ): void;
              public getDrawerView(): android.support.wear.widget.drawer.WearableDrawerView;
              public onViewDragStateChanged(param0: number): void;
              public getViewVerticalDragRange(
                param0: android.view.View
              ): number;
            }
            export class DrawerStateCallback {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableDrawerLayout.DrawerStateCallback
              >;
              public constructor();
              public onDrawerStateChanged(
                param0: android.support.wear.widget.drawer.WearableDrawerLayout,
                param1: number
              ): void;
              public onDrawerOpened(
                param0: android.support.wear.widget.drawer.WearableDrawerLayout,
                param1: android.support.wear.widget.drawer.WearableDrawerView
              ): void;
              public onDrawerClosed(
                param0: android.support.wear.widget.drawer.WearableDrawerLayout,
                param1: android.support.wear.widget.drawer.WearableDrawerView
              ): void;
            }
            export class TopDrawerDraggerCallback extends android.support.wear
              .widget.drawer.WearableDrawerLayout.DrawerDraggerCallback {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableDrawerLayout.TopDrawerDraggerCallback
              >;
              public clampViewPositionVertical(
                param0: android.view.View,
                param1: number,
                param2: number
              ): number;
              public onViewPositionChanged(
                param0: android.view.View,
                param1: number,
                param2: number,
                param3: number,
                param4: number
              ): void;
              public onEdgeDragStarted(param0: number, param1: number): void;
              public getDrawerView(): android.support.wear.widget.drawer.WearableDrawerView;
              public onViewReleased(
                param0: android.view.View,
                param1: number,
                param2: number
              ): void;
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class WearableDrawerView {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.WearableDrawerView
            >;
            public static STATE_IDLE: number;
            public static STATE_DRAGGING: number;
            public static STATE_SETTLING: number;
            public setIsAutoPeekEnabled(param0: boolean): void;
            public isLockedWhenClosed(): boolean;
            public onAttachedToWindow(): void;
            public onFinishInflate(): void;
            public setOpenOnlyAtTopEnabled(param0: boolean): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number
            );
            public isOpenOnlyAtTopEnabled(): boolean;
            public constructor(param0: android.content.Context);
            public onDrawerOpened(): void;
            public setPeekContent(param0: android.view.View): void;
            public isClosed(): boolean;
            public getController(): android.support.wear.widget.drawer.WearableDrawerController;
            public setIsLocked(param0: boolean): void;
            public isOpened(): boolean;
            public getDrawerContent(): android.view.View;
            public setDrawerContent(param0: android.view.View): void;
            public setLockedWhenClosed(param0: boolean): void;
            public isAutoPeekEnabled(): boolean;
            public isLocked(): boolean;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number,
              param3: number
            );
            public setPeekOnScrollDownEnabled(param0: boolean): void;
            public getDrawerState(): number;
            public onDrawerStateChanged(param0: number): void;
            public onPeekContainerClicked(param0: android.view.View): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet
            );
            public isPeekOnScrollDownEnabled(): boolean;
            public isPeeking(): boolean;
            public addView(
              param0: android.view.View,
              param1: number,
              param2: android.view.ViewGroup.LayoutParams
            ): void;
            public onDrawerClosed(): void;
          }
          export namespace WearableDrawerView {
            export class DrawerState {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableDrawerView.DrawerState
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.drawer.WearableDrawerView$DrawerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module android {
  export namespace support {
    export namespace wear {
      export namespace widget {
        export namespace drawer {
          export class WearableNavigationDrawerView extends android.support.wear
            .widget.drawer.WearableDrawerView {
            public static class: java.lang.Class<
              android.support.wear.widget.drawer.WearableNavigationDrawerView
            >;
            public static SINGLE_PAGE: number;
            public static MULTI_PAGE: number;
            public setAdapter(
              param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
            ): void;
            public addOnItemSelectedListener(
              param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener
            ): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number,
              param3: number
            );
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet,
              param2: number
            );
            public setCurrentItem(param0: number, param1: boolean): void;
            public constructor(param0: android.content.Context);
            public removeOnItemSelectedListener(
              param0: android.support.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener
            ): void;
            public onDrawerOpened(): void;
            public constructor(
              param0: android.content.Context,
              param1: android.util.AttributeSet
            );
            public getNavigationStyle(): number;
            public onInterceptTouchEvent(
              param0: android.view.MotionEvent
            ): boolean;
            public canScrollHorizontally(param0: number): boolean;
            public onDrawerClosed(): void;
          }
          export namespace WearableNavigationDrawerView {
            export class NavigationStyle {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableNavigationDrawerView.NavigationStyle
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.drawer.WearableNavigationDrawerView$NavigationStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class OnItemSelectedListener {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener
              >;
              /**
               * Constructs a new instance of the android.support.wear.widget.drawer.WearableNavigationDrawerView$OnItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onItemSelected(param0: number): void;
              });
              public constructor();
              public onItemSelected(param0: number): void;
            }
            export abstract class WearableNavigationDrawerAdapter {
              public static class: java.lang.Class<
                android.support.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter
              >;
              public constructor();
              public getItemText(param0: number): string;
              public notifyDataSetChanged(): void;
              public getItemDrawable(
                param0: number
              ): android.graphics.drawable.Drawable;
              public getCount(): number;
              public setPresenter(
                param0: android.support.wear.internal.widget.drawer.WearableNavigationDrawerPresenter
              ): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:

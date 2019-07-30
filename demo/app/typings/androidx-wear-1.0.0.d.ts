declare module androidx {
	export module wear {
		export module activity {
			export class ConfirmationActivity {
				public static class: java.lang.Class<androidx.wear.activity.ConfirmationActivity>;
				public static EXTRA_MESSAGE: string;
				public static EXTRA_ANIMATION_TYPE: string;
				public static SUCCESS_ANIMATION: number;
				public static OPEN_ON_PHONE_ANIMATION: number;
				public static FAILURE_ANIMATION: number;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onAnimationFinished(): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module ambient {
			export class AmbientDelegate {
				public static class: java.lang.Class<androidx.wear.ambient.AmbientDelegate>;
				public setAmbientOffloadEnabled(param0: boolean): void;
			}
			export module AmbientDelegate {
				export class AmbientCallback {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientDelegate.AmbientCallback>;
					/**
					 * Constructs a new instance of the androidx.wear.ambient.AmbientDelegate$AmbientCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						onUpdateAmbient(): void;
						onExitAmbient(): void;
						onAmbientOffloadInvalidated(): void;
					});
					public constructor();
					public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
					public onAmbientOffloadInvalidated(): void;
					public onUpdateAmbient(): void;
					public onExitAmbient(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module ambient {
			export class AmbientMode {
				public static class: java.lang.Class<androidx.wear.ambient.AmbientMode>;
				public static EXTRA_BURN_IN_PROTECTION: string;
				public static EXTRA_LOWBIT_AMBIENT: string;
				public static FRAGMENT_TAG: string;
				public onAttach(param0: globalAndroid.content.Context): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onPause(): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public onStop(): void;
				public onDestroy(): void;
				public static attachAmbientSupport(param0: globalAndroid.app.Activity): androidx.wear.ambient.AmbientMode.AmbientController;
				public constructor();
				public onDetach(): void;
			}
			export module AmbientMode {
				export abstract class AmbientCallback {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientMode.AmbientCallback>;
					public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onAmbientOffloadInvalidated(): void;
					public onUpdateAmbient(): void;
					public onExitAmbient(): void;
				}
				export class AmbientCallbackProvider {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientMode.AmbientCallbackProvider>;
					/**
					 * Constructs a new instance of the androidx.wear.ambient.AmbientMode$AmbientCallbackProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAmbientCallback(): androidx.wear.ambient.AmbientMode.AmbientCallback;
					});
					public constructor();
					public getAmbientCallback(): androidx.wear.ambient.AmbientMode.AmbientCallback;
				}
				export class AmbientController {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientMode.AmbientController>;
					public setAmbientOffloadEnabled(param0: boolean): void;
					public isAmbient(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module ambient {
			export class AmbientModeSupport {
				public static class: java.lang.Class<androidx.wear.ambient.AmbientModeSupport>;
				public static EXTRA_BURN_IN_PROTECTION: string;
				public static EXTRA_LOWBIT_AMBIENT: string;
				public static FRAGMENT_TAG: string;
				public onAttach(param0: globalAndroid.content.Context): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onPause(): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public onStop(): void;
				public onDestroy(): void;
				public constructor();
				public onDetach(): void;
				public static attach(param0: androidx.fragment.app.FragmentActivity): androidx.wear.ambient.AmbientModeSupport.AmbientController;
			}
			export module AmbientModeSupport {
				export abstract class AmbientCallback {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientModeSupport.AmbientCallback>;
					public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onAmbientOffloadInvalidated(): void;
					public onUpdateAmbient(): void;
					public onExitAmbient(): void;
				}
				export class AmbientCallbackProvider {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientModeSupport.AmbientCallbackProvider>;
					/**
					 * Constructs a new instance of the androidx.wear.ambient.AmbientModeSupport$AmbientCallbackProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAmbientCallback(): androidx.wear.ambient.AmbientModeSupport.AmbientCallback;
					});
					public constructor();
					public getAmbientCallback(): androidx.wear.ambient.AmbientModeSupport.AmbientCallback;
				}
				export class AmbientController {
					public static class: java.lang.Class<androidx.wear.ambient.AmbientModeSupport.AmbientController>;
					public setAmbientOffloadEnabled(param0: boolean): void;
					public isAmbient(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module ambient {
			export class SharedLibraryVersion {
				public static class: java.lang.Class<androidx.wear.ambient.SharedLibraryVersion>;
				public static version(): number;
				public static verifySharedLibraryPresent(): void;
			}
			export module SharedLibraryVersion {
				export class PresenceHolder {
					public static class: java.lang.Class<androidx.wear.ambient.SharedLibraryVersion.PresenceHolder>;
				}
				export class VersionHolder {
					public static class: java.lang.Class<androidx.wear.ambient.SharedLibraryVersion.VersionHolder>;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module ambient {
			export class WearableControllerProvider {
				public static class: java.lang.Class<androidx.wear.ambient.WearableControllerProvider>;
				public getWearableController(param0: globalAndroid.app.Activity, param1: androidx.wear.ambient.AmbientDelegate.AmbientCallback): com.google.android.wearable.compat.WearableActivityController;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module internal {
			export module widget {
				export class ResourcesUtil {
					public static class: java.lang.Class<androidx.wear.internal.widget.ResourcesUtil>;
					public static getScreenHeightPx(param0: globalAndroid.content.Context): number;
					public static getFractionOfScreenPx(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					public static getScreenWidthPx(param0: globalAndroid.content.Context): number;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module internal {
			export module widget {
				export module drawer {
					export class MultiPagePresenter extends androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter {
						public static class: java.lang.Class<androidx.wear.internal.widget.drawer.MultiPagePresenter>;
						public onSelected(param0: number): void;
						public constructor();
						public onSetCurrentItemRequested(param0: number, param1: boolean): void;
						public onDrawerTapped(): boolean;
						public constructor(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView, param1: androidx.wear.internal.widget.drawer.MultiPagePresenter.Ui, param2: boolean);
						public onDataSetChanged(): void;
						public onNewAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
					}
					export module MultiPagePresenter {
						export class Ui {
							public static class: java.lang.Class<androidx.wear.internal.widget.drawer.MultiPagePresenter.Ui>;
							/**
							 * Constructs a new instance of the androidx.wear.internal.widget.drawer.MultiPagePresenter$Ui interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								initialize(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView, param1: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
								notifyNavigationPagerAdapterDataChanged(): void;
								notifyPageIndicatorDataChanged(): void;
								setNavigationPagerAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
								setNavigationPagerSelectedItem(param0: number, param1: boolean): void;
							});
							public constructor();
							public setNavigationPagerSelectedItem(param0: number, param1: boolean): void;
							public initialize(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView, param1: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
							public setNavigationPagerAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
							public notifyPageIndicatorDataChanged(): void;
							public notifyNavigationPagerAdapterDataChanged(): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module internal {
			export module widget {
				export module drawer {
					export class MultiPageUi extends androidx.wear.internal.widget.drawer.MultiPagePresenter.Ui {
						public static class: java.lang.Class<androidx.wear.internal.widget.drawer.MultiPageUi>;
						public constructor();
						public notifyPageIndicatorDataChanged(): void;
						public notifyNavigationPagerAdapterDataChanged(): void;
						public setNavigationPagerSelectedItem(param0: number, param1: boolean): void;
						public initialize(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView, param1: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
						public setNavigationPagerAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
					}
					export module MultiPageUi {
						export class NavigationPagerAdapter {
							public static class: java.lang.Class<androidx.wear.internal.widget.drawer.MultiPageUi.NavigationPagerAdapter>;
							public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
							public getItemPosition(param0: any): number;
							public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
							public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module internal {
			export module widget {
				export module drawer {
					export class SinglePagePresenter extends androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter {
						public static class: java.lang.Class<androidx.wear.internal.widget.drawer.SinglePagePresenter>;
						public onSelected(param0: number): void;
						public constructor();
						public onSetCurrentItemRequested(param0: number, param1: boolean): void;
						public onDrawerTapped(): boolean;
						public onDataSetChanged(): void;
						public constructor(param0: androidx.wear.internal.widget.drawer.SinglePagePresenter.Ui, param1: boolean);
						public onNewAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
					}
					export module SinglePagePresenter {
						export class Ui {
							public static class: java.lang.Class<androidx.wear.internal.widget.drawer.SinglePagePresenter.Ui>;
							/**
							 * Constructs a new instance of the androidx.wear.internal.widget.drawer.SinglePagePresenter$Ui interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setPresenter(param0: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
								initialize(param0: number): void;
								setIcon(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: string): void;
								setText(param0: string, param1: boolean): void;
								selectItem(param0: number): void;
								deselectItem(param0: number): void;
								closeDrawerDelayed(param0: number): void;
								peekDrawer(): void;
							});
							public constructor();
							public initialize(param0: number): void;
							public closeDrawerDelayed(param0: number): void;
							public selectItem(param0: number): void;
							public peekDrawer(): void;
							public setIcon(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: string): void;
							public setText(param0: string, param1: boolean): void;
							public deselectItem(param0: number): void;
							public setPresenter(param0: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module internal {
			export module widget {
				export module drawer {
					export class SinglePageUi extends androidx.wear.internal.widget.drawer.SinglePagePresenter.Ui {
						public static class: java.lang.Class<androidx.wear.internal.widget.drawer.SinglePageUi>;
						public selectItem(param0: number): void;
						public setText(param0: string, param1: boolean): void;
						public closeDrawerDelayed(param0: number): void;
						public peekDrawer(): void;
						public initialize(param0: number): void;
						public setPresenter(param0: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
						public constructor(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView);
						public deselectItem(param0: number): void;
						public setIcon(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: string): void;
					}
					export module SinglePageUi {
						export class OnSelectedClickHandler {
							public static class: java.lang.Class<androidx.wear.internal.widget.drawer.SinglePageUi.OnSelectedClickHandler>;
							public onClick(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module internal {
			export module widget {
				export module drawer {
					export abstract class WearableNavigationDrawerPresenter {
						public static class: java.lang.Class<androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter>;
						public onSelected(param0: number): void;
						public constructor();
						public onItemSelectedListenerRemoved(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener): void;
						public onSetCurrentItemRequested(param0: number, param1: boolean): void;
						public onDrawerTapped(): boolean;
						public onDataSetChanged(): void;
						public onItemSelectedListenerAdded(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener): void;
						public onNewAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module utils {
			export class MetadataConstants {
				public static class: java.lang.Class<androidx.wear.utils.MetadataConstants>;
				public static STANDALONE_METADATA_NAME: string;
				public static NOTIFICATION_BRIDGE_MODE_METADATA_NAME: string;
				public static NOTIFICATION_BRIDGE_MODE_BRIDGING: string;
				public static NOTIFICATION_BRIDGE_MODE_NO_BRIDGING: string;
				public static WATCH_FACE_PREVIEW_METADATA_NAME: string;
				public static WATCH_FACE_PREVIEW_CIRCULAR_METADATA_NAME: string;
				public static getPreviewDrawableResourceId(param0: globalAndroid.content.Context, param1: boolean): number;
				public static isStandalone(param0: globalAndroid.content.Context): boolean;
				public static isNotificationBridgingEnabled(param0: globalAndroid.content.Context): boolean;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class BezierSCurveInterpolator {
				public static class: java.lang.Class<androidx.wear.widget.BezierSCurveInterpolator>;
				public static INSTANCE: androidx.wear.widget.BezierSCurveInterpolator;
				public getInterpolation(param0: number): number;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class BoxInsetLayout {
				public static class: java.lang.Class<androidx.wear.widget.BoxInsetLayout>;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
				public setForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.wear.widget.BoxInsetLayout.LayoutParams;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onAttachedToWindow(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
			export module BoxInsetLayout {
				export class LayoutParams {
					public static class: java.lang.Class<androidx.wear.widget.BoxInsetLayout.LayoutParams>;
					public static BOX_NONE: number;
					public static BOX_LEFT: number;
					public static BOX_TOP: number;
					public static BOX_RIGHT: number;
					public static BOX_BOTTOM: number;
					public static BOX_ALL: number;
					public boxedEdges: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public constructor(param0: globalAndroid.widget.FrameLayout.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: androidx.wear.widget.BoxInsetLayout.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number, param1: number);
				}
				export module LayoutParams {
					export class BoxedEdges {
						public static class: java.lang.Class<androidx.wear.widget.BoxInsetLayout.LayoutParams.BoxedEdges>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.BoxInsetLayout$LayoutParams$BoxedEdges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class CircledImageView {
				public static class: java.lang.Class<androidx.wear.widget.CircledImageView>;
				public drawableStateChanged(): void;
				public setImageTint(param0: number): void;
				public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setCircleRadiusPressed(param0: number): void;
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setCircleRadiusPressedPercent(param0: number): void;
				public getColorChangeAnimationDuration(): number;
				public setShadowVisibility(param0: number): void;
				public setColorChangeAnimationDuration(param0: number): void;
				public getCircleRadiusPercent(): number;
				public setPadding(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public setCircleRadiusPercent(param0: number): void;
				public onSetAlpha(param0: number): boolean;
				public setCircleHidden(param0: boolean): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getCircleRadiusPressedPercent(): number;
				public setCircleColor(param0: number): void;
				public setCircleRadius(param0: number): void;
				public getCircleRadiusPressed(): number;
				public getCircleColorStateList(): globalAndroid.content.res.ColorStateList;
				public showIndeterminateProgress(param0: boolean): void;
				public onWindowVisibilityChanged(param0: number): void;
				public getImageDrawable(): globalAndroid.graphics.drawable.Drawable;
				public getDefaultCircleColor(): number;
				public setImageCirclePercentage(param0: number): void;
				public getCircleRadius(): number;
				public setProgress(param0: number): void;
				public setCircleBorderCap(param0: globalAndroid.graphics.Paint.Cap): void;
				public setPressed(param0: boolean): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public setCircleColorStateList(param0: globalAndroid.content.res.ColorStateList): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public onMeasure(param0: number, param1: number): void;
				public setImageResource(param0: number): void;
				public setCircleBorderWidth(param0: number): void;
				public getInitialCircleRadius(): number;
				public setImageHorizontalOffcenterPercentage(param0: number): void;
				public setCircleBorderColor(param0: number): void;
			}
			export module CircledImageView {
				export class OvalShadowPainter {
					public static class: java.lang.Class<androidx.wear.widget.CircledImageView.OvalShadowPainter>;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class CircularProgressLayout {
				public static class: java.lang.Class<androidx.wear.widget.CircularProgressLayout>;
				public setColorSchemeColors(param0: native.Array<number>): void;
				public setBackgroundColor(param0: number): void;
				public getProgressDrawable(): androidx.swiperefreshlayout.widget.CircularProgressDrawable;
				public isIndeterminate(): boolean;
				public getStrokeWidth(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public stopTimer(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setTotalTime(param0: number): void;
				public getTotalTime(): number;
				public setOnTimerFinishedListener(param0: androidx.wear.widget.CircularProgressLayout.OnTimerFinishedListener): void;
				public startTimer(): void;
				public isTimerRunning(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public getBackgroundColor(): number;
				public getColorSchemeColors(): native.Array<number>;
				public constructor(param0: globalAndroid.content.Context);
				public setIndeterminate(param0: boolean): void;
				public getOnTimerFinishedListener(): androidx.wear.widget.CircularProgressLayout.OnTimerFinishedListener;
				public onDetachedFromWindow(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setStartingRotation(param0: number): void;
				public getStartingRotation(): number;
				public setStrokeWidth(param0: number): void;
			}
			export module CircularProgressLayout {
				export class OnTimerFinishedListener {
					public static class: java.lang.Class<androidx.wear.widget.CircularProgressLayout.OnTimerFinishedListener>;
					/**
					 * Constructs a new instance of the androidx.wear.widget.CircularProgressLayout$OnTimerFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTimerFinished(param0: androidx.wear.widget.CircularProgressLayout): void;
					});
					public constructor();
					public onTimerFinished(param0: androidx.wear.widget.CircularProgressLayout): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class CircularProgressLayoutController {
				public static class: java.lang.Class<androidx.wear.widget.CircularProgressLayoutController>;
				public getOnTimerFinishedListener(): androidx.wear.widget.CircularProgressLayout.OnTimerFinishedListener;
				public setOnTimerFinishedListener(param0: androidx.wear.widget.CircularProgressLayout.OnTimerFinishedListener): void;
			}
			export module CircularProgressLayoutController {
				export class CircularProgressTimer {
					public static class: java.lang.Class<androidx.wear.widget.CircularProgressLayoutController.CircularProgressTimer>;
					public onFinish(): void;
					public onTick(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class ConfirmationOverlay {
				public static class: java.lang.Class<androidx.wear.widget.ConfirmationOverlay>;
				public static DEFAULT_ANIMATION_DURATION_MS: number;
				public static SUCCESS_ANIMATION: number;
				public static FAILURE_ANIMATION: number;
				public static OPEN_ON_PHONE_ANIMATION: number;
				public setMessage(param0: string): androidx.wear.widget.ConfirmationOverlay;
				public hide(): void;
				public setDuration(param0: number): androidx.wear.widget.ConfirmationOverlay;
				public showAbove(param0: globalAndroid.view.View): void;
				public setType(param0: number): androidx.wear.widget.ConfirmationOverlay;
				public setFinishedAnimationListener(param0: androidx.wear.widget.ConfirmationOverlay.OnAnimationFinishedListener): androidx.wear.widget.ConfirmationOverlay;
				public showOn(param0: globalAndroid.app.Activity): void;
				public constructor();
			}
			export module ConfirmationOverlay {
				export class OnAnimationFinishedListener {
					public static class: java.lang.Class<androidx.wear.widget.ConfirmationOverlay.OnAnimationFinishedListener>;
					/**
					 * Constructs a new instance of the androidx.wear.widget.ConfirmationOverlay$OnAnimationFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAnimationFinished(): void;
					});
					public constructor();
					public onAnimationFinished(): void;
				}
				export class OverlayType {
					public static class: java.lang.Class<androidx.wear.widget.ConfirmationOverlay.OverlayType>;
					/**
					 * Constructs a new instance of the androidx.wear.widget.ConfirmationOverlay$OverlayType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class CurvingLayoutCallback extends androidx.wear.widget.WearableLinearLayoutManager.LayoutCallback {
				public static class: java.lang.Class<androidx.wear.widget.CurvingLayoutCallback>;
				public onLayoutFinished(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView): void;
				public adjustAnchorOffsetXY(param0: globalAndroid.view.View, param1: native.Array<number>): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class ProgressDrawable {
				public static class: java.lang.Class<androidx.wear.widget.ProgressDrawable>;
				public startAnimation(): void;
				public setRingColor(param0: number): void;
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public onLevelChange(param0: number): boolean;
				public stopAnimation(): void;
				public setRingWidth(param0: number): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setAlpha(param0: number): void;
				public getOpacity(): number;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class ResourcesUtil {
				public static class: java.lang.Class<androidx.wear.widget.ResourcesUtil>;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class RoundedDrawable {
				public static class: java.lang.Class<androidx.wear.widget.RoundedDrawable>;
				public setBackgroundColor(param0: number): void;
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public isClipEnabled(): boolean;
				public constructor();
				public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
				public getBackgroundColor(): number;
				public getRadius(): number;
				public setClipEnabled(param0: boolean): void;
				public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				public inflate(param0: globalAndroid.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): void;
				public getOpacity(): number;
				public setRadius(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class ScrollManager {
				public static class: java.lang.Class<androidx.wear.widget.ScrollManager>;
				public getScrollDegreesPerScreen(): number;
				public setBezelWidth(param0: number): void;
				public getBezelWidth(): number;
				public setScrollDegreesPerScreen(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class SimpleAnimatorListener {
				public static class: java.lang.Class<androidx.wear.widget.SimpleAnimatorListener>;
				public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
				public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
				public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
				public onAnimationStart(param0: globalAndroid.animation.Animator): void;
				public onAnimationComplete(param0: globalAndroid.animation.Animator): void;
				public constructor();
				public wasCanceled(): boolean;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class SwipeDismissFrameLayout extends androidx.wear.widget.SwipeDismissLayout {
				public static class: java.lang.Class<androidx.wear.widget.SwipeDismissFrameLayout>;
				public removeCallback(param0: androidx.wear.widget.SwipeDismissFrameLayout.Callback): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addCallback(param0: androidx.wear.widget.SwipeDismissFrameLayout.Callback): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
			export module SwipeDismissFrameLayout {
				export abstract class Callback {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissFrameLayout.Callback>;
					public constructor();
					public onDismissed(param0: androidx.wear.widget.SwipeDismissFrameLayout): void;
					public onSwipeCanceled(param0: androidx.wear.widget.SwipeDismissFrameLayout): void;
					public onSwipeStarted(param0: androidx.wear.widget.SwipeDismissFrameLayout): void;
				}
				export class MyOnDismissedListener extends androidx.wear.widget.SwipeDismissLayout.OnDismissedListener {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissFrameLayout.MyOnDismissedListener>;
					public onDismissed(param0: androidx.wear.widget.SwipeDismissLayout): void;
				}
				export class MyOnPreSwipeListener extends androidx.wear.widget.SwipeDismissLayout.OnPreSwipeListener {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissFrameLayout.MyOnPreSwipeListener>;
					public onPreSwipe(param0: androidx.wear.widget.SwipeDismissLayout, param1: number, param2: number): boolean;
				}
				export class MyOnSwipeProgressChangedListener extends androidx.wear.widget.SwipeDismissLayout.OnSwipeProgressChangedListener {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissFrameLayout.MyOnSwipeProgressChangedListener>;
					public onSwipeProgressChanged(param0: androidx.wear.widget.SwipeDismissLayout, param1: number, param2: number): void;
					public onSwipeCanceled(param0: androidx.wear.widget.SwipeDismissLayout): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class SwipeDismissLayout {
				public static class: java.lang.Class<androidx.wear.widget.SwipeDismissLayout>;
				public static DEFAULT_DISMISS_DRAG_WIDTH_RATIO: number;
				public canScrollHorizontally(param0: number): boolean;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setSwipeable(param0: boolean): void;
				public canScroll(param0: globalAndroid.view.View, param1: boolean, param2: number, param3: number, param4: number): boolean;
				public getDismissMinDragWidthRatio(): number;
				public isSwipeable(): boolean;
				public setDismissMinDragWidthRatio(param0: number): void;
			}
			export module SwipeDismissLayout {
				export class OnDismissedListener {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissLayout.OnDismissedListener>;
					/**
					 * Constructs a new instance of the androidx.wear.widget.SwipeDismissLayout$OnDismissedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDismissed(param0: androidx.wear.widget.SwipeDismissLayout): void;
					});
					public constructor();
					public onDismissed(param0: androidx.wear.widget.SwipeDismissLayout): void;
				}
				export class OnPreSwipeListener {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissLayout.OnPreSwipeListener>;
					/**
					 * Constructs a new instance of the androidx.wear.widget.SwipeDismissLayout$OnPreSwipeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPreSwipe(param0: androidx.wear.widget.SwipeDismissLayout, param1: number, param2: number): boolean;
					});
					public constructor();
					public onPreSwipe(param0: androidx.wear.widget.SwipeDismissLayout, param1: number, param2: number): boolean;
				}
				export class OnSwipeProgressChangedListener {
					public static class: java.lang.Class<androidx.wear.widget.SwipeDismissLayout.OnSwipeProgressChangedListener>;
					/**
					 * Constructs a new instance of the androidx.wear.widget.SwipeDismissLayout$OnSwipeProgressChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSwipeProgressChanged(param0: androidx.wear.widget.SwipeDismissLayout, param1: number, param2: number): void;
						onSwipeCanceled(param0: androidx.wear.widget.SwipeDismissLayout): void;
					});
					public constructor();
					public onSwipeProgressChanged(param0: androidx.wear.widget.SwipeDismissLayout, param1: number, param2: number): void;
					public onSwipeCanceled(param0: androidx.wear.widget.SwipeDismissLayout): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class WearableLinearLayoutManager {
				public static class: java.lang.Class<androidx.wear.widget.WearableLinearLayoutManager>;
				public setLayoutCallback(param0: androidx.wear.widget.WearableLinearLayoutManager.LayoutCallback): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: androidx.wear.widget.WearableLinearLayoutManager.LayoutCallback);
				public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
				public getLayoutCallback(): androidx.wear.widget.WearableLinearLayoutManager.LayoutCallback;
				public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
			}
			export module WearableLinearLayoutManager {
				export abstract class LayoutCallback {
					public static class: java.lang.Class<androidx.wear.widget.WearableLinearLayoutManager.LayoutCallback>;
					public onLayoutFinished(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView): void;
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export class WearableRecyclerView {
				public static class: java.lang.Class<androidx.wear.widget.WearableRecyclerView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setCircularScrollingGestureEnabled(param0: boolean): void;
				public setEdgeItemsCenteringEnabled(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setBezelFraction(param0: number): void;
				public getScrollDegreesPerScreen(): number;
				public getBezelFraction(): number;
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public isEdgeItemsCenteringEnabled(): boolean;
				public onAttachedToWindow(): void;
				public isCircularScrollingGestureEnabled(): boolean;
				public setScrollDegreesPerScreen(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class AbsListViewFlingWatcher extends androidx.wear.widget.drawer.FlingWatcherFactory.FlingWatcher {
					public static class: java.lang.Class<androidx.wear.widget.drawer.AbsListViewFlingWatcher>;
					public watch(): void;
					public onScrollStateChanged(param0: globalAndroid.widget.AbsListView, param1: number): void;
					public onScroll(param0: globalAndroid.widget.AbsListView, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class FlingWatcherFactory {
					public static class: java.lang.Class<androidx.wear.widget.drawer.FlingWatcherFactory>;
				}
				export module FlingWatcherFactory {
					export class FlingListener {
						public static class: java.lang.Class<androidx.wear.widget.drawer.FlingWatcherFactory.FlingListener>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.drawer.FlingWatcherFactory$FlingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFlingComplete(param0: globalAndroid.view.View): void;
						});
						public constructor();
						public onFlingComplete(param0: globalAndroid.view.View): void;
					}
					export class FlingWatcher {
						public static class: java.lang.Class<androidx.wear.widget.drawer.FlingWatcherFactory.FlingWatcher>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.drawer.FlingWatcherFactory$FlingWatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							watch(): void;
						});
						public constructor();
						public watch(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class NestedScrollViewFlingWatcher extends androidx.wear.widget.drawer.FlingWatcherFactory.FlingWatcher {
					public static class: java.lang.Class<androidx.wear.widget.drawer.NestedScrollViewFlingWatcher>;
					public onScrollChange(param0: androidx.core.widget.NestedScrollView, param1: number, param2: number, param3: number, param4: number): void;
					public watch(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class PageIndicatorView {
					public static class: java.lang.Class<androidx.wear.widget.drawer.PageIndicatorView>;
					public setDotShadowDx(param0: number): void;
					public getDotColorSelected(): number;
					public getDotFadeOutDelay(): number;
					public notifyDataSetChanged(): void;
					public setDotRadiusSelected(param0: number): void;
					public getDotColor(): number;
					public setDotFadeOutDuration(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public getDotSpacing(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDotShadowColor(): number;
					public onPageSelected(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public setPagerAdapter(param0: androidx.viewpager.widget.PagerAdapter): void;
					public getDotRadius(): number;
					public setDotFadeOutDelay(param0: number): void;
					public setDotFadeWhenIdle(param0: boolean): void;
					public setDotShadowColor(param0: number): void;
					public setDotFadeInDuration(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public getDotShadowDy(): number;
					public setDotShadowDy(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public setDotSpacing(param0: number): void;
					public getDotFadeWhenIdle(): boolean;
					public getDotFadeOutDuration(): number;
					public onPageScrollStateChanged(param0: number): void;
					public setDotShadowRadius(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context);
					public getDotRadiusSelected(): number;
					public setDotColor(param0: number): void;
					public setPager(param0: androidx.viewpager.widget.ViewPager): void;
					public getDotShadowDx(): number;
					public setDotColorSelected(param0: number): void;
					public getDotShadowRadius(): number;
					public setDotRadius(param0: number): void;
					public getDotFadeInDuration(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class RecyclerViewFlingWatcher implements androidx.wear.widget.drawer.FlingWatcherFactory.FlingWatcher {
					public static class: java.lang.Class<androidx.wear.widget.drawer.RecyclerViewFlingWatcher>;
					public watch(): void;
					public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class ScrollViewFlingWatcher extends androidx.wear.widget.drawer.FlingWatcherFactory.FlingWatcher {
					public static class: java.lang.Class<androidx.wear.widget.drawer.ScrollViewFlingWatcher>;
					public watch(): void;
					public onScrollChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class WearableActionDrawerMenu {
					public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerMenu>;
					public findItem(param0: number): globalAndroid.view.MenuItem;
					public setGroupVisible(param0: number, param1: boolean): void;
					public addSubMenu(param0: string): globalAndroid.view.SubMenu;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.SubMenu;
					public add(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public size(): number;
					public performShortcut(param0: number, param1: globalAndroid.view.KeyEvent, param2: number): boolean;
					public addSubMenu(param0: number): globalAndroid.view.SubMenu;
					public add(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.MenuItem;
					public removeGroup(param0: number): void;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: globalAndroid.content.ComponentName, param4: native.Array<globalAndroid.content.Intent>, param5: globalAndroid.content.Intent, param6: number, param7: native.Array<globalAndroid.view.MenuItem>): number;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public clear(): void;
					public close(): void;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					public isShortcutKey(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public add(param0: string): globalAndroid.view.MenuItem;
					public removeItem(param0: number): void;
					public hasVisibleItems(): boolean;
					public add(param0: number): globalAndroid.view.MenuItem;
				}
				export module WearableActionDrawerMenu {
					export class WearableActionDrawerMenuItem {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem>;
						public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
						public getSubMenu(): globalAndroid.view.SubMenu;
						public getIcon(): globalAndroid.graphics.drawable.Drawable;
						public getNumericShortcut(): string;
						public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
						public setTitle(param0: number): globalAndroid.view.MenuItem;
						public getGroupId(): number;
						public isCheckable(): boolean;
						public setVisible(param0: boolean): globalAndroid.view.MenuItem;
						public getItemId(): number;
						public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
						public setTitle(param0: string): globalAndroid.view.MenuItem;
						public getActionView(): globalAndroid.view.View;
						public setActionView(param0: globalAndroid.view.View): globalAndroid.view.MenuItem;
						public isChecked(): boolean;
						public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
						public isVisible(): boolean;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
						public getIntent(): globalAndroid.content.Intent;
						public setShowAsAction(param0: number): void;
						public setChecked(param0: boolean): globalAndroid.view.MenuItem;
						public getOrder(): number;
						public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
						public setShowAsActionFlags(param0: number): globalAndroid.view.MenuItem;
						public isActionViewExpanded(): boolean;
						public isEnabled(): boolean;
						public setIcon(param0: number): globalAndroid.view.MenuItem;
						public collapseActionView(): boolean;
						public getTitleCondensed(): string;
						public getActionProvider(): globalAndroid.view.ActionProvider;
						public expandActionView(): boolean;
						public getTitle(): string;
						public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
						public getAlphabeticShortcut(): string;
						public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
						public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
						public setActionView(param0: number): globalAndroid.view.MenuItem;
						public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
						public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
						public hasSubMenu(): boolean;
						public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					}
					export module WearableActionDrawerMenuItem {
						export class MenuItemChangedListener {
							public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem.MenuItemChangedListener>;
							/**
							 * Constructs a new instance of the androidx.wear.widget.drawer.WearableActionDrawerMenu$WearableActionDrawerMenuItem$MenuItemChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								itemChanged(param0: androidx.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem): void;
							});
							public constructor();
							public itemChanged(param0: androidx.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem): void;
						}
					}
					export class WearableActionDrawerMenuListener {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuListener>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.drawer.WearableActionDrawerMenu$WearableActionDrawerMenuListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							menuItemChanged(param0: number): void;
							menuItemAdded(param0: number): void;
							menuItemRemoved(param0: number): void;
							menuChanged(): void;
						});
						public constructor();
						public menuItemRemoved(param0: number): void;
						public menuItemChanged(param0: number): void;
						public menuItemAdded(param0: number): void;
						public menuChanged(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class WearableActionDrawerView extends androidx.wear.widget.drawer.WearableDrawerView {
					public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): void;
					public getMenu(): globalAndroid.view.Menu;
					public setTitle(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public canScrollHorizontally(param0: number): boolean;
					public onDrawerOpened(): void;
					public onPeekContainerClicked(param0: globalAndroid.view.View): void;
				}
				export module WearableActionDrawerView {
					export class ActionItemViewHolder {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerView.ActionItemViewHolder>;
						public view: globalAndroid.view.View;
						public iconView: globalAndroid.widget.ImageView;
						public textView: globalAndroid.widget.TextView;
					}
					export class ActionListAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerView.ActionListAdapter>;
						public static TYPE_ACTION: number;
						public static TYPE_TITLE: number;
						public getItemViewType(param0: number): number;
						public getItemCount(): number;
						public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					}
					export class TitleViewHolder {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableActionDrawerView.TitleViewHolder>;
						public view: globalAndroid.view.View;
						public textView: globalAndroid.widget.TextView;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class WearableDrawerController {
					public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerController>;
					public openDrawer(): void;
					public peekDrawer(): void;
					public closeDrawer(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class WearableDrawerLayout implements androidx.wear.widget.drawer.FlingWatcherFactory.FlingListener {
					public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerLayout>;
					public onApplyWindowInsets(param0: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
					public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
					public setDrawerStateCallback(param0: androidx.wear.widget.drawer.WearableDrawerLayout.DrawerStateCallback): void;
					public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onStopNestedScroll(param0: globalAndroid.view.View): void;
					public getNestedScrollAxes(): number;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public computeScroll(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					public onFlingComplete(param0: globalAndroid.view.View): void;
				}
				export module WearableDrawerLayout {
					export class BottomDrawerDraggerCallback extends androidx.wear.widget.drawer.WearableDrawerLayout.DrawerDraggerCallback {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerLayout.BottomDrawerDraggerCallback>;
						public onViewReleased(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public clampViewPositionVertical(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public onEdgeDragStarted(param0: number, param1: number): void;
						public getDrawerView(): androidx.wear.widget.drawer.WearableDrawerView;
						public onViewPositionChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					}
					export class ClosePeekRunnable {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerLayout.ClosePeekRunnable>;
						public run(): void;
					}
					export abstract class DrawerDraggerCallback {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerLayout.DrawerDraggerCallback>;
						public onViewDragStateChanged(param0: number): void;
						public tryCaptureView(param0: globalAndroid.view.View, param1: number): boolean;
						public onViewCaptured(param0: globalAndroid.view.View, param1: number): void;
						public getViewVerticalDragRange(param0: globalAndroid.view.View): number;
						public getDrawerView(): androidx.wear.widget.drawer.WearableDrawerView;
					}
					export class DrawerStateCallback {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerLayout.DrawerStateCallback>;
						public constructor();
						public onDrawerClosed(param0: androidx.wear.widget.drawer.WearableDrawerLayout, param1: androidx.wear.widget.drawer.WearableDrawerView): void;
						public onDrawerStateChanged(param0: androidx.wear.widget.drawer.WearableDrawerLayout, param1: number): void;
						public onDrawerOpened(param0: androidx.wear.widget.drawer.WearableDrawerLayout, param1: androidx.wear.widget.drawer.WearableDrawerView): void;
					}
					export class TopDrawerDraggerCallback extends androidx.wear.widget.drawer.WearableDrawerLayout.DrawerDraggerCallback {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerLayout.TopDrawerDraggerCallback>;
						public onViewReleased(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public clampViewPositionVertical(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public onEdgeDragStarted(param0: number, param1: number): void;
						public getDrawerView(): androidx.wear.widget.drawer.WearableDrawerView;
						public onViewPositionChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class WearableDrawerView {
					public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerView>;
					public static STATE_IDLE: number;
					public static STATE_DRAGGING: number;
					public static STATE_SETTLING: number;
					public isLockedWhenClosed(): boolean;
					public setIsLocked(param0: boolean): void;
					public onDrawerClosed(): void;
					public setPeekContent(param0: globalAndroid.view.View): void;
					public onAttachedToWindow(): void;
					public onDrawerStateChanged(param0: number): void;
					public getDrawerState(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isAutoPeekEnabled(): boolean;
					public isPeekOnScrollDownEnabled(): boolean;
					public isOpenOnlyAtTopEnabled(): boolean;
					public setIsAutoPeekEnabled(param0: boolean): void;
					public setDrawerContent(param0: globalAndroid.view.View): void;
					public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public onFinishInflate(): void;
					public setOpenOnlyAtTopEnabled(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onPeekContainerClicked(param0: globalAndroid.view.View): void;
					public constructor(param0: globalAndroid.content.Context);
					public isLocked(): boolean;
					public setLockedWhenClosed(param0: boolean): void;
					public getDrawerContent(): globalAndroid.view.View;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public setPeekOnScrollDownEnabled(param0: boolean): void;
					public isOpened(): boolean;
					public isPeeking(): boolean;
					public onDrawerOpened(): void;
					public isClosed(): boolean;
					public getController(): androidx.wear.widget.drawer.WearableDrawerController;
				}
				export module WearableDrawerView {
					export class DrawerState {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableDrawerView.DrawerState>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.drawer.WearableDrawerView$DrawerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module wear {
		export module widget {
			export module drawer {
				export class WearableNavigationDrawerView extends androidx.wear.widget.drawer.WearableDrawerView {
					public static class: java.lang.Class<androidx.wear.widget.drawer.WearableNavigationDrawerView>;
					public static SINGLE_PAGE: number;
					public static MULTI_PAGE: number;
					public removeOnItemSelectedListener(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener): void;
					public onDrawerClosed(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public canScrollHorizontally(param0: number): boolean;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAdapter(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter): void;
					public addOnItemSelectedListener(param0: androidx.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener): void;
					public getNavigationStyle(): number;
					public setCurrentItem(param0: number, param1: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onDrawerOpened(): void;
				}
				export module WearableNavigationDrawerView {
					export class NavigationStyle {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableNavigationDrawerView.NavigationStyle>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.drawer.WearableNavigationDrawerView$NavigationStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class OnItemSelectedListener {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableNavigationDrawerView.OnItemSelectedListener>;
						/**
						 * Constructs a new instance of the androidx.wear.widget.drawer.WearableNavigationDrawerView$OnItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onItemSelected(param0: number): void;
						});
						public constructor();
						public onItemSelected(param0: number): void;
					}
					export abstract class WearableNavigationDrawerAdapter {
						public static class: java.lang.Class<androidx.wear.widget.drawer.WearableNavigationDrawerView.WearableNavigationDrawerAdapter>;
						public getItemText(param0: number): string;
						public constructor();
						public notifyDataSetChanged(): void;
						public setPresenter(param0: androidx.wear.internal.widget.drawer.WearableNavigationDrawerPresenter): void;
						public getCount(): number;
						public getItemDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}

//Generics information:


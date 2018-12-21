
declare module native {	export class Array<T> {	constructor(); length: number; [index: number]: T; } }

import globalAndroid = android;

declare module android {
	export module support {
		export module wearable {
			export module activity {
				export class ConfirmationActivity implements android.support.wearable.view.ConfirmationOverlay.FinishedAnimationListener {
					public static class: java.lang.Class<android.support.wearable.activity.ConfirmationActivity>;
					public static EXTRA_MESSAGE: string;
					public static EXTRA_ANIMATION_TYPE: string;
					public static SUCCESS_ANIMATION: number;
					public static OPEN_ON_PHONE_ANIMATION: number;
					public static FAILURE_ANIMATION: number;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public onAnimationFinished(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module activity {
				export abstract class WearableActivity extends android.app.Activity {
					public static class: java.lang.Class<android.support.wearable.activity.WearableActivity>;
					public static EXTRA_BURN_IN_PROTECTION: string;
					public static EXTRA_LOWBIT_AMBIENT: string;
					public onInvalidateAmbientOffload(): void;
					public onDestroy(): void;
					public onResume(): void;
					public setAutoResumeEnabled(param0: boolean): void;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public setAmbientOffloadEnabled(param0: boolean): void;
					public onPause(): void;
					public onStop(): void;
					public isAmbient(): boolean;
					public setAmbientEnabled(): void;
					public onEnterAmbient(param0: android.os.Bundle): void;
					public onUpdateAmbient(): void;
					public onExitAmbient(): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module activity {
				export class WearableActivityDelegate {
					public static class: java.lang.Class<android.support.wearable.activity.WearableActivityDelegate>;
					public constructor(param0: android.support.wearable.activity.WearableActivityDelegate.AmbientCallback);
					public setAutoResumeEnabled(param0: boolean): void;
					public setAmbientOffloadEnabled(param0: boolean): void;
					public onPause(): void;
					public onStop(): void;
					public onDestroy(): void;
					public isAmbient(): boolean;
					public setAmbientEnabled(): void;
					public onCreate(param0: android.app.Activity): void;
					public onResume(): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
				export module WearableActivityDelegate {
					export class AmbientCallback {
						public static class: java.lang.Class<android.support.wearable.activity.WearableActivityDelegate.AmbientCallback>;
						/**
						 * Constructs a new instance of the android.support.wearable.activity.WearableActivityDelegate$AmbientCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class AmbientOffloadCallback extends android.support.wearable.activity.WearableActivityDelegate.AmbientCallback {
						public static class: java.lang.Class<android.support.wearable.activity.WearableActivityDelegate.AmbientOffloadCallback>;
						/**
						 * Constructs a new instance of the android.support.wearable.activity.WearableActivityDelegate$AmbientOffloadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInvalidateAmbientOffload(): void;
							onEnterAmbient(param0: android.os.Bundle): void;
							onUpdateAmbient(): void;
							onExitAmbient(): void;
						});
						public constructor();
						public onExitAmbient(): void;
						public onEnterAmbient(param0: android.os.Bundle): void;
						public onInvalidateAmbientOffload(): void;
						public onUpdateAmbient(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module authentication {
				export class IAuthenticationRequestCallback {
					public static class: java.lang.Class<android.support.wearable.authentication.IAuthenticationRequestCallback>;
					/**
					 * Constructs a new instance of the android.support.wearable.authentication.IAuthenticationRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: android.os.Bundle): void;
					});
					public constructor();
					public onResult(param0: android.os.Bundle): void;
				}
				export module IAuthenticationRequestCallback {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.authentication.IAuthenticationRequestCallback {
						public static class: java.lang.Class<android.support.wearable.authentication.IAuthenticationRequestCallback.Stub>;
						public constructor();
						public static asInterface(param0: android.os.IBinder): android.support.wearable.authentication.IAuthenticationRequestCallback;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public onResult(param0: android.os.Bundle): void;
						public constructor(param0: string);
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.authentication.IAuthenticationRequestCallback {
							public static class: java.lang.Class<android.support.wearable.authentication.IAuthenticationRequestCallback.Stub.Proxy>;
							public onResult(param0: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module authentication {
				export class IAuthenticationRequestService {
					public static class: java.lang.Class<android.support.wearable.authentication.IAuthenticationRequestService>;
					/**
					 * Constructs a new instance of the android.support.wearable.authentication.IAuthenticationRequestService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						openUrl(param0: android.os.Bundle, param1: android.support.wearable.authentication.IAuthenticationRequestCallback): void;
					});
					public constructor();
					public openUrl(param0: android.os.Bundle, param1: android.support.wearable.authentication.IAuthenticationRequestCallback): void;
				}
				export module IAuthenticationRequestService {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.authentication.IAuthenticationRequestService {
						public static class: java.lang.Class<android.support.wearable.authentication.IAuthenticationRequestService.Stub>;
						public constructor();
						public openUrl(param0: android.os.Bundle, param1: android.support.wearable.authentication.IAuthenticationRequestCallback): void;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public static asInterface(param0: android.os.IBinder): android.support.wearable.authentication.IAuthenticationRequestService;
						public constructor(param0: string);
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.authentication.IAuthenticationRequestService {
							public static class: java.lang.Class<android.support.wearable.authentication.IAuthenticationRequestService.Stub.Proxy>;
							public openUrl(param0: android.os.Bundle, param1: android.support.wearable.authentication.IAuthenticationRequestCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module authentication {
				export class OAuthClient {
					public static class: java.lang.Class<android.support.wearable.authentication.OAuthClient>;
					public static KEY_REQUEST_URL: string;
					public static KEY_PACKAGE_NAME: string;
					public static KEY_RESPONSE_URL: string;
					public static KEY_ERROR_CODE: string;
					public static ERROR_UNSUPPORTED: number;
					public static ERROR_PHONE_UNAVAILABLE: number;
					public static WEAR_REDIRECT_URL_PREFIX: string;
					public static LEGACY_WEAR_REDIRECT_URL_PREFIX: string;
					public destroy(): void;
					public finalize(): void;
					public sendAuthorizationRequest(param0: android.net.Uri, param1: android.support.wearable.authentication.OAuthClient.Callback): void;
					public static create(param0: android.content.Context): android.support.wearable.authentication.OAuthClient;
					public constructor(param0: android.support.wearable.authentication.OAuthClient.ServiceBinder, param1: java.util.concurrent.Executor, param2: string);
				}
				export module OAuthClient {
					export abstract class Callback {
						public static class: java.lang.Class<android.support.wearable.authentication.OAuthClient.Callback>;
						public constructor();
						public onAuthorizationError(param0: number): void;
						public onAuthorizationResponse(param0: android.net.Uri, param1: android.net.Uri): void;
					}
					export class ErrorCode {
						public static class: java.lang.Class<android.support.wearable.authentication.OAuthClient.ErrorCode>;
						/**
						 * Constructs a new instance of the android.support.wearable.authentication.OAuthClient$ErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class OAuthConnection {
						public static class: java.lang.Class<android.support.wearable.authentication.OAuthClient.OAuthConnection>;
						public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
						public onServiceDisconnected(param0: android.content.ComponentName): void;
					}
					export class RequestCallback extends android.support.wearable.authentication.IAuthenticationRequestCallback.Stub {
						public static class: java.lang.Class<android.support.wearable.authentication.OAuthClient.RequestCallback>;
						public onResult(param0: android.os.Bundle): void;
					}
					export class ServiceBinder {
						public static class: java.lang.Class<android.support.wearable.authentication.OAuthClient.ServiceBinder>;
						/**
						 * Constructs a new instance of the android.support.wearable.authentication.OAuthClient$ServiceBinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;
							unbindService(param0: android.content.ServiceConnection): void;
						});
						public constructor();
						public unbindService(param0: android.content.ServiceConnection): void;
						public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module companion {
				export class WatchFaceCompanion {
					public static class: java.lang.Class<android.support.wearable.companion.WatchFaceCompanion>;
					public static EXTRA_WATCH_FACE_COMPONENT: string;
					public static EXTRA_PEER_ID: string;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationData {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationData>;
					public static TYPE_NOT_CONFIGURED: number;
					public static TYPE_EMPTY: number;
					public static TYPE_NO_DATA: number;
					public static TYPE_SHORT_TEXT: number;
					public static TYPE_LONG_TEXT: number;
					public static TYPE_RANGED_VALUE: number;
					public static TYPE_ICON: number;
					public static TYPE_SMALL_IMAGE: number;
					public static TYPE_LARGE_IMAGE: number;
					public static TYPE_NO_PERMISSION: number;
					public static IMAGE_STYLE_PHOTO: number;
					public static IMAGE_STYLE_ICON: number;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.ComplicationData>;
					public getType(): number;
					public getContentDescription(): android.support.wearable.complications.ComplicationText;
					public getLongTitle(): android.support.wearable.complications.ComplicationText;
					public getIcon(): any;
					public describeContents(): number;
					public getSmallImage(): any;
					public getShortText(): android.support.wearable.complications.ComplicationText;
					public isTimeDependent(): boolean;
					public getShortTitle(): android.support.wearable.complications.ComplicationText;
					public getLargeImage(): any;
					public getBurnInProtectionSmallImage(): any;
					public getImageStyle(): number;
					public toString(): string;
					public getValue(): number;
					public getMaxValue(): number;
					public getImageContentDescription(): android.support.wearable.complications.ComplicationText;
					public getBurnInProtectionIcon(): any;
					public isActive(param0: number): boolean;
					public getLongText(): android.support.wearable.complications.ComplicationText;
					public getTapAction(): android.app.PendingIntent;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public getMinValue(): number;
				}
				export module ComplicationData {
					export class Builder {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationData.Builder>;
						public setMinValue(param0: number): android.support.wearable.complications.ComplicationData.Builder;
						public setEndTime(param0: number): android.support.wearable.complications.ComplicationData.Builder;
						public setMaxValue(param0: number): android.support.wearable.complications.ComplicationData.Builder;
						public setImageStyle(param0: number): android.support.wearable.complications.ComplicationData.Builder;
						public setShortText(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationData.Builder;
						public setLongText(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationData.Builder;
						public setIcon(param0: any): android.support.wearable.complications.ComplicationData.Builder;
						public setBurnInProtectionIcon(param0: any): android.support.wearable.complications.ComplicationData.Builder;
						public setLargeImage(param0: any): android.support.wearable.complications.ComplicationData.Builder;
						public setTapAction(param0: android.app.PendingIntent): android.support.wearable.complications.ComplicationData.Builder;
						public setBurnInProtectionSmallImage(param0: any): android.support.wearable.complications.ComplicationData.Builder;
						public setSmallImage(param0: any): android.support.wearable.complications.ComplicationData.Builder;
						public setValue(param0: number): android.support.wearable.complications.ComplicationData.Builder;
						public setContentDescription(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationData.Builder;
						public constructor(param0: android.support.wearable.complications.ComplicationData);
						public constructor(param0: number);
						public setLongTitle(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationData.Builder;
						public setShortTitle(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationData.Builder;
						public setImageContentDescription(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationData.Builder;
						public setStartTime(param0: number): android.support.wearable.complications.ComplicationData.Builder;
						public build(): android.support.wearable.complications.ComplicationData;
					}
					export class ComplicationType {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationData.ComplicationType>;
						/**
						 * Constructs a new instance of the android.support.wearable.complications.ComplicationData$ComplicationType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class ImageStyle {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationData.ImageStyle>;
						/**
						 * Constructs a new instance of the android.support.wearable.complications.ComplicationData$ImageStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationHelperActivity {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationHelperActivity>;
					public static ACTION_REQUEST_UPDATE_ALL_ACTIVE: string;
					public static EXTRA_WATCH_FACE_COMPONENT: string;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public static createPermissionRequestHelperIntent(param0: android.content.Context, param1: android.content.ComponentName): android.content.Intent;
					public static createProviderChooserHelperIntent(param0: android.content.Context, param1: android.content.ComponentName, param2: number, param3: native.Array<number>): android.content.Intent;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationManager {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationManager>;
					public noUpdateRequired(param0: number): void;
					public constructor(param0: android.support.wearable.complications.IComplicationManager);
					public updateComplicationData(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationProviderInfo {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationProviderInfo>;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.ComplicationProviderInfo>;
					public appName: string;
					public providerName: string;
					public providerIcon: any;
					public complicationType: number;
					public constructor(param0: string, param1: string, param2: any, param3: number);
					public constructor(param0: android.os.Parcel);
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export abstract class ComplicationProviderService {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationProviderService>;
					public static ACTION_COMPLICATION_UPDATE_REQUEST: string;
					public static EXTRA_COMPLICATION_MANAGER_BINDER: string;
					public static EXTRA_COMPLICATION_ID: string;
					public static EXTRA_COMPLICATION_TYPE: string;
					public static EXTRA_COMPLICATION_DEACTIVATED: string;
					public static METADATA_KEY_SUPPORTED_TYPES: string;
					public static METADATA_KEY_UPDATE_PERIOD_SECONDS: string;
					public static METADATA_KEY_PROVIDER_CONFIG_ACTION: string;
					public static METADATA_KEY_SAFE_WATCH_FACES: string;
					public static METADATA_KEY_HIDDEN: string;
					public static CATEGORY_PROVIDER_CONFIG_ACTION: string;
					public static EXTRA_CONFIG_COMPLICATION_ID: string;
					public static EXTRA_CONFIG_COMPLICATION_TYPE: string;
					public static EXTRA_CONFIG_PROVIDER_COMPONENT: string;
					public onComplicationActivated(param0: number, param1: number, param2: android.support.wearable.complications.ComplicationManager): void;
					public onBind(param0: android.content.Intent): android.os.IBinder;
					public onComplicationDeactivated(param0: number): void;
					public onComplicationUpdate(param0: number, param1: number, param2: android.support.wearable.complications.ComplicationManager): void;
					public constructor();
					public inRetailMode(): boolean;
				}
				export module ComplicationProviderService {
					export class IComplicationProviderWrapper extends android.support.wearable.complications.IComplicationProvider.Stub {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationProviderService.IComplicationProviderWrapper>;
						public onComplicationDeactivated(param0: number): void;
						public onUpdate(param0: number, param1: number, param2: android.os.IBinder): void;
						public onComplicationActivated(param0: number, param1: number, param2: android.os.IBinder): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationText extends android.support.wearable.complications.TimeDependentText {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationText>;
					public static DIFFERENCE_STYLE_STOPWATCH: number;
					public static DIFFERENCE_STYLE_SHORT_SINGLE_UNIT: number;
					public static DIFFERENCE_STYLE_SHORT_DUAL_UNIT: number;
					public static DIFFERENCE_STYLE_WORDS_SINGLE_UNIT: number;
					public static DIFFERENCE_STYLE_SHORT_WORDS_SINGLE_UNIT: number;
					public static FORMAT_STYLE_DEFAULT: number;
					public static FORMAT_STYLE_UPPER_CASE: number;
					public static FORMAT_STYLE_LOWER_CASE: number;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.ComplicationText>;
					public getNextChangeTime(param0: number): number;
					public getText(param0: android.content.Context, param1: number): string;
					public static plainText(param0: string): android.support.wearable.complications.ComplicationText;
					public returnsSameText(param0: number, param1: number): boolean;
					public isAlwaysEmpty(): boolean;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static getText(param0: android.content.Context, param1: android.support.wearable.complications.ComplicationText, param2: number): string;
				}
				export module ComplicationText {
					export class TimeDifferenceBuilder {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder>;
						public constructor();
						public setStyle(param0: number): android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder;
						public setReferencePeriodEnd(param0: number): android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder;
						public setReferencePeriodStart(param0: number): android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder;
						public setSurroundingText(param0: string): android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder;
						public setShowNowText(param0: boolean): android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder;
						public build(): android.support.wearable.complications.ComplicationText;
						public setMinimumUnit(param0: java.util.concurrent.TimeUnit): android.support.wearable.complications.ComplicationText.TimeDifferenceBuilder;
					}
					export class TimeDifferenceStyle {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationText.TimeDifferenceStyle>;
						/**
						 * Constructs a new instance of the android.support.wearable.complications.ComplicationText$TimeDifferenceStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class TimeFormatBuilder {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationText.TimeFormatBuilder>;
						public setFormat(param0: string): android.support.wearable.complications.ComplicationText.TimeFormatBuilder;
						public constructor();
						public setStyle(param0: number): android.support.wearable.complications.ComplicationText.TimeFormatBuilder;
						public build(): android.support.wearable.complications.ComplicationText;
						public setSurroundingText(param0: string): android.support.wearable.complications.ComplicationText.TimeFormatBuilder;
						public setTimeZone(param0: java.util.TimeZone): android.support.wearable.complications.ComplicationText.TimeFormatBuilder;
					}
					export class TimeFormatStyle {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationText.TimeFormatStyle>;
						/**
						 * Constructs a new instance of the android.support.wearable.complications.ComplicationText$TimeFormatStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationTextTemplate extends android.support.wearable.complications.TimeDependentText {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationTextTemplate>;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.ComplicationTextTemplate>;
					public getNextChangeTime(param0: number): number;
					public getText(param0: android.content.Context, param1: number): string;
					public returnsSameText(param0: number, param1: number): boolean;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export module ComplicationTextTemplate {
					export class Builder {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationTextTemplate.Builder>;
						public constructor();
						public setSurroundingText(param0: string): android.support.wearable.complications.ComplicationTextTemplate.Builder;
						public addComplicationText(param0: android.support.wearable.complications.ComplicationText): android.support.wearable.complications.ComplicationTextTemplate.Builder;
						public build(): android.support.wearable.complications.ComplicationTextTemplate;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ComplicationTextUtils {
					public static class: java.lang.Class<android.support.wearable.complications.ComplicationTextUtils>;
					public static shortTextDayOfWeekFormat(param0: java.util.Locale): string;
					public static shortTextDayOfMonthFormat(param0: java.util.Locale): string;
					public static shortTextDayMonthFormat(param0: java.util.Locale): string;
					public constructor();
					public static shortTextTimeFormat(param0: java.util.Locale, param1: boolean): string;
					public static shortTextMonthFormat(param0: java.util.Locale): string;
				}
				export module ComplicationTextUtils {
					export class FormatMapping {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationTextUtils.FormatMapping>;
					}
					export class TimeUnitMapping {
						public static class: java.lang.Class<android.support.wearable.complications.ComplicationTextUtils.TimeUnitMapping>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class IComplicationManager {
					public static class: java.lang.Class<android.support.wearable.complications.IComplicationManager>;
					/**
					 * Constructs a new instance of the android.support.wearable.complications.IComplicationManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateComplicationData(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
					});
					public constructor();
					public updateComplicationData(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
				}
				export module IComplicationManager {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.complications.IComplicationManager {
						public static class: java.lang.Class<android.support.wearable.complications.IComplicationManager.Stub>;
						public constructor();
						public updateComplicationData(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public static asInterface(param0: android.os.IBinder): android.support.wearable.complications.IComplicationManager;
						public constructor(param0: string);
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.complications.IComplicationManager {
							public static class: java.lang.Class<android.support.wearable.complications.IComplicationManager.Stub.Proxy>;
							public updateComplicationData(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class IComplicationProvider {
					public static class: java.lang.Class<android.support.wearable.complications.IComplicationProvider>;
					/**
					 * Constructs a new instance of the android.support.wearable.complications.IComplicationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdate(param0: number, param1: number, param2: android.os.IBinder): void;
						onComplicationDeactivated(param0: number): void;
						onComplicationActivated(param0: number, param1: number, param2: android.os.IBinder): void;
					});
					public constructor();
					public onComplicationDeactivated(param0: number): void;
					public onUpdate(param0: number, param1: number, param2: android.os.IBinder): void;
					public onComplicationActivated(param0: number, param1: number, param2: android.os.IBinder): void;
				}
				export module IComplicationProvider {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.complications.IComplicationProvider {
						public static class: java.lang.Class<android.support.wearable.complications.IComplicationProvider.Stub>;
						public static asInterface(param0: android.os.IBinder): android.support.wearable.complications.IComplicationProvider;
						public constructor();
						public onComplicationDeactivated(param0: number): void;
						public onUpdate(param0: number, param1: number, param2: android.os.IBinder): void;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public onComplicationActivated(param0: number, param1: number, param2: android.os.IBinder): void;
						public constructor(param0: string);
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.complications.IComplicationProvider {
							public static class: java.lang.Class<android.support.wearable.complications.IComplicationProvider.Stub.Proxy>;
							public onUpdate(param0: number, param1: number, param2: android.os.IBinder): void;
							public onComplicationDeactivated(param0: number): void;
							public onComplicationActivated(param0: number, param1: number, param2: android.os.IBinder): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class IProviderInfoService {
					public static class: java.lang.Class<android.support.wearable.complications.IProviderInfoService>;
					/**
					 * Constructs a new instance of the android.support.wearable.complications.IProviderInfoService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getProviderInfos(param0: android.content.ComponentName, param1: native.Array<number>): native.Array<android.support.wearable.complications.ComplicationProviderInfo>;
					});
					public constructor();
					public getProviderInfos(param0: android.content.ComponentName, param1: native.Array<number>): native.Array<android.support.wearable.complications.ComplicationProviderInfo>;
				}
				export module IProviderInfoService {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.complications.IProviderInfoService {
						public static class: java.lang.Class<android.support.wearable.complications.IProviderInfoService.Stub>;
						public constructor();
						public getProviderInfos(param0: android.content.ComponentName, param1: native.Array<number>): native.Array<android.support.wearable.complications.ComplicationProviderInfo>;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public static asInterface(param0: android.os.IBinder): android.support.wearable.complications.IProviderInfoService;
						public constructor(param0: string);
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.complications.IProviderInfoService {
							public static class: java.lang.Class<android.support.wearable.complications.IProviderInfoService.Stub.Proxy>;
							public getProviderInfos(param0: android.content.ComponentName, param1: native.Array<number>): native.Array<android.support.wearable.complications.ComplicationProviderInfo>;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ProviderChooserIntent {
					public static class: java.lang.Class<android.support.wearable.complications.ProviderChooserIntent>;
					public static ACTION_CHOOSE_PROVIDER: string;
					public static EXTRA_WATCH_FACE_COMPONENT_NAME: string;
					public static EXTRA_PENDING_INTENT: string;
					public static EXTRA_SUPPORTED_TYPES: string;
					public static EXTRA_COMPLICATION_ID: string;
					public static EXTRA_PROVIDER_INFO: string;
					public static startProviderChooserActivity(param0: android.content.Context, param1: android.content.ComponentName, param2: number, param3: native.Array<number>): void;
					public static createProviderChooserIntent(param0: android.content.ComponentName, param1: number, param2: native.Array<number>): android.content.Intent;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ProviderInfoRetriever {
					public static class: java.lang.Class<android.support.wearable.complications.ProviderInfoRetriever>;
					public static ACTION_GET_COMPLICATION_CONFIG: string;
					public constructor(param0: android.content.Context, param1: java.util.concurrent.Executor);
					public retrieveProviderInfo(param0: android.support.wearable.complications.ProviderInfoRetriever.OnProviderInfoReceivedCallback, param1: android.content.ComponentName, param2: native.Array<number>): void;
					public init(): void;
					public release(): void;
				}
				export module ProviderInfoRetriever {
					export abstract class OnProviderInfoReceivedCallback {
						public static class: java.lang.Class<android.support.wearable.complications.ProviderInfoRetriever.OnProviderInfoReceivedCallback>;
						public onProviderInfoReceived(param0: number, param1: android.support.wearable.complications.ComplicationProviderInfo): void;
						public constructor();
						public onRetrievalFailed(): void;
					}
					export class ProviderInfoServiceConnection {
						public static class: java.lang.Class<android.support.wearable.complications.ProviderInfoRetriever.ProviderInfoServiceConnection>;
						public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
						public onServiceDisconnected(param0: android.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class ProviderUpdateRequester {
					public static class: java.lang.Class<android.support.wearable.complications.ProviderUpdateRequester>;
					public static ACTION_REQUEST_UPDATE: string;
					public static ACTION_REQUEST_UPDATE_ALL: string;
					public static EXTRA_PENDING_INTENT: string;
					public static EXTRA_PROVIDER_COMPONENT: string;
					public static EXTRA_COMPLICATION_IDS: string;
					public requestUpdate(param0: native.Array<number>): void;
					public requestUpdateAll(): void;
					public constructor(param0: android.content.Context, param1: android.content.ComponentName);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class SystemProviders {
					public static class: java.lang.Class<android.support.wearable.complications.SystemProviders>;
					public static WATCH_BATTERY: number;
					public static DATE: number;
					public static TIME_AND_DATE: number;
					public static STEP_COUNT: number;
					public static WORLD_CLOCK: number;
					public static APP_SHORTCUT: number;
					public static UNREAD_NOTIFICATION_COUNT: number;
					public static ANDROID_PAY: number;
					public static NEXT_EVENT: number;
					public static RETAIL_STEP_COUNT: number;
					public static RETAIL_CHAT: number;
					public static SUNRISE_SUNSET: number;
					public static DAY_OF_WEEK: number;
					public static FAVORITE_CONTACT: number;
					public static MOST_RECENT_APP: number;
					public static DAY_AND_DATE: number;
					public static unreadCountProvider(): android.content.ComponentName;
					public static retailChatProvider(): android.content.ComponentName;
					public static dateProvider(): android.content.ComponentName;
					public constructor();
					public static androidPayProvider(): android.content.ComponentName;
					public static batteryProvider(): android.content.ComponentName;
					public static nextEventProvider(): android.content.ComponentName;
					public static stepCountProvider(): android.content.ComponentName;
					public static appsProvider(): android.content.ComponentName;
					public static currentTimeProvider(): android.content.ComponentName;
					public static worldClockProvider(): android.content.ComponentName;
					public static retailStepCountProvider(): android.content.ComponentName;
				}
				export module SystemProviders {
					export class ProviderId {
						public static class: java.lang.Class<android.support.wearable.complications.SystemProviders.ProviderId>;
						/**
						 * Constructs a new instance of the android.support.wearable.complications.SystemProviders$ProviderId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class TimeDependentText {
					public static class: java.lang.Class<android.support.wearable.complications.TimeDependentText>;
					/**
					 * Constructs a new instance of the android.support.wearable.complications.TimeDependentText interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getText(param0: android.content.Context, param1: number): string;
						returnsSameText(param0: number, param1: number): boolean;
						getNextChangeTime(param0: number): number;
					});
					public constructor();
					public getNextChangeTime(param0: number): number;
					public getText(param0: android.content.Context, param1: number): string;
					public returnsSameText(param0: number, param1: number): boolean;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class TimeDifferenceText extends android.support.wearable.complications.TimeDependentText {
					public static class: java.lang.Class<android.support.wearable.complications.TimeDifferenceText>;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.TimeDifferenceText>;
					public getNextChangeTime(param0: number): number;
					public constructor(param0: android.os.Parcel);
					public constructor(param0: number, param1: number, param2: number, param3: boolean, param4: java.util.concurrent.TimeUnit);
					public getText(param0: android.content.Context, param1: number): string;
					public returnsSameText(param0: number, param1: number): boolean;
					public describeContents(): number;
					public getPrecision(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export class TimeFormatText extends android.support.wearable.complications.TimeDependentText {
					public static class: java.lang.Class<android.support.wearable.complications.TimeFormatText>;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.TimeFormatText>;
					public getNextChangeTime(param0: number): number;
					public getTimeZone(): java.util.TimeZone;
					public constructor(param0: android.os.Parcel);
					public getStyle(): number;
					public getText(param0: android.content.Context, param1: number): string;
					public returnsSameText(param0: number, param1: number): boolean;
					public describeContents(): number;
					public getPrecision(): number;
					public getFormatString(): string;
					public constructor(param0: string, param1: number, param2: java.util.TimeZone);
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export class ComplicationDrawable {
						public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationDrawable>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.rendering.ComplicationDrawable>;
						public static BORDER_STYLE_NONE: number;
						public static BORDER_STYLE_SOLID: number;
						public static BORDER_STYLE_DASHED: number;
						public setBorderDashGapActive(param0: number): void;
						public getHighlightDuration(): number;
						public setInAmbientMode(param0: boolean): void;
						public setBorderStyleAmbient(param0: number): void;
						public onTap(param0: number, param1: number): boolean;
						public setTextTypefaceAmbient(param0: android.graphics.Typeface): void;
						public setTextColorAmbient(param0: number): void;
						public setBorderRadiusAmbient(param0: number): void;
						public setTitleColorAmbient(param0: number): void;
						public constructor(param0: android.content.Context);
						public onBoundsChange(param0: android.graphics.Rect): void;
						public setHighlightDuration(param0: number): void;
						public setComplicationData(param0: android.support.wearable.complications.ComplicationData): void;
						public setCurrentTimeMillis(param0: number): void;
						public isRangedValueProgressHidden(): boolean;
						public setBorderColorAmbient(param0: number): void;
						public setTitleSizeActive(param0: number): void;
						public setContext(param0: android.content.Context): void;
						public draw(param0: android.graphics.Canvas): void;
						public setBorderColorActive(param0: number): void;
						public setBackgroundDrawableAmbient(param0: android.graphics.drawable.Drawable): void;
						public constructor();
						public setIconColorActive(param0: number): void;
						public setBorderWidthActive(param0: number): void;
						public setRangedValueSecondaryColorAmbient(param0: number): void;
						public setBorderDashGapAmbient(param0: number): void;
						public setBackgroundDrawableActive(param0: android.graphics.drawable.Drawable): void;
						public setAlpha(param0: number): void;
						public setRangedValueRingWidthActive(param0: number): void;
						public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
						public setTitleSizeAmbient(param0: number): void;
						public onTap(param0: number, param1: number, param2: number): boolean;
						public setBackgroundColorAmbient(param0: number): void;
						public setBorderStyleActive(param0: number): void;
						public isHighlighted(): boolean;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public setNoDataText(param0: string): void;
						public setIconColorAmbient(param0: number): void;
						public setLowBitAmbient(param0: boolean): void;
						public setRangedValueSecondaryColorActive(param0: number): void;
						public setImageColorFilterActive(param0: android.graphics.ColorFilter): void;
						public setBorderWidthAmbient(param0: number): void;
						public setImageColorFilterAmbient(param0: android.graphics.ColorFilter): void;
						public setBurnInProtection(param0: boolean): void;
						public setBorderDashWidthActive(param0: number): void;
						public setTextSizeAmbient(param0: number): void;
						public setTextColorActive(param0: number): void;
						public setBorderDashWidthAmbient(param0: number): void;
						public setRangedValuePrimaryColorActive(param0: number): void;
						public describeContents(): number;
						public setTitleColorActive(param0: number): void;
						public setTextTypefaceActive(param0: android.graphics.Typeface): void;
						public setBorderRadiusActive(param0: number): void;
						public setTitleTypefaceActive(param0: android.graphics.Typeface): void;
						public constructor(param0: android.support.wearable.complications.rendering.ComplicationDrawable);
						public setHighlightColorActive(param0: number): void;
						public setTitleTypefaceAmbient(param0: android.graphics.Typeface): void;
						public getOpacity(): number;
						public setIsHighlighted(param0: boolean): void;
						public setRangedValueProgressHidden(param0: boolean): void;
						public setRangedValueRingWidthAmbient(param0: number): void;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public setRangedValuePrimaryColorAmbient(param0: number): void;
						public setBackgroundColorActive(param0: number): void;
						public setTextSizeActive(param0: number): void;
						public draw(param0: android.graphics.Canvas, param1: number): void;
						public setHighlightColorAmbient(param0: number): void;
					}
					export module ComplicationDrawable {
						export class BorderStyle {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationDrawable.BorderStyle>;
							/**
							 * Constructs a new instance of the android.support.wearable.complications.rendering.ComplicationDrawable$BorderStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export class ComplicationRenderer {
						public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationRenderer>;
						public setRangedValueProgressHidden(param0: boolean): void;
						public setOnInvalidateListener(param0: android.support.wearable.complications.rendering.ComplicationRenderer.OnInvalidateListener): void;
						public setComplicationData(param0: android.support.wearable.complications.ComplicationData): void;
						public updateStyle(param0: android.support.wearable.complications.rendering.ComplicationStyle, param1: android.support.wearable.complications.rendering.ComplicationStyle): void;
						public setNoDataText(param0: string): void;
						public constructor(param0: android.content.Context, param1: android.support.wearable.complications.rendering.ComplicationStyle, param2: android.support.wearable.complications.rendering.ComplicationStyle);
						public draw(param0: android.graphics.Canvas, param1: number, param2: boolean, param3: boolean, param4: boolean, param5: boolean): void;
						public setBounds(param0: android.graphics.Rect): boolean;
					}
					export module ComplicationRenderer {
						export class OnInvalidateListener {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationRenderer.OnInvalidateListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.complications.rendering.ComplicationRenderer$OnInvalidateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInvalidate(): void;
							});
							public constructor();
							public onInvalidate(): void;
						}
						export class PaintSet {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationRenderer.PaintSet>;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export class ComplicationStyle {
						public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationStyle>;
						public getBackgroundColor(): number;
						public getHighlightColor(): number;
						public getBorderWidth(): number;
						public getBackgroundDrawable(): android.graphics.drawable.Drawable;
						public getTitleSize(): number;
						public getTextColor(): number;
						public getColorFilter(): android.graphics.ColorFilter;
						public getBorderDashGap(): number;
						public getTextSize(): number;
						public getBorderColor(): number;
						public getBorderRadius(): number;
						public getRangedValuePrimaryColor(): number;
						public getTitleColor(): number;
						public getTextTypeface(): android.graphics.Typeface;
						public getTitleTypeface(): android.graphics.Typeface;
						public getRangedValueRingWidth(): number;
						public getRangedValueSecondaryColor(): number;
						public getIconColor(): number;
						public getBorderStyle(): number;
						public getBorderDashWidth(): number;
					}
					export module ComplicationStyle {
						export class Builder {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.ComplicationStyle.Builder>;
							public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.complications.rendering.ComplicationStyle.Builder>;
							public setBackgroundColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setRangedValueSecondaryColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setTitleColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setRangedValuePrimaryColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setBorderStyle(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setBorderDashGap(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public constructor(param0: android.support.wearable.complications.rendering.ComplicationStyle.Builder);
							public setColorFilter(param0: android.graphics.ColorFilter): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public constructor(param0: android.support.wearable.complications.rendering.ComplicationStyle);
							public setBorderColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setHighlightColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public describeContents(): number;
							public setRangedValueRingWidth(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setTextSize(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setIconColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setBorderRadius(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public constructor();
							public setTitleSize(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setTextColor(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setBorderWidth(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public setBorderDashWidth(param0: number): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setTextTypeface(param0: android.graphics.Typeface): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public setTitleTypeface(param0: android.graphics.Typeface): android.support.wearable.complications.rendering.ComplicationStyle.Builder;
							public build(): android.support.wearable.complications.rendering.ComplicationStyle;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export class EmojiHelper {
						public static class: java.lang.Class<android.support.wearable.complications.rendering.EmojiHelper>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export class RoundedDrawable {
						public static class: java.lang.Class<android.support.wearable.complications.rendering.RoundedDrawable>;
						public draw(param0: android.graphics.Canvas): void;
						public constructor();
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public onBoundsChange(param0: android.graphics.Rect): void;
						public setRadius(param0: number): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export class TextRenderer {
						public static class: java.lang.Class<android.support.wearable.complications.rendering.TextRenderer>;
						public constructor();
						public setInAmbientMode(param0: boolean): void;
						public draw(param0: android.graphics.Canvas, param1: android.graphics.Rect): void;
						public setEllipsize(param0: android.text.TextUtils.TruncateAt): void;
						public setMaxLines(param0: number): void;
						public isLtr(): boolean;
						public setText(param0: string): void;
						public requestUpdateLayout(): void;
						public hasText(): boolean;
						public setMinimumCharactersShown(param0: number): void;
						public setRelativePadding(param0: number, param1: number, param2: number, param3: number): void;
						public setGravity(param0: number): void;
						public setPaint(param0: android.text.TextPaint): void;
						public setAlignment(param0: android.text.Layout.Alignment): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class IconLayoutHelper extends android.support.wearable.complications.rendering.utils.LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.IconLayoutHelper>;
							public constructor();
							public getIconBounds(param0: android.graphics.Rect): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class LargeImageLayoutHelper extends android.support.wearable.complications.rendering.utils.LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.LargeImageLayoutHelper>;
							public constructor();
							public getLargeImageBounds(param0: android.graphics.Rect): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.LayoutHelper>;
							public constructor();
							public getShortTitleAlignment(): android.text.Layout.Alignment;
							public getShortTextBounds(param0: android.graphics.Rect): void;
							public getShortTextAlignment(): android.text.Layout.Alignment;
							public getShortTitleBounds(param0: android.graphics.Rect): void;
							public getShortTitleGravity(): number;
							public getLargeImageBounds(param0: android.graphics.Rect): void;
							public getBounds(param0: android.graphics.Rect): void;
							public getComplicationData(): android.support.wearable.complications.ComplicationData;
							public getIconBounds(param0: android.graphics.Rect): void;
							public getRangedValueBounds(param0: android.graphics.Rect): void;
							public getLongTextBounds(param0: android.graphics.Rect): void;
							public getLongTitleGravity(): number;
							public getLongTextGravity(): number;
							public update(param0: number, param1: number, param2: android.support.wearable.complications.ComplicationData): void;
							public getLongTitleBounds(param0: android.graphics.Rect): void;
							public getLongTitleAlignment(): android.text.Layout.Alignment;
							public setComplicationData(param0: android.support.wearable.complications.ComplicationData): void;
							public getSmallImageBounds(param0: android.graphics.Rect): void;
							public setWidth(param0: number): void;
							public setHeight(param0: number): void;
							public getShortTextGravity(): number;
							public getLongTextAlignment(): android.text.Layout.Alignment;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class LayoutUtils {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.LayoutUtils>;
							public constructor();
							public static getLeftPart(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
							public static getRightPart(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
							public static isWideRectangle(param0: android.graphics.Rect): boolean;
							public static getInnerBounds(param0: android.graphics.Rect, param1: android.graphics.Rect, param2: number): void;
							public static getBottomHalf(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
							public static getCentralSquare(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
							public static getTopHalf(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
							public static fitSquareToBounds(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
							public static scaledAroundCenter(param0: android.graphics.Rect, param1: android.graphics.Rect, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class LongTextLayoutHelper extends android.support.wearable.complications.rendering.utils.LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.LongTextLayoutHelper>;
							public constructor();
							public getIconBounds(param0: android.graphics.Rect): void;
							public getLongTextBounds(param0: android.graphics.Rect): void;
							public getLongTitleGravity(): number;
							public getLongTextGravity(): number;
							public getLongTitleBounds(param0: android.graphics.Rect): void;
							public getLongTitleAlignment(): android.text.Layout.Alignment;
							public getSmallImageBounds(param0: android.graphics.Rect): void;
							public getLongTextAlignment(): android.text.Layout.Alignment;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class RangedValueLayoutHelper extends android.support.wearable.complications.rendering.utils.LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.RangedValueLayoutHelper>;
							public constructor();
							public getRangedValueBounds(param0: android.graphics.Rect): void;
							public getIconBounds(param0: android.graphics.Rect): void;
							public getShortTitleAlignment(): android.text.Layout.Alignment;
							public getShortTextBounds(param0: android.graphics.Rect): void;
							public setComplicationData(param0: android.support.wearable.complications.ComplicationData): void;
							public getShortTextAlignment(): android.text.Layout.Alignment;
							public setWidth(param0: number): void;
							public setHeight(param0: number): void;
							public getShortTitleBounds(param0: android.graphics.Rect): void;
							public getShortTitleGravity(): number;
							public getShortTextGravity(): number;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class ShortTextLayoutHelper extends android.support.wearable.complications.rendering.utils.LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.ShortTextLayoutHelper>;
							public constructor();
							public getIconBounds(param0: android.graphics.Rect): void;
							public getShortTitleAlignment(): android.text.Layout.Alignment;
							public getShortTextBounds(param0: android.graphics.Rect): void;
							public getShortTextAlignment(): android.text.Layout.Alignment;
							public getShortTitleBounds(param0: android.graphics.Rect): void;
							public getShortTitleGravity(): number;
							public getShortTextGravity(): number;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module complications {
				export module rendering {
					export module utils {
						export class SmallImageLayoutHelper extends android.support.wearable.complications.rendering.utils.LayoutHelper {
							public static class: java.lang.Class<android.support.wearable.complications.rendering.utils.SmallImageLayoutHelper>;
							public constructor();
							public getSmallImageBounds(param0: android.graphics.Rect): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module display {
				export class WearableDisplay {
					public static class: java.lang.Class<android.support.wearable.display.WearableDisplay>;
					public static getObstruction(): android.graphics.RectF;
					public constructor();
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module input {
				export class RemoteInputConstants {
					public static class: java.lang.Class<android.support.wearable.input.RemoteInputConstants>;
					public static EXTRA_DISALLOW_EMOJI: string;
					public static EXTRA_INPUT_ACTION_TYPE: string;
					public static INPUT_ACTION_TYPE_SEND: number;
					public static INPUT_ACTION_TYPE_SEARCH: number;
					public static INPUT_ACTION_TYPE_DONE: number;
					public static INPUT_ACTION_TYPE_GO: number;
					public constructor();
				}
				export module RemoteInputConstants {
					export class InputActionType {
						public static class: java.lang.Class<android.support.wearable.input.RemoteInputConstants.InputActionType>;
						/**
						 * Constructs a new instance of the android.support.wearable.input.RemoteInputConstants$InputActionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module input {
				export class RemoteInputIntent {
					public static class: java.lang.Class<android.support.wearable.input.RemoteInputIntent>;
					public static ACTION_REMOTE_INPUT: string;
					public static EXTRA_REMOTE_INPUTS: string;
					public static EXTRA_SKIP_CONFIRMATION_UI: string;
					public static EXTRA_TITLE: string;
					public static EXTRA_CANCEL_LABEL: string;
					public static EXTRA_CONFIRM_LABEL: string;
					public static EXTRA_IN_PROGRESS_LABEL: string;
					public static EXTRA_SMART_REPLY_CONTEXT: string;
					public constructor();
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module input {
				export class RotaryEncoder {
					public static class: java.lang.Class<android.support.wearable.input.RotaryEncoder>;
					public static getRotaryAxisValue(param0: android.view.MotionEvent): number;
					public static isFromRotaryEncoder(param0: android.view.MotionEvent): boolean;
					public static getScaledScrollFactor(param0: android.content.Context): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module input {
				export class WearableButtons {
					public static class: java.lang.Class<android.support.wearable.input.WearableButtons>;
					public static getButtonIcon(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
					public static getButtonLabel(param0: android.content.Context, param1: number): string;
					public static getButtonCount(param0: android.content.Context): number;
					public static getButtonInfo(param0: android.content.Context, param1: number): android.support.wearable.input.WearableButtons.ButtonInfo;
				}
				export module WearableButtons {
					export class ButtonInfo {
						public static class: java.lang.Class<android.support.wearable.input.WearableButtons.ButtonInfo>;
						public getKeycode(): number;
						public getX(): number;
						public getY(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export class SharedLibraryVersion {
					public static class: java.lang.Class<android.support.wearable.internal.SharedLibraryVersion>;
					public static version(): number;
					public static verifySharedLibraryPresent(): void;
				}
				export module SharedLibraryVersion {
					export class PresenceHolder {
						public static class: java.lang.Class<android.support.wearable.internal.SharedLibraryVersion.PresenceHolder>;
					}
					export class VersionHolder {
						public static class: java.lang.Class<android.support.wearable.internal.SharedLibraryVersion.VersionHolder>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module aidl {
					export abstract class BaseProxy {
						public static class: java.lang.Class<android.support.wearable.internal.aidl.BaseProxy>;
						public obtainAndWriteInterfaceToken(): android.os.Parcel;
						public transactAndReadException(param0: number, param1: android.os.Parcel): android.os.Parcel;
						public transactAndReadExceptionReturnVoid(param0: number, param1: android.os.Parcel): void;
						public asBinder(): android.os.IBinder;
						public transactOneway(param0: number, param1: android.os.Parcel): void;
						public constructor(param0: android.os.IBinder, param1: string);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module aidl {
					export abstract class BaseStub {
						public static class: java.lang.Class<android.support.wearable.internal.aidl.BaseStub>;
						public asBinder(): android.os.IBinder;
						public routeToSuperOrEnforceInterface(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module aidl {
					export class Codecs {
						public static class: java.lang.Class<android.support.wearable.internal.aidl.Codecs>;
						public static readList(param0: android.os.Parcel, param1: java.util.List<any>): void;
						public static writeBoolean(param0: android.os.Parcel, param1: boolean): void;
						public static createParcelable(param0: android.os.Parcel, param1: android.os.Parcelable.Creator): android.os.Parcelable;
						public static writeCharSequenceAsReturnValue(param0: android.os.Parcel, param1: string): void;
						public static writeParcelable(param0: android.os.Parcel, param1: android.os.Parcelable): void;
						public static createCharSequence(param0: android.os.Parcel): string;
						public static writeCharSequence(param0: android.os.Parcel, param1: string): void;
						public static writeParcelableAsReturnValue(param0: android.os.Parcel, param1: android.os.Parcelable): void;
						public static readMap(param0: android.os.Parcel, param1: java.util.Map<any,any>): void;
						public static createBoolean(param0: android.os.Parcel): boolean;
						public static createList(param0: android.os.Parcel): java.util.ArrayList;
						public static createMap(param0: android.os.Parcel): java.util.HashMap;
						public static writeStrongBinder(param0: android.os.Parcel, param1: android.os.IInterface): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module aidl {
					export class TransactionInterceptor {
						public static class: java.lang.Class<android.support.wearable.internal.aidl.TransactionInterceptor>;
						/**
						 * Constructs a new instance of the android.support.wearable.internal.aidl.TransactionInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							interceptTransaction(param0: android.support.wearable.internal.aidl.BaseStub, param1: number, param2: android.os.Parcel, param3: android.os.Parcel, param4: number): boolean;
						});
						public constructor();
						public interceptTransaction(param0: android.support.wearable.internal.aidl.BaseStub, param1: number, param2: android.os.Parcel, param3: android.os.Parcel, param4: number): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export class SwipeDismissLayout {
						public static class: java.lang.Class<android.support.wearable.internal.view.SwipeDismissLayout>;
						public static DEFAULT_DISMISS_DRAG_WIDTH_RATIO: number;
						public setDismissMinDragWidthRatio(param0: number): void;
						public setOnDismissedListener(param0: android.support.wearable.internal.view.SwipeDismissLayout.OnDismissedListener): void;
						public cancel(): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public setSwipeable(param0: boolean): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public setOnPreSwipeListener(param0: android.support.wearable.internal.view.SwipeDismissLayout.OnPreSwipeListener): void;
						public setOnSwipeProgressChangedListener(param0: android.support.wearable.internal.view.SwipeDismissLayout.OnSwipeProgressChangedListener): void;
						public isSwipeable(): boolean;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public canScroll(param0: android.view.View, param1: boolean, param2: number, param3: number, param4: number): boolean;
						public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
						public canScrollHorizontally(param0: number): boolean;
					}
					export module SwipeDismissLayout {
						export class OnDismissedListener {
							public static class: java.lang.Class<android.support.wearable.internal.view.SwipeDismissLayout.OnDismissedListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.internal.view.SwipeDismissLayout$OnDismissedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDismissed(param0: android.support.wearable.internal.view.SwipeDismissLayout): void;
							});
							public constructor();
							public onDismissed(param0: android.support.wearable.internal.view.SwipeDismissLayout): void;
						}
						export class OnPreSwipeListener {
							public static class: java.lang.Class<android.support.wearable.internal.view.SwipeDismissLayout.OnPreSwipeListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.internal.view.SwipeDismissLayout$OnPreSwipeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPreSwipe(param0: number, param1: number): boolean;
							});
							public constructor();
							public onPreSwipe(param0: number, param1: number): boolean;
						}
						export class OnSwipeProgressChangedListener {
							public static class: java.lang.Class<android.support.wearable.internal.view.SwipeDismissLayout.OnSwipeProgressChangedListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.internal.view.SwipeDismissLayout$OnSwipeProgressChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSwipeProgressChanged(param0: android.support.wearable.internal.view.SwipeDismissLayout, param1: number, param2: number): void;
								onSwipeCancelled(param0: android.support.wearable.internal.view.SwipeDismissLayout): void;
							});
							public constructor();
							public onSwipeProgressChanged(param0: android.support.wearable.internal.view.SwipeDismissLayout, param1: number, param2: number): void;
							public onSwipeCancelled(param0: android.support.wearable.internal.view.SwipeDismissLayout): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export class SwipeDismissPreferenceFragment {
						public static class: java.lang.Class<android.support.wearable.internal.view.SwipeDismissPreferenceFragment>;
						public onDismiss(): void;
						public constructor();
						public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
						public onSwipeCancelled(): void;
						public onSwipeStart(): void;
						public setFocusable(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export module drawer {
						export class MultiPagePresenter extends android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter {
							public static class: java.lang.Class<android.support.wearable.internal.view.drawer.MultiPagePresenter>;
							public onNewAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
							public onDrawerTapped(): boolean;
							public onSelected(param0: number): void;
							public onDataSetChanged(): void;
							public onSetCurrentItemRequested(param0: number, param1: boolean): void;
							public constructor(param0: android.support.wearable.view.drawer.WearableNavigationDrawer, param1: android.support.wearable.internal.view.drawer.MultiPagePresenter.Ui, param2: boolean);
						}
						export module MultiPagePresenter {
							export class Ui {
								public static class: java.lang.Class<android.support.wearable.internal.view.drawer.MultiPagePresenter.Ui>;
								/**
								 * Constructs a new instance of the android.support.wearable.internal.view.drawer.MultiPagePresenter$Ui interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									initialize(param0: android.support.wearable.view.drawer.WearableNavigationDrawer, param1: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
									notifyNavigationPagerAdapterDataChanged(): void;
									notifyPageIndicatorDataChanged(): void;
									setNavigationPagerAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
									setNavigationPagerSelectedItem(param0: number, param1: boolean): void;
								});
								public constructor();
								public setNavigationPagerAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
								public notifyPageIndicatorDataChanged(): void;
								public setNavigationPagerSelectedItem(param0: number, param1: boolean): void;
								public notifyNavigationPagerAdapterDataChanged(): void;
								public initialize(param0: android.support.wearable.view.drawer.WearableNavigationDrawer, param1: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export module drawer {
						export class MultiPageUi extends android.support.wearable.internal.view.drawer.MultiPagePresenter.Ui {
							public static class: java.lang.Class<android.support.wearable.internal.view.drawer.MultiPageUi>;
							public constructor();
							public setNavigationPagerSelectedItem(param0: number, param1: boolean): void;
							public initialize(param0: android.support.wearable.view.drawer.WearableNavigationDrawer, param1: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
							public setNavigationPagerAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
							public notifyPageIndicatorDataChanged(): void;
							public notifyNavigationPagerAdapterDataChanged(): void;
						}
						export module MultiPageUi {
							export class NavigationPagerAdapter {
								public static class: java.lang.Class<android.support.wearable.internal.view.drawer.MultiPageUi.NavigationPagerAdapter>;
								public instantiateItem(param0: android.view.ViewGroup, param1: number): any;
								public destroyItem(param0: android.view.ViewGroup, param1: number, param2: any): void;
								public getItemPosition(param0: any): number;
								public getCount(): number;
								public isViewFromObject(param0: android.view.View, param1: any): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export module drawer {
						export class SinglePagePresenter extends android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter {
							public static class: java.lang.Class<android.support.wearable.internal.view.drawer.SinglePagePresenter>;
							public onNewAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
							public onDrawerTapped(): boolean;
							public onSelected(param0: number): void;
							public constructor(param0: android.support.wearable.internal.view.drawer.SinglePagePresenter.Ui, param1: boolean);
							public onDataSetChanged(): void;
							public onSetCurrentItemRequested(param0: number, param1: boolean): void;
						}
						export module SinglePagePresenter {
							export class Ui {
								public static class: java.lang.Class<android.support.wearable.internal.view.drawer.SinglePagePresenter.Ui>;
								/**
								 * Constructs a new instance of the android.support.wearable.internal.view.drawer.SinglePagePresenter$Ui interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									setPresenter(param0: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
									initialize(param0: number): void;
									setIcon(param0: number, param1: android.graphics.drawable.Drawable, param2: string): void;
									setText(param0: string, param1: boolean): void;
									selectItem(param0: number): void;
									deselectItem(param0: number): void;
									closeDrawerDelayed(param0: number): void;
									peekDrawer(): void;
								});
								public constructor();
								public setPresenter(param0: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
								public closeDrawerDelayed(param0: number): void;
								public setIcon(param0: number, param1: android.graphics.drawable.Drawable, param2: string): void;
								public setText(param0: string, param1: boolean): void;
								public selectItem(param0: number): void;
								public deselectItem(param0: number): void;
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
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export module drawer {
						export class SinglePageUi extends android.support.wearable.internal.view.drawer.SinglePagePresenter.Ui {
							public static class: java.lang.Class<android.support.wearable.internal.view.drawer.SinglePageUi>;
							public initialize(param0: number): void;
							public constructor(param0: android.support.wearable.view.drawer.WearableNavigationDrawer);
							public closeDrawerDelayed(param0: number): void;
							public selectItem(param0: number): void;
							public setIcon(param0: number, param1: android.graphics.drawable.Drawable, param2: string): void;
							public peekDrawer(): void;
							public setText(param0: string, param1: boolean): void;
							public deselectItem(param0: number): void;
							public setPresenter(param0: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
						}
						export module SinglePageUi {
							export class OnSelectedClickHandler {
								public static class: java.lang.Class<android.support.wearable.internal.view.drawer.SinglePageUi.OnSelectedClickHandler>;
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
	export module support {
		export module wearable {
			export module internal {
				export module view {
					export module drawer {
						export class WearableNavigationDrawerPresenter {
							public static class: java.lang.Class<android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter>;
							/**
							 * Constructs a new instance of the android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataSetChanged(): void;
								onNewAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
								onSelected(param0: number): void;
								onSetCurrentItemRequested(param0: number, param1: boolean): void;
								onDrawerTapped(): boolean;
							});
							public constructor();
							public onNewAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
							public onDrawerTapped(): boolean;
							public onSelected(param0: number): void;
							public onDataSetChanged(): void;
							public onSetCurrentItemRequested(param0: number, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module media {
				export class MediaControlConstants {
					public static class: java.lang.Class<android.support.wearable.media.MediaControlConstants>;
					public static EXTRA_BACKGROUND_COLOR_FROM_THEME: string;
					public static EXTRA_CUSTOM_ACTION_SHOW_ON_WEAR: string;
					public static EXTRA_RESERVE_SLOT_SKIP_TO_NEXT: string;
					public static EXTRA_RESERVE_SLOT_SKIP_TO_PREVIOUS: string;
					public constructor();
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module notifications {
				export class BridgeModeConstants {
					public static class: java.lang.Class<android.support.wearable.notifications.BridgeModeConstants>;
					public static NOTIFICATION_BRIDGE_MODE_METADATA_NAME: string;
					public static NOTIFICATION_BRIDGE_MODE_BRIDGING: string;
					public static NOTIFICATION_BRIDGE_MODE_NO_BRIDGING: string;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module notifications {
				export class BridgingConfig {
					public static class: java.lang.Class<android.support.wearable.notifications.BridgingConfig>;
					public isBridgingEnabled(): boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public toBundle(param0: android.content.Context): android.os.Bundle;
					public static fromBundle(param0: android.os.Bundle): android.support.wearable.notifications.BridgingConfig;
					public getPackageName(): string;
					public getExcludedTags(): java.util.Set<string>;
					public hashCode(): number;
					public constructor(param0: string, param1: boolean, param2: java.util.Set<string>);
				}
				export module BridgingConfig {
					export class Builder {
						public static class: java.lang.Class<android.support.wearable.notifications.BridgingConfig.Builder>;
						public addExcludedTag(param0: string): android.support.wearable.notifications.BridgingConfig.Builder;
						public constructor(param0: android.content.Context, param1: boolean);
						public addExcludedTags(param0: java.util.Collection<string>): android.support.wearable.notifications.BridgingConfig.Builder;
						public build(): android.support.wearable.notifications.BridgingConfig;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module notifications {
				export class BridgingManager {
					public static class: java.lang.Class<android.support.wearable.notifications.BridgingManager>;
					public setConfig(param0: android.support.wearable.notifications.BridgingConfig): void;
					public static fromContext(param0: android.content.Context): android.support.wearable.notifications.BridgingManager;
				}
				export module BridgingManager {
					export class BridgingConfigServiceConnection {
						public static class: java.lang.Class<android.support.wearable.notifications.BridgingManager.BridgingConfigServiceConnection>;
						public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
						public onServiceDisconnected(param0: android.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module notifications {
				export class IBridgingManagerService {
					public static class: java.lang.Class<android.support.wearable.notifications.IBridgingManagerService>;
					/**
					 * Constructs a new instance of the android.support.wearable.notifications.IBridgingManagerService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setBridgingConfig(param0: android.os.Bundle): void;
					});
					public constructor();
					public setBridgingConfig(param0: android.os.Bundle): void;
				}
				export module IBridgingManagerService {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.notifications.IBridgingManagerService {
						public static class: java.lang.Class<android.support.wearable.notifications.IBridgingManagerService.Stub>;
						public static asInterface(param0: android.os.IBinder): android.support.wearable.notifications.IBridgingManagerService;
						public constructor();
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public setBridgingConfig(param0: android.os.Bundle): void;
						public constructor(param0: string);
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.notifications.IBridgingManagerService {
							public static class: java.lang.Class<android.support.wearable.notifications.IBridgingManagerService.Stub.Proxy>;
							public setBridgingConfig(param0: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module phone {
				export class PhoneDeviceType {
					public static class: java.lang.Class<android.support.wearable.phone.PhoneDeviceType>;
					public static DEVICE_TYPE_ERROR_UNKNOWN: number;
					public static DEVICE_TYPE_ANDROID: number;
					public static DEVICE_TYPE_IOS: number;
					public constructor();
					public static getPhoneDeviceType(param0: android.content.Context): number;
				}
				export module PhoneDeviceType {
					export class DeviceType {
						public static class: java.lang.Class<android.support.wearable.phone.PhoneDeviceType.DeviceType>;
						/**
						 * Constructs a new instance of the android.support.wearable.phone.PhoneDeviceType$DeviceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module playstore {
				export class OpenRemotePlayStoreIntent {
					public static class: java.lang.Class<android.support.wearable.playstore.OpenRemotePlayStoreIntent>;
					public static ACTION_OPEN_REMOTE_PLAY_STORE: string;
					public static EXTRA_PLAY_STORE_URL: string;
					public constructor();
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module preference {
				export class AcceptDenyDialogPreference {
					public static class: java.lang.Class<android.support.wearable.preference.AcceptDenyDialogPreference>;
					public setDialogMessage(param0: string): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setOnDialogClosedListener(param0: android.support.wearable.preference.AcceptDenyDialogPreference.OnDialogClosedListener): void;
					public onDismiss(param0: android.content.DialogInterface): void;
					public setDialogMessage(param0: number): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public setDialogIcon(param0: android.graphics.drawable.Drawable): void;
					public setDialogTitle(param0: string): void;
					public setDialogIcon(param0: number): void;
					public setDialogTitle(param0: number): void;
					public getDialogTitle(): string;
					public getDialog(): android.app.Dialog;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onPrepareDialog(param0: android.support.wearable.view.AcceptDenyDialog): void;
					public showDialog(param0: android.os.Bundle): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public getDialogMessage(): string;
					public onClick(): void;
					public onPrepareForRemoval(): void;
					public getDialogIcon(): android.graphics.drawable.Drawable;
					public getOnDialogClosedListener(): android.support.wearable.preference.AcceptDenyDialogPreference.OnDialogClosedListener;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module AcceptDenyDialogPreference {
					export class OnDialogClosedListener {
						public static class: java.lang.Class<android.support.wearable.preference.AcceptDenyDialogPreference.OnDialogClosedListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.preference.AcceptDenyDialogPreference$OnDialogClosedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDialogClosed(param0: boolean): void;
						});
						public constructor();
						public onDialogClosed(param0: boolean): void;
					}
					export class SavedState {
						public static class: java.lang.Class<android.support.wearable.preference.AcceptDenyDialogPreference.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.preference.AcceptDenyDialogPreference.SavedState>;
						public constructor(param0: android.os.Parcelable);
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module preference {
				export class AcceptDenySwitchPreference {
					public static class: java.lang.Class<android.support.wearable.preference.AcceptDenySwitchPreference>;
					public setDialogMessage(param0: string): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDismiss(param0: android.content.DialogInterface): void;
					public onDialogClosed(param0: boolean): void;
					public setDialogMessage(param0: number): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public setDialogIcon(param0: android.graphics.drawable.Drawable): void;
					public setDialogTitle(param0: string): void;
					public setDialogIcon(param0: number): void;
					public setDialogTitle(param0: number): void;
					public getDialogTitle(): string;
					public getDialog(): android.app.Dialog;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onPrepareDialog(param0: android.support.wearable.view.AcceptDenyDialog): void;
					public showDialog(param0: android.os.Bundle): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public getDialogMessage(): string;
					public onClick(): void;
					public onPrepareForRemoval(): void;
					public getDialogIcon(): android.graphics.drawable.Drawable;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module AcceptDenySwitchPreference {
					export class SavedState {
						public static class: java.lang.Class<android.support.wearable.preference.AcceptDenySwitchPreference.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.preference.AcceptDenySwitchPreference.SavedState>;
						public constructor(param0: android.os.Parcelable);
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module preference {
				export class PreferenceIconHelper {
					public static class: java.lang.Class<android.support.wearable.preference.PreferenceIconHelper>;
					public static wrapAllIconsInGroup(param0: android.preference.PreferenceGroup): void;
					public static wrapIcon(param0: android.preference.Preference): void;
					public static wrapIcon(param0: android.content.Context, param1: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module preference {
				export class WearableDialogPreference {
					public static class: java.lang.Class<android.support.wearable.preference.WearableDialogPreference>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDismiss(param0: android.content.DialogInterface): void;
					public getNeutralButtonText(): string;
					public setNeutralButtonText(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public getOnDialogClosedListener(): android.support.wearable.preference.WearableDialogPreference.OnDialogClosedListener;
					public setPositiveIcon(param0: android.graphics.drawable.Drawable): void;
					public setNeutralIcon(param0: android.graphics.drawable.Drawable): void;
					public getNegativeIcon(): android.graphics.drawable.Drawable;
					public onPrepareDialogBuilder(param0: android.app.AlertDialog.Builder): void;
					public setPositiveIcon(param0: number): void;
					public getPositiveIcon(): android.graphics.drawable.Drawable;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getNeutralIcon(): android.graphics.drawable.Drawable;
					public showDialog(param0: android.os.Bundle): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public setNeutralButtonText(param0: string): void;
					public setOnDialogClosedListener(param0: android.support.wearable.preference.WearableDialogPreference.OnDialogClosedListener): void;
					public setNeutralIcon(param0: number): void;
					public setNegativeIcon(param0: android.graphics.drawable.Drawable): void;
					public setNegativeIcon(param0: number): void;
				}
				export module WearableDialogPreference {
					export class OnDialogClosedListener {
						public static class: java.lang.Class<android.support.wearable.preference.WearableDialogPreference.OnDialogClosedListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.preference.WearableDialogPreference$OnDialogClosedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDialogClosed(param0: number): void;
						});
						public constructor();
						public onDialogClosed(param0: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module preference {
				export class WearablePreferenceActivity extends android.support.wearable.activity.WearableActivity {
					public static class: java.lang.Class<android.support.wearable.preference.WearablePreferenceActivity>;
					public onStart(): void;
					public onBuildStartFragmentIntent(param0: string, param1: android.os.Bundle, param2: number): android.content.Intent;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public startPreferenceFragment(param0: android.app.Fragment, param1: boolean): void;
					public onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module provider {
				export class WearableCalendarContract {
					public static class: java.lang.Class<android.support.wearable.provider.WearableCalendarContract>;
					public static AUTHORITY: string;
					public static CONTENT_URI: android.net.Uri;
					public constructor();
				}
				export module WearableCalendarContract {
					export class Attendees {
						public static class: java.lang.Class<android.support.wearable.provider.WearableCalendarContract.Attendees>;
						public static CONTENT_URI: android.net.Uri;
					}
					export class Instances {
						public static class: java.lang.Class<android.support.wearable.provider.WearableCalendarContract.Instances>;
						public static CONTENT_URI: android.net.Uri;
					}
					export class Reminders {
						public static class: java.lang.Class<android.support.wearable.provider.WearableCalendarContract.Reminders>;
						public static CONTENT_URI: android.net.Uri;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module standalone {
				export class StandaloneConstants {
					public static class: java.lang.Class<android.support.wearable.standalone.StandaloneConstants>;
					public static STANDALONE_METADATA_NAME: string;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class AcceptDenyDialog {
					public static class: java.lang.Class<android.support.wearable.view.AcceptDenyDialog>;
					public mIcon: android.widget.ImageView;
					public mTitle: android.widget.TextView;
					public mMessage: android.widget.TextView;
					public mButtonPanel: android.view.View;
					public mPositiveButton: android.widget.ImageButton;
					public mNegativeButton: android.widget.ImageButton;
					public mPositiveButtonListener: android.content.DialogInterface.OnClickListener;
					public mNegativeButtonListener: android.content.DialogInterface.OnClickListener;
					public mSpacer: android.view.View;
					public getButton(param0: number): android.widget.ImageButton;
					public setPositiveButton(param0: android.content.DialogInterface.OnClickListener): void;
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context);
					public setIcon(param0: number): void;
					public setTitle(param0: string): void;
					public setNegativeButton(param0: android.content.DialogInterface.OnClickListener): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setMessage(param0: string): void;
					public setButton(param0: number, param1: android.content.DialogInterface.OnClickListener): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class AcceptDenyDialogFragment {
					public static class: java.lang.Class<android.support.wearable.view.AcceptDenyDialogFragment>;
					public onDismiss(param0: android.content.DialogInterface): void;
					public constructor();
					public onPrepareDialog(param0: android.support.wearable.view.AcceptDenyDialog): void;
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public onCancel(param0: android.content.DialogInterface): void;
				}
				export module AcceptDenyDialogFragment {
					export class Builder {
						public static class: java.lang.Class<android.support.wearable.view.AcceptDenyDialogFragment.Builder>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.view.AcceptDenyDialogFragment.Builder>;
						public constructor();
						public describeContents(): number;
						public createDialog(param0: android.support.wearable.view.AcceptDenyDialog, param1: android.content.DialogInterface.OnClickListener): void;
						public setShowPositiveButton(param0: boolean): android.support.wearable.view.AcceptDenyDialogFragment.Builder;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public setMessage(param0: string): android.support.wearable.view.AcceptDenyDialogFragment.Builder;
						public setShowNegativeButton(param0: boolean): android.support.wearable.view.AcceptDenyDialogFragment.Builder;
						public setIconRes(param0: number): android.support.wearable.view.AcceptDenyDialogFragment.Builder;
						public setTitle(param0: string): android.support.wearable.view.AcceptDenyDialogFragment.Builder;
						public apply(param0: android.support.wearable.view.AcceptDenyDialogFragment): android.support.wearable.view.AcceptDenyDialogFragment;
						public build(): android.support.wearable.view.AcceptDenyDialogFragment;
					}
					export class OnCancelListener {
						public static class: java.lang.Class<android.support.wearable.view.AcceptDenyDialogFragment.OnCancelListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.AcceptDenyDialogFragment$OnCancelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCancel(param0: android.support.wearable.view.AcceptDenyDialogFragment): void;
						});
						public constructor();
						public onCancel(param0: android.support.wearable.view.AcceptDenyDialogFragment): void;
					}
					export class OnClickListener {
						public static class: java.lang.Class<android.support.wearable.view.AcceptDenyDialogFragment.OnClickListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.AcceptDenyDialogFragment$OnClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onClick(param0: android.support.wearable.view.AcceptDenyDialogFragment, param1: number): void;
						});
						public constructor();
						public onClick(param0: android.support.wearable.view.AcceptDenyDialogFragment, param1: number): void;
					}
					export class OnDismissListener {
						public static class: java.lang.Class<android.support.wearable.view.AcceptDenyDialogFragment.OnDismissListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.AcceptDenyDialogFragment$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDismiss(param0: android.support.wearable.view.AcceptDenyDialogFragment): void;
						});
						public constructor();
						public onDismiss(param0: android.support.wearable.view.AcceptDenyDialogFragment): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ActionChooserView {
					public static class: java.lang.Class<android.support.wearable.view.ActionChooserView>;
					public static OPTION_START: number;
					public static OPTION_END: number;
					public onDetachedFromWindow(): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public setEnabled(param0: boolean): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public addListener(param0: android.support.wearable.view.ActionChooserView.ActionChooserListener): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public performSelectOption(param0: number): void;
					public onAttachedToWindow(): void;
					public canScrollHorizontally(param0: number): boolean;
					public setOption(param0: number, param1: android.graphics.drawable.Drawable, param2: number): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public removeListener(param0: android.support.wearable.view.ActionChooserView.ActionChooserListener): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				}
				export module ActionChooserView {
					export class ActionChooserListener {
						public static class: java.lang.Class<android.support.wearable.view.ActionChooserView.ActionChooserListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.ActionChooserView$ActionChooserListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onOptionChosen(param0: number): void;
							onOptionProgress(param0: number): void;
						});
						public constructor();
						public onOptionProgress(param0: number): void;
						public onOptionChosen(param0: number): void;
					}
					export class Option {
						public static class: java.lang.Class<android.support.wearable.view.ActionChooserView.Option>;
						public color: number;
						public icon: android.graphics.drawable.Drawable;
						public constructor(param0: number, param1: android.graphics.drawable.Drawable);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ActionLabel {
					public static class: java.lang.Class<android.support.wearable.view.ActionLabel>;
					public getLineSpacingMultiplier(): number;
					public getGravity(): number;
					public onDraw(param0: android.graphics.Canvas): void;
					public setMinTextSize(param0: number): void;
					public setText(param0: string): void;
					public setMaxTextSize(param0: number): void;
					public getTypeface(): android.graphics.Typeface;
					public setTypeface(param0: android.graphics.Typeface): void;
					public setTextColor(param0: number): void;
					public onRtlPropertiesChanged(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setTypeface(param0: android.graphics.Typeface, param1: number): void;
					public setGravity(param0: number): void;
					public getLineSpacingExtra(): number;
					public setTextColor(param0: android.content.res.ColorStateList): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public getCurrentTextColor(): number;
					public setMaxTextSize(param0: number, param1: number): void;
					public getTextColors(): android.content.res.ColorStateList;
					public getMaxLines(): number;
					public constructor(param0: android.content.Context);
					public setMaxLines(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setMinTextSize(param0: number, param1: number): void;
					public drawableStateChanged(): void;
					public setLineSpacing(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ActionPage {
					public static class: java.lang.Class<android.support.wearable.view.ActionPage>;
					public static SCALE_MODE_CENTER: number;
					public static SCALE_MODE_FIT: number;
					public setEnabled(param0: boolean): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setStateListAnimator(param0: android.animation.StateListAnimator): void;
					public setColor(param0: number): void;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public onAttachedToWindow(): void;
					public setOnClickListener(param0: android.view.View.OnClickListener): void;
					public setText(param0: string): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setColor(param0: android.content.res.ColorStateList): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getLabel(): android.support.wearable.view.ActionLabel;
					public setImageScaleMode(param0: number): void;
					public setImageResource(param0: number): void;
					public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
					public getButton(): android.support.wearable.view.CircularButton;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class BackgroundController implements android.support.wearable.view.GridViewPager.OnPageChangeListener, android.support.wearable.view.GridViewPager.OnAdapterChangeListener, android.support.wearable.view.GridPagerAdapter.OnBackgroundChangeListener {
					public static class: java.lang.Class<android.support.wearable.view.BackgroundController>;
					public attachTo(param0: android.view.View): void;
					public onRowBackgroundChanged(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public constructor();
					public onPageScrollStateChanged(param0: number): void;
					public onPageSelected(param0: number, param1: number): void;
					public getBackground(): android.graphics.drawable.Drawable;
					public onDataSetChanged(): void;
					public onAdapterChanged(param0: android.support.wearable.view.GridPagerAdapter, param1: android.support.wearable.view.GridPagerAdapter): void;
					public onPageBackgroundChanged(param0: number, param1: number): void;
				}
				export module BackgroundController {
					export class Direction {
						public static class: java.lang.Class<android.support.wearable.view.BackgroundController.Direction>;
						public static LEFT: android.support.wearable.view.BackgroundController.Direction;
						public static UP: android.support.wearable.view.BackgroundController.Direction;
						public static RIGHT: android.support.wearable.view.BackgroundController.Direction;
						public static DOWN: android.support.wearable.view.BackgroundController.Direction;
						public static NONE: android.support.wearable.view.BackgroundController.Direction;
						public static valueOf(param0: string): android.support.wearable.view.BackgroundController.Direction;
						public static values(): native.Array<android.support.wearable.view.BackgroundController.Direction>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class BoxInsetLayout {
					public static class: java.lang.Class<android.support.wearable.view.BoxInsetLayout>;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public onAttachedToWindow(): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.wearable.view.BoxInsetLayout.LayoutParams;
					public getInsets(): android.graphics.Rect;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public isRound(): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setForeground(param0: android.graphics.drawable.Drawable): void;
				}
				export module BoxInsetLayout {
					export class LayoutParams {
						public static class: java.lang.Class<android.support.wearable.view.BoxInsetLayout.LayoutParams>;
						public static BOX_NONE: number;
						public static BOX_LEFT: number;
						public static BOX_TOP: number;
						public static BOX_RIGHT: number;
						public static BOX_BOTTOM: number;
						public static BOX_ALL: number;
						public boxedEdges: number;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.support.wearable.view.BoxInsetLayout.LayoutParams);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number, param3: number);
						public constructor(param0: android.widget.FrameLayout.LayoutParams);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CardFragment {
					public static class: java.lang.Class<android.support.wearable.view.CardFragment>;
					public static EXPAND_UP: number;
					public static EXPAND_DOWN: number;
					public static KEY_TITLE: string;
					public static KEY_TEXT: string;
					public static KEY_ICON_RESOURCE: string;
					public getContentPaddingRight(): number;
					public static create(param0: string, param1: string, param2: number): android.support.wearable.view.CardFragment;
					public setContentPaddingRight(param0: number): void;
					public getContentPaddingLeft(): number;
					public onDestroy(): void;
					public getContentPadding(): android.graphics.Rect;
					public scrollToTop(): void;
					public static create(param0: string, param1: string): android.support.wearable.view.CardFragment;
					public setCardMarginRight(param0: number): void;
					public setContentPadding(param0: number, param1: number, param2: number, param3: number): void;
					public setContentPaddingLeft(param0: number): void;
					public setContentPaddingTop(param0: number): void;
					public setExpansionEnabled(param0: boolean): void;
					public setCardMarginTop(param0: number): void;
					public constructor();
					public getContentPaddingBottom(): number;
					public setExpansionFactor(param0: number): void;
					public setCardGravity(param0: number): void;
					public setExpansionDirection(param0: number): void;
					public onActivityCreated(param0: android.os.Bundle): void;
					public setContentPaddingBottom(param0: number): void;
					public scrollToBottom(): void;
					public setCardMargins(param0: number, param1: number, param2: number, param3: number): void;
					public getContentPaddingTop(): number;
					public setCardMarginBottom(param0: number): void;
					public setCardMarginLeft(param0: number): void;
					public onCreateContentView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
					public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CardFrame {
					public static class: java.lang.Class<android.support.wearable.view.CardFrame>;
					public static NO_EXPANSION: number;
					public static EXPAND_UP: number;
					public static EXPAND_DOWN: number;
					public getContentPaddingRight(): number;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public getContentPaddingLeft(): number;
					public onAttachedToWindow(): void;
					public static getDefaultSize(param0: number, param1: number, param2: boolean): number;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public setContentPadding(param0: number, param1: number, param2: number, param3: number): void;
					public addView(param0: android.view.View, param1: number): void;
					public setExpansionEnabled(param0: boolean): void;
					public getContentPaddingBottom(): number;
					public setExpansionFactor(param0: number): void;
					public isExpansionEnabled(): boolean;
					public getExpansionDirection(): number;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public setExpansionDirection(param0: number): void;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public shouldDelayChildPressedState(): boolean;
					public constructor(param0: android.content.Context);
					public addView(param0: android.view.View): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getContentPaddingTop(): number;
					public getExpansionFactor(): number;
				}
				export module CardFrame {
					export class EdgeFade {
						public static class: java.lang.Class<android.support.wearable.view.CardFrame.EdgeFade>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CardScrollView {
					public static class: java.lang.Class<android.support.wearable.view.CardScrollView>;
					public getExpansionDirection(): number;
					public onMeasure(param0: number, param1: number): void;
					public setCardGravity(param0: number): void;
					public setExpansionDirection(param0: number): void;
					public getCardGravity(): number;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public onAttachedToWindow(): void;
					public canScrollHorizontally(param0: number): boolean;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public constructor(param0: android.content.Context);
					public setExpansionEnabled(param0: boolean): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getAvailableScrollDelta(param0: number): number;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onFinishInflate(): void;
					public setExpansionFactor(param0: number): void;
					public isExpansionEnabled(): boolean;
					public getExpansionFactor(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CircledImageView {
					public static class: java.lang.Class<android.support.wearable.view.CircledImageView>;
					public setImageTint(param0: number): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public getCircleRadius(): number;
					public getImageDrawable(): android.graphics.drawable.Drawable;
					public setCircleRadius(param0: number): void;
					public setImageHorizontalOffcenterPercentage(param0: number): void;
					public getCircleRadiusPressed(): number;
					public onVisibilityChanged(param0: android.view.View, param1: number): void;
					public getDefaultCircleColor(): number;
					public setCircleColorStateList(param0: android.content.res.ColorStateList): void;
					public setCircleColor(param0: number): void;
					public setShadowVisibility(param0: number): void;
					public onSetAlpha(param0: number): boolean;
					public setCircleRadiusPercent(param0: number): void;
					public getCircleColorStateList(): android.content.res.ColorStateList;
					public setImageResource(param0: number): void;
					public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					public getColorChangeAnimationDuration(): number;
					public showIndeterminateProgress(param0: boolean): void;
					public getCircleRadiusPressedPercent(): number;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setColorChangeAnimationDuration(param0: number): void;
					public getCircleRadiusPercent(): number;
					public setCircleRadiusPressedPercent(param0: number): void;
					public setImageCirclePercentage(param0: number): void;
					public getInitialCircleRadius(): number;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public setProgress(param0: number): void;
					public setCircleHidden(param0: boolean): void;
					public setCircleBorderCap(param0: android.graphics.Paint.Cap): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setPressed(param0: boolean): void;
					public setCircleRadiusPressed(param0: number): void;
					public onWindowVisibilityChanged(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setCircleBorderWidth(param0: number): void;
					public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
					public drawableStateChanged(): void;
					public setCircleBorderColor(param0: number): void;
				}
				export module CircledImageView {
					export class OvalShadowPainter {
						public static class: java.lang.Class<android.support.wearable.view.CircledImageView.OvalShadowPainter>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CircularButton {
					public static class: java.lang.Class<android.support.wearable.view.CircularButton>;
					public static SCALE_MODE_FIT: number;
					public static SCALE_MODE_CENTER: number;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setRippleColor(param0: number): void;
					public setColor(param0: number): void;
					public getImageDrawable(): android.graphics.drawable.Drawable;
					public onDraw(param0: android.graphics.Canvas): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getImageScaleMode(): number;
					public setColor(param0: android.content.res.ColorStateList): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setImageScaleMode(param0: number): void;
					public setImageResource(param0: number): void;
					public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
					public drawableStateChanged(): void;
					public setPressedTranslationZ(param0: number): void;
				}
				export module CircularButton {
					export class CircleOutlineProvider {
						public static class: java.lang.Class<android.support.wearable.view.CircularButton.CircleOutlineProvider>;
						public getOutline(param0: android.view.View, param1: any): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ConfirmationOverlay {
					public static class: java.lang.Class<android.support.wearable.view.ConfirmationOverlay>;
					public static DEFAULT_ANIMATION_DURATION_MS: number;
					public static SUCCESS_ANIMATION: number;
					public static FAILURE_ANIMATION: number;
					public static OPEN_ON_PHONE_ANIMATION: number;
					public setType(param0: number): android.support.wearable.view.ConfirmationOverlay;
					public setMessage(param0: string): android.support.wearable.view.ConfirmationOverlay;
					public constructor();
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public hide(): void;
					public showOn(param0: android.app.Activity): void;
					public setDuration(param0: number): android.support.wearable.view.ConfirmationOverlay;
					public setFinishedAnimationListener(param0: android.support.wearable.view.ConfirmationOverlay.FinishedAnimationListener): android.support.wearable.view.ConfirmationOverlay;
					public showAbove(param0: android.view.View): void;
				}
				export module ConfirmationOverlay {
					export class FinishedAnimationListener {
						public static class: java.lang.Class<android.support.wearable.view.ConfirmationOverlay.FinishedAnimationListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.ConfirmationOverlay$FinishedAnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationFinished(): void;
						});
						public constructor();
						public onAnimationFinished(): void;
					}
					export class OverlayType {
						public static class: java.lang.Class<android.support.wearable.view.ConfirmationOverlay.OverlayType>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.ConfirmationOverlay$OverlayType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CrossfadeDrawable {
					public static class: java.lang.Class<android.support.wearable.view.CrossfadeDrawable>;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDither(param0: boolean): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public getIntrinsicWidth(): number;
					public setBase(param0: android.graphics.drawable.Drawable): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public getChangingConfigurations(): number;
					public setFilterBitmap(param0: boolean): void;
					public constructor();
					public setFading(param0: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public setChangingConfigurations(param0: number): void;
					public getOpacity(): number;
					public getAlpha(): number;
					public onBoundsChange(param0: android.graphics.Rect): void;
					public jumpToCurrentState(): void;
					public getIntrinsicHeight(): number;
					public setAlpha(param0: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setProgress(param0: number): void;
					public clearColorFilter(): void;
					public getBase(): android.graphics.drawable.Drawable;
					public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
					public getFading(): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class CurvedChildLayoutManager extends android.support.wearable.view.WearableRecyclerView.ChildLayoutManager {
					public static class: java.lang.Class<android.support.wearable.view.CurvedChildLayoutManager>;
					public constructor(param0: android.content.Context);
					public updateChild(param0: android.view.View, param1: android.support.wearable.view.WearableRecyclerView): void;
					public adjustAnchorOffsetXY(param0: android.view.View, param1: native.Array<number>): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class DefaultOffsettingHelper extends android.support.wearable.view.WearableRecyclerView.OffsettingHelper {
					public static class: java.lang.Class<android.support.wearable.view.DefaultOffsettingHelper>;
					public constructor();
					public updateChild(param0: android.view.View, param1: android.support.wearable.view.WearableRecyclerView): void;
					public adjustAnchorOffsetXY(param0: android.view.View, param1: native.Array<number>): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class DelayedConfirmationView extends android.support.wearable.view.CircledImageView {
					public static class: java.lang.Class<android.support.wearable.view.DelayedConfirmationView>;
					public setListener(param0: android.support.wearable.view.DelayedConfirmationView.DelayedConfirmationListener): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public reset(): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setTotalTimeMs(param0: number): void;
					public setStartTimeMs(param0: number): void;
					public start(): void;
				}
				export module DelayedConfirmationView {
					export class DelayedConfirmationListener {
						public static class: java.lang.Class<android.support.wearable.view.DelayedConfirmationView.DelayedConfirmationListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.DelayedConfirmationView$DelayedConfirmationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTimerFinished(param0: android.view.View): void;
							onTimerSelected(param0: android.view.View): void;
						});
						public constructor();
						public onTimerFinished(param0: android.view.View): void;
						public onTimerSelected(param0: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class DismissOverlayView {
					public static class: java.lang.Class<android.support.wearable.view.DismissOverlayView>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public show(): void;
					public performClick(): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setIntroText(param0: string): void;
					public setIntroText(param0: number): void;
					public showIntroIfNecessary(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class DotsPageIndicator implements android.support.wearable.view.GridViewPager.OnPageChangeListener, android.support.wearable.view.GridViewPager.OnAdapterChangeListener {
					public static class: java.lang.Class<android.support.wearable.view.DotsPageIndicator>;
					public setDotShadowDx(param0: number): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public onPageScrolled(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public getDotColorSelected(): number;
					public getDotFadeOutDelay(): number;
					public onDataSetChanged(): void;
					public setOnPageChangeListener(param0: android.support.wearable.view.GridViewPager.OnPageChangeListener): void;
					public setDotRadiusSelected(param0: number): void;
					public getDotColor(): number;
					public setDotFadeOutDuration(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public onAdapterChanged(param0: android.support.wearable.view.GridPagerAdapter, param1: android.support.wearable.view.GridPagerAdapter): void;
					public getDotSpacing(): number;
					public getDotShadowColor(): number;
					public getDotRadius(): number;
					public onPageSelected(param0: number, param1: number): void;
					public setDotFadeOutDelay(param0: number): void;
					public setDotFadeWhenIdle(param0: boolean): void;
					public setDotShadowColor(param0: number): void;
					public setDotFadeInDuration(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public getDotShadowDy(): number;
					public setDotShadowDy(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setDotSpacing(param0: number): void;
					public getDotFadeWhenIdle(): boolean;
					public getDotFadeOutDuration(): number;
					public onPageScrollStateChanged(param0: number): void;
					public setDotShadowRadius(param0: number): void;
					public getDotRadiusSelected(): number;
					public setDotColor(param0: number): void;
					public setOnAdapterChangeListener(param0: android.support.wearable.view.GridViewPager.OnAdapterChangeListener): void;
					public constructor(param0: android.content.Context);
					public setPager(param0: android.support.wearable.view.GridViewPager): void;
					public getDotShadowDx(): number;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setDotColorSelected(param0: number): void;
					public getDotShadowRadius(): number;
					public setDotRadius(param0: number): void;
					public getDotFadeInDuration(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export abstract class FragmentGridPagerAdapter extends android.support.wearable.view.GridPagerAdapter {
					public static class: java.lang.Class<android.support.wearable.view.FragmentGridPagerAdapter>;
					public instantiateItem(param0: android.view.ViewGroup, param1: number, param2: number): any;
					public getFragment(param0: number, param1: number): android.app.Fragment;
					public findExistingFragment(param0: number, param1: number): android.app.Fragment;
					public instantiateItem(param0: android.view.ViewGroup, param1: number, param2: number): android.app.Fragment;
					public constructor(param0: android.app.FragmentManager);
					public restoreFragment(param0: android.app.Fragment, param1: android.app.FragmentTransaction): void;
					public applyItemPosition(param0: any, param1: android.graphics.Point): void;
					public isViewFromObject(param0: android.view.View, param1: any): boolean;
					public constructor();
					public getFragmentId(param0: number, param1: number): number;
					public destroyItem(param0: android.view.ViewGroup, param1: number, param2: number, param3: any): void;
					public finishUpdate(param0: android.view.ViewGroup): void;
					public getFragmentBackground(param0: number, param1: number): android.graphics.drawable.Drawable;
					public removeFragment(param0: android.app.Fragment, param1: android.app.FragmentTransaction): void;
					public getBackgroundForPage(param0: number, param1: number): android.graphics.drawable.Drawable;
				}
				export module FragmentGridPagerAdapter {
					export class BackgroundObserver extends android.support.wearable.view.GridPageOptions.BackgroundListener {
						public static class: java.lang.Class<android.support.wearable.view.FragmentGridPagerAdapter.BackgroundObserver>;
						public notifyBackgroundChanged(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class FullscreenFragmentHelper {
					public static class: java.lang.Class<android.support.wearable.view.FullscreenFragmentHelper>;
					public static TAG: string;
					public removeFragment(param0: android.app.Fragment): void;
					public showFragment(param0: android.app.Fragment): void;
					public constructor(param0: android.app.Activity, param1: number);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class Func {
					public static class: java.lang.Class<android.support.wearable.view.Func>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class GridPageOptions {
					public static class: java.lang.Class<android.support.wearable.view.GridPageOptions>;
					/**
					 * Constructs a new instance of the android.support.wearable.view.GridPageOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBackground(): android.graphics.drawable.Drawable;
						setBackgroundListener(param0: android.support.wearable.view.GridPageOptions.BackgroundListener): void;
					});
					public constructor();
					public setBackgroundListener(param0: android.support.wearable.view.GridPageOptions.BackgroundListener): void;
					public getBackground(): android.graphics.drawable.Drawable;
				}
				export module GridPageOptions {
					export class BackgroundListener {
						public static class: java.lang.Class<android.support.wearable.view.GridPageOptions.BackgroundListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.GridPageOptions$BackgroundListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							notifyBackgroundChanged(): void;
						});
						public constructor();
						public notifyBackgroundChanged(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export abstract class GridPagerAdapter {
					public static class: java.lang.Class<android.support.wearable.view.GridPagerAdapter>;
					public static BACKGROUND_NONE: android.graphics.drawable.Drawable;
					public static OPTION_DISABLE_PARALLAX: number;
					public static PAGE_DEFAULT_OPTIONS: number;
					public static POSITION_NONE: android.graphics.Point;
					public static POSITION_UNCHANGED: android.graphics.Point;
					public getColumnCount(param0: number): number;
					public notifyRowBackgroundChanged(param0: number): void;
					public instantiateItem(param0: android.view.ViewGroup, param1: number, param2: number): any;
					public saveState(): android.os.Parcelable;
					public startUpdate(param0: android.view.ViewGroup): void;
					public restoreState(param0: android.os.Parcelable, param1: java.lang.ClassLoader): void;
					public setCurrentColumnForRow(param0: number, param1: number): void;
					public notifyDataSetChanged(): void;
					public getRowCount(): number;
					public getCurrentColumnForRow(param0: number, param1: number): number;
					public applyItemPosition(param0: any, param1: android.graphics.Point): void;
					public isViewFromObject(param0: android.view.View, param1: any): boolean;
					public getBackgroundForRow(param0: number): android.graphics.drawable.Drawable;
					public getItemPosition(param0: any): android.graphics.Point;
					public constructor();
					public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
					public notifyPageBackgroundChanged(param0: number, param1: number): void;
					public destroyItem(param0: android.view.ViewGroup, param1: number, param2: number, param3: any): void;
					public finishUpdate(param0: android.view.ViewGroup): void;
					public getOptionsForPage(param0: number, param1: number): number;
					public registerDataSetObserver(param0: android.database.DataSetObserver): void;
					public getBackgroundForPage(param0: number, param1: number): android.graphics.drawable.Drawable;
				}
				export module GridPagerAdapter {
					export class NoOpDrawable {
						public static class: java.lang.Class<android.support.wearable.view.GridPagerAdapter.NoOpDrawable>;
						public draw(param0: android.graphics.Canvas): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
					}
					export class OnBackgroundChangeListener {
						public static class: java.lang.Class<android.support.wearable.view.GridPagerAdapter.OnBackgroundChangeListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.GridPagerAdapter$OnBackgroundChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPageBackgroundChanged(param0: number, param1: number): void;
							onRowBackgroundChanged(param0: number): void;
						});
						public constructor();
						public onPageBackgroundChanged(param0: number, param1: number): void;
						public onRowBackgroundChanged(param0: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class GridViewPager {
					public static class: java.lang.Class<android.support.wearable.view.GridViewPager>;
					public static SCROLL_STATE_IDLE: number;
					public static SCROLL_STATE_DRAGGING: number;
					public static SCROLL_STATE_SETTLING: number;
					public static SCROLL_STATE_CONTENT_SETTLING: number;
					public debug(param0: number): void;
					public setOnApplyWindowInsetsListener(param0: android.view.View.OnApplyWindowInsetsListener): void;
					public onPageScrolled(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public dispatchApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public onAttachedToWindow(): void;
					public setConsumeWindowInsets(param0: boolean): void;
					public setOnPageChangeListener(param0: android.support.wearable.view.GridViewPager.OnPageChangeListener): void;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public getPageColumnMargin(): number;
					public getCurrentItem(): android.graphics.Point;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public getAdapter(): android.support.wearable.view.GridPagerAdapter;
					public onDetachedFromWindow(): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setAdapter(param0: android.support.wearable.view.GridPagerAdapter): void;
					public getOffscreenPageCount(): number;
					public removeView(param0: android.view.View): void;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public setOffscreenPageCount(param0: number): void;
					public getPageRowMargin(): number;
					public canScrollHorizontally(param0: number): boolean;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public setPageMargins(param0: number, param1: number): void;
					public setOnAdapterChangeListener(param0: android.support.wearable.view.GridViewPager.OnAdapterChangeListener): void;
					public constructor(param0: android.content.Context);
					public setCurrentItem(param0: number, param1: number): void;
					public measureChild(param0: android.view.View, param1: android.support.wearable.view.GridViewPager.LayoutParams): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public computeScroll(): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public scrollTo(param0: number, param1: number): void;
					public setSlideAnimationDuration(param0: number): void;
					public debug(): void;
					public requestFitSystemWindows(): void;
					public canScrollVertically(param0: number): boolean;
					public setCurrentItem(param0: number, param1: number, param2: boolean): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
				}
				export module GridViewPager {
					export class DragFrictionInterpolator {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.DragFrictionInterpolator>;
						public constructor();
						public constructor(param0: number);
						public getInterpolation(param0: number): number;
					}
					export class ItemInfo {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.ItemInfo>;
						public toString(): string;
					}
					export class LayoutParams {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.LayoutParams>;
						public gravity: number;
						public needsMeasure: boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor();
					}
					export class OnAdapterChangeListener {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.OnAdapterChangeListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.GridViewPager$OnAdapterChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAdapterChanged(param0: android.support.wearable.view.GridPagerAdapter, param1: android.support.wearable.view.GridPagerAdapter): void;
							onDataSetChanged(): void;
						});
						public constructor();
						public onAdapterChanged(param0: android.support.wearable.view.GridPagerAdapter, param1: android.support.wearable.view.GridPagerAdapter): void;
						public onDataSetChanged(): void;
					}
					export class OnPageChangeListener {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.OnPageChangeListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.GridViewPager$OnPageChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPageScrolled(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
							onPageSelected(param0: number, param1: number): void;
							onPageScrollStateChanged(param0: number): void;
						});
						public constructor();
						public onPageScrolled(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public onPageSelected(param0: number, param1: number): void;
						public onPageScrollStateChanged(param0: number): void;
					}
					export class PagerObserver {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.PagerObserver>;
						public onChanged(): void;
						public onInvalidated(): void;
					}
					export class SavedState {
						public static class: java.lang.Class<android.support.wearable.view.GridViewPager.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.view.GridViewPager.SavedState>;
						public constructor(param0: android.os.Parcelable);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class Gusterpolator {
					public static class: java.lang.Class<android.support.wearable.view.Gusterpolator>;
					public static INSTANCE: android.support.wearable.view.Gusterpolator;
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ObservableScrollView {
					public static class: java.lang.Class<android.support.wearable.view.ObservableScrollView>;
					public setOnScrollListener(param0: android.support.wearable.view.ObservableScrollView.OnScrollListener): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
				}
				export module ObservableScrollView {
					export class OnScrollListener {
						public static class: java.lang.Class<android.support.wearable.view.ObservableScrollView.OnScrollListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.ObservableScrollView$OnScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onScroll(param0: number): void;
						});
						public constructor();
						public onScroll(param0: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ProgressDrawable {
					public static class: java.lang.Class<android.support.wearable.view.ProgressDrawable>;
					public stopAnimation(): void;
					public setRingColor(param0: number): void;
					public constructor();
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
	export module support {
		export module wearable {
			export module view {
				export class ProgressSpinner {
					public static class: java.lang.Class<android.support.wearable.view.ProgressSpinner>;
					public showWithAnimation(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public showWithAnimation(param0: number, param1: android.animation.AnimatorListenerAdapter): void;
					public setColors(param0: native.Array<number>): void;
					public constructor(param0: android.content.Context);
					public showWithAnimation(): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setVisibility(param0: number): void;
					public hideWithAnimation(): void;
					public hide(): void;
					public hideWithAnimation(param0: android.animation.AnimatorListenerAdapter): void;
				}
				export module ProgressSpinner {
					export class ProgressDrawable {
						public static class: java.lang.Class<android.support.wearable.view.ProgressSpinner.ProgressDrawable>;
						public draw(param0: android.graphics.Canvas): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class RecyclerViewMergeAdapter extends android.support.v7.widget.RecyclerView.Adapter<android.support.v7.widget.RecyclerView.ViewHolder> {
					public static class: java.lang.Class<android.support.wearable.view.RecyclerViewMergeAdapter>;
					public getAdapterForPosition(param0: number): android.support.v7.widget.RecyclerView.Adapter<any>;
					public onFailedToRecycleView(param0: android.support.v7.widget.RecyclerView.ViewHolder): boolean;
					public getParentPosition(param0: android.support.v7.widget.RecyclerView.Adapter, param1: number): number;
					public getAdapterPosition(param0: android.support.v7.widget.RecyclerView.Adapter<any>): number;
					public onViewAttachedToWindow(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public getChildPosition(param0: number): number;
					public setHasStableIds(param0: boolean): void;
					public onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public removeAdapter(param0: android.support.v7.widget.RecyclerView.Adapter<any>): void;
					public onAttachedToRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
					public removeAdapter(param0: number): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public moveAdapter(param0: number, param1: android.support.v7.widget.RecyclerView.Adapter<any>): void;
					public constructor();
					public onViewDetachedFromWindow(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					public getItemCount(): number;
					public getChildItemId(param0: number): number;
					public getItemViewType(param0: number): number;
					public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
					public getItemId(param0: number): number;
					public addAdapter(param0: number, param1: android.support.v7.widget.RecyclerView.Adapter<any>): void;
					public onDetachedFromRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
					public addAdapter(param0: android.support.v7.widget.RecyclerView.Adapter): void;
				}
				export module RecyclerViewMergeAdapter {
					export class AdapterHolder {
						public static class: java.lang.Class<android.support.wearable.view.RecyclerViewMergeAdapter.AdapterHolder>;
						public constructor(param0: number, param1: android.support.v7.widget.RecyclerView.Adapter);
					}
					export class ForwardingDataSetObserver {
						public static class: java.lang.Class<android.support.wearable.view.RecyclerViewMergeAdapter.ForwardingDataSetObserver>;
						public constructor(param0: android.support.wearable.view.RecyclerViewMergeAdapter, param1: android.support.wearable.view.RecyclerViewMergeAdapter.AdapterHolder);
						public onChanged(): void;
						public onItemRangeChanged(param0: number, param1: number): void;
						public onItemRangeInserted(param0: number, param1: number): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ResourcesUtil {
					public static class: java.lang.Class<android.support.wearable.view.ResourcesUtil>;
					public static getFractionOfScreenPx(param0: android.content.Context, param1: number, param2: number): number;
					public static getScreenHeightPx(param0: android.content.Context): number;
					public static getScreenWidthPx(param0: android.content.Context): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ScrollManager {
					public static class: java.lang.Class<android.support.wearable.view.ScrollManager>;
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
	export module support {
		export module wearable {
			export module view {
				export class SimpleAnimatorListener {
					public static class: java.lang.Class<android.support.wearable.view.SimpleAnimatorListener>;
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
	export module support {
		export module wearable {
			export module view {
				export class SwipeDismissFrameLayout extends android.support.wearable.internal.view.SwipeDismissLayout {
					public static class: java.lang.Class<android.support.wearable.view.SwipeDismissFrameLayout>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public removeCallback(param0: android.support.wearable.view.SwipeDismissFrameLayout.Callback): void;
					public reset(): void;
					public constructor(param0: android.content.Context);
					public isDismissEnabled(): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setDismissEnabled(param0: boolean): void;
					public addCallback(param0: android.support.wearable.view.SwipeDismissFrameLayout.Callback): void;
					public dismiss(param0: boolean): void;
				}
				export module SwipeDismissFrameLayout {
					export abstract class Callback {
						public static class: java.lang.Class<android.support.wearable.view.SwipeDismissFrameLayout.Callback>;
						public constructor();
						public onPreSwipeStart(param0: number, param1: number): boolean;
						public onDismissed(param0: android.support.wearable.view.SwipeDismissFrameLayout): void;
						public onSwipeCancelled(): void;
						public onSwipeStart(): void;
					}
					export class MyOnDismissedListener extends android.support.wearable.internal.view.SwipeDismissLayout.OnDismissedListener {
						public static class: java.lang.Class<android.support.wearable.view.SwipeDismissFrameLayout.MyOnDismissedListener>;
						public onDismissed(param0: android.support.wearable.internal.view.SwipeDismissLayout): void;
					}
					export class MyOnPreSwipeListener extends android.support.wearable.internal.view.SwipeDismissLayout.OnPreSwipeListener {
						public static class: java.lang.Class<android.support.wearable.view.SwipeDismissFrameLayout.MyOnPreSwipeListener>;
						public onPreSwipe(param0: number, param1: number): boolean;
					}
					export class MyOnSwipeProgressChangedListener extends android.support.wearable.internal.view.SwipeDismissLayout.OnSwipeProgressChangedListener {
						public static class: java.lang.Class<android.support.wearable.view.SwipeDismissFrameLayout.MyOnSwipeProgressChangedListener>;
						public onSwipeProgressChanged(param0: android.support.wearable.internal.view.SwipeDismissLayout, param1: number, param2: number): void;
						public onSwipeCancelled(param0: android.support.wearable.internal.view.SwipeDismissLayout): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class ViewportDrawable {
					public static class: java.lang.Class<android.support.wearable.view.ViewportDrawable>;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDither(param0: boolean): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setDrawable(param0: android.graphics.drawable.Drawable): void;
					public setHorizontalStops(param0: number): void;
					public getChangingConfigurations(): number;
					public setFilterBitmap(param0: boolean): void;
					public constructor();
					public setPosition(param0: number, param1: number): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public constructor(param0: android.graphics.drawable.Drawable);
					public setStops(param0: number, param1: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public setChangingConfigurations(param0: number): void;
					public getOpacity(): number;
					public getAlpha(): number;
					public onBoundsChange(param0: android.graphics.Rect): void;
					public setHorizontalPosition(param0: number): void;
					public setVerticalStops(param0: number): void;
					public jumpToCurrentState(): void;
					public setAlpha(param0: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setVerticalPosition(param0: number): void;
					public clearColorFilter(): void;
					public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class WatchViewStub {
					public static class: java.lang.Class<android.support.wearable.view.WatchViewStub>;
					public setRectLayout(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setRoundLayout(param0: number): void;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public onAttachedToWindow(): void;
					public setOnLayoutInflatedListener(param0: android.support.wearable.view.WatchViewStub.OnLayoutInflatedListener): void;
				}
				export module WatchViewStub {
					export class OnLayoutInflatedListener {
						public static class: java.lang.Class<android.support.wearable.view.WatchViewStub.OnLayoutInflatedListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.WatchViewStub$OnLayoutInflatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLayoutInflated(param0: android.support.wearable.view.WatchViewStub): void;
						});
						public constructor();
						public onLayoutInflated(param0: android.support.wearable.view.WatchViewStub): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class WearableDialogActivity extends android.support.wearable.activity.WearableActivity implements android.support.wearable.view.ObservableScrollView.OnScrollListener {
					public static class: java.lang.Class<android.support.wearable.view.WearableDialogActivity>;
					public onNeutralButtonClick(): void;
					public onApplyWindowInsets(param0: android.view.View, param1: android.view.WindowInsets): android.view.WindowInsets;
					public handleMessage(param0: android.os.Message): boolean;
					public getAlertTitle(): string;
					public getNeutralButtonText(): string;
					public getNeutralButtonDrawable(): android.graphics.drawable.Drawable;
					public onClick(param0: android.view.View): void;
					public onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public onNegativeButtonClick(): void;
					public onPositiveButtonClick(): void;
					public onScroll(param0: number): void;
					public getNegativeButtonText(): string;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public getPositiveButtonText(): string;
					public getMessage(): string;
					public getPositiveButtonDrawable(): android.graphics.drawable.Drawable;
					public setupLayout(): void;
					public getNegativeButtonDrawable(): android.graphics.drawable.Drawable;
					public onEnterAmbient(param0: android.os.Bundle): void;
					public onExitAmbient(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class WearableDialogHelper {
					public static class: java.lang.Class<android.support.wearable.view.WearableDialogHelper>;
					public getNegativeIcon(): android.graphics.drawable.Drawable;
					public setPositiveIcon(param0: android.graphics.drawable.Drawable): android.support.wearable.view.WearableDialogHelper;
					public getPositiveIcon(): android.graphics.drawable.Drawable;
					public constructor(param0: android.content.Context);
					public setNeutralIcon(param0: android.graphics.drawable.Drawable): android.support.wearable.view.WearableDialogHelper;
					public setNeutralIcon(param0: number): android.support.wearable.view.WearableDialogHelper;
					public getNeutralIcon(): android.graphics.drawable.Drawable;
					public setPositiveIcon(param0: number): android.support.wearable.view.WearableDialogHelper;
					public setNegativeIcon(param0: android.graphics.drawable.Drawable): android.support.wearable.view.WearableDialogHelper;
					public apply(param0: android.app.AlertDialog): void;
					public setNegativeIcon(param0: number): android.support.wearable.view.WearableDialogHelper;
					public constructor(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme);
				}
				export module WearableDialogHelper {
					export class DialogBuilder {
						public static class: java.lang.Class<android.support.wearable.view.WearableDialogHelper.DialogBuilder>;
						public constructor(param0: android.content.Context, param1: number);
						public setNegativeIcon(param0: number): android.support.wearable.view.WearableDialogHelper.DialogBuilder;
						public setPositiveIcon(param0: number): android.support.wearable.view.WearableDialogHelper.DialogBuilder;
						public setNeutralIcon(param0: number): android.support.wearable.view.WearableDialogHelper.DialogBuilder;
						public create(): android.app.AlertDialog;
						public getHelper(): android.support.wearable.view.WearableDialogHelper;
						public show(): android.app.AlertDialog;
						public setNegativeIcon(param0: android.graphics.drawable.Drawable): android.support.wearable.view.WearableDialogHelper.DialogBuilder;
						public setPositiveIcon(param0: android.graphics.drawable.Drawable): android.support.wearable.view.WearableDialogHelper.DialogBuilder;
						public constructor(param0: android.content.Context);
						public setNeutralIcon(param0: android.graphics.drawable.Drawable): android.support.wearable.view.WearableDialogHelper.DialogBuilder;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class WearableFrameLayout {
					public static class: java.lang.Class<android.support.wearable.view.WearableFrameLayout>;
					public setForegroundTintList(param0: android.content.res.ColorStateList): void;
					public getForegroundTintMode(): android.graphics.PorterDuff.Mode;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public onAttachedToWindow(): void;
					public getForeground(): android.graphics.drawable.Drawable;
					public jumpDrawablesToCurrentState(): void;
					public setForegroundGravity(param0: number): void;
					public setForeground(param0: android.graphics.drawable.Drawable): void;
					public draw(param0: android.graphics.Canvas): void;
					public getForegroundTintList(): android.content.res.ColorStateList;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.wearable.view.WearableFrameLayout.LayoutParams;
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public generateDefaultLayoutParams(): android.support.wearable.view.WearableFrameLayout.LayoutParams;
					public drawableHotspotChanged(param0: number, param1: number): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public setForegroundInPadding(param0: boolean): void;
					public getForegroundGravity(): number;
					public setMeasureAllChildren(param0: boolean): void;
					public shouldDelayChildPressedState(): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public setVisibility(param0: number): void;
					public setForegroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public drawableStateChanged(): void;
					public getMeasureAllChildren(): boolean;
				}
				export module WearableFrameLayout {
					export class LayoutParams {
						public static class: java.lang.Class<android.support.wearable.view.WearableFrameLayout.LayoutParams>;
						public gravityRound: number;
						public widthRound: number;
						public heightRound: number;
						public leftMarginRound: number;
						public topMarginRound: number;
						public rightMarginRound: number;
						public bottomMarginRound: number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
						public constructor(param0: android.support.wearable.view.WearableFrameLayout.LayoutParams);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class WearableListView {
					public static class: java.lang.Class<android.support.wearable.view.WearableListView>;
					public setEnableGestureNavigation(param0: boolean): void;
					public smoothScrollToPosition(param0: number, param1: android.support.v7.widget.RecyclerView.SmoothScroller): void;
					public removeOnScrollListener(param0: android.support.wearable.view.WearableListView.OnScrollListener): void;
					public setInitialOffset(param0: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public getBaseline(): number;
					public resetLayoutManager(): void;
					public onAttachedToWindow(): void;
					public getChildViewHolder(param0: android.view.View): android.support.wearable.view.WearableListView.ViewHolder;
					public addOnCentralPositionChangedListener(param0: android.support.wearable.view.WearableListView.OnCentralPositionChangedListener): void;
					public setGreedyTouchMode(param0: boolean): void;
					public isAtTop(): boolean;
					public animateToCenter(): void;
					public fling(param0: number, param1: number): boolean;
					public setAdapter(param0: android.support.v7.widget.RecyclerView.Adapter): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onDetachedFromWindow(): void;
					public isGestureNavigationEnabled(): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public removeOnCentralPositionChangedListener(param0: android.support.wearable.view.WearableListView.OnCentralPositionChangedListener): void;
					public setClickListener(param0: android.support.wearable.view.WearableListView.ClickListener): void;
					public getMaximizeSingleItem(): boolean;
					public animateToInitialPosition(param0: java.lang.Runnable): void;
					public setOverScrollListener(param0: android.support.wearable.view.WearableListView.OnOverScrollListener): void;
					public setMaximizeSingleItem(param0: boolean): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getCentralViewTop(): number;
					public addOnScrollListener(param0: android.support.wearable.view.WearableListView.OnScrollListener): void;
					public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
				}
				export module WearableListView {
					export abstract class Adapter extends android.support.v7.widget.RecyclerView.Adapter<android.support.wearable.view.WearableListView.ViewHolder> {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.Adapter>;
						public constructor();
					}
					export class ClickListener {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.ClickListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.WearableListView$ClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onClick(param0: android.support.wearable.view.WearableListView.ViewHolder): void;
							onTopEmptyRegionClick(): void;
						});
						public constructor();
						public onClick(param0: android.support.wearable.view.WearableListView.ViewHolder): void;
						public onTopEmptyRegionClick(): void;
					}
					export abstract class GenericAdapter<T>  extends android.support.v7.widget.RecyclerView.Adapter<any> {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.GenericAdapter<any>>;
						public constructor();
					}
					export class LayoutManager {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.LayoutManager>;
						public scrollToPosition(param0: number): void;
						public onAdapterChanged(param0: android.support.v7.widget.RecyclerView.Adapter, param1: android.support.v7.widget.RecyclerView.Adapter): void;
						public generateDefaultLayoutParams(): android.support.v7.widget.RecyclerView.LayoutParams;
						public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public clearCustomSmoothScroller(): void;
						public smoothScrollToPosition(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: number): void;
						public setCustomSmoothScroller(param0: android.support.v7.widget.RecyclerView.SmoothScroller): void;
						public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
						public getFirstPosition(): number;
						public canScrollVertically(): boolean;
						public getDefaultSmoothScroller(param0: android.support.v7.widget.RecyclerView): android.support.v7.widget.RecyclerView.SmoothScroller;
					}
					export class OnCenterProximityListener {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.OnCenterProximityListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.WearableListView$OnCenterProximityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCenterPosition(param0: boolean): void;
							onNonCenterPosition(param0: boolean): void;
						});
						public constructor();
						public onNonCenterPosition(param0: boolean): void;
						public onCenterPosition(param0: boolean): void;
					}
					export class OnCentralPositionChangedListener {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.OnCentralPositionChangedListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.WearableListView$OnCentralPositionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCentralPositionChanged(param0: number): void;
						});
						public constructor();
						public onCentralPositionChanged(param0: number): void;
					}
					export class OnChangeObserver {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.OnChangeObserver>;
						public setListView(param0: android.support.wearable.view.WearableListView): void;
						public onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
						public onChanged(): void;
						public setAdapter(param0: android.support.v7.widget.RecyclerView.Adapter): void;
					}
					export class OnOverScrollListener {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.OnOverScrollListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.WearableListView$OnOverScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onOverScroll(): void;
						});
						public constructor();
						public onOverScroll(): void;
					}
					export class OnScrollListener {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.OnScrollListener>;
						/**
						 * Constructs a new instance of the android.support.wearable.view.WearableListView$OnScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onScroll(param0: number): void;
							onAbsoluteScrollChange(param0: number): void;
							onScrollStateChanged(param0: number): void;
							onCentralPositionChanged(param0: number): void;
						});
						public constructor();
						public onScrollStateChanged(param0: number): void;
						public onScroll(param0: number): void;
						public onCentralPositionChanged(param0: number): void;
						public onAbsoluteScrollChange(param0: number): void;
					}
					export class SetScrollVerticallyProperty extends android.util.Property<android.support.wearable.view.WearableListView,java.lang.Integer> {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.SetScrollVerticallyProperty>;
						public constructor();
						public get(param0: android.support.wearable.view.WearableListView): java.lang.Integer;
						public set(param0: android.support.wearable.view.WearableListView, param1: java.lang.Integer): void;
					}
					export class SmoothScroller {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.SmoothScroller>;
						public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
						public calculateDtToFit(param0: number, param1: number, param2: number, param3: number, param4: number): number;
						public constructor(param0: android.content.Context, param1: android.support.wearable.view.WearableListView.LayoutManager);
						public calculateSpeedPerPixel(param0: android.util.DisplayMetrics): number;
						public onStart(): void;
					}
					export class ViewHolder {
						public static class: java.lang.Class<android.support.wearable.view.WearableListView.ViewHolder>;
						public constructor(param0: android.view.View);
						public onCenterProximity(param0: boolean, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export class WearableRecyclerView {
					public static class: java.lang.Class<android.support.wearable.view.WearableRecyclerView>;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onDetachedFromWindow(): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setScrollDegreesPerScreen(param0: number): void;
					public getBezelWidth(): number;
					public onAttachedToWindow(): void;
					public setCenterEdgeItems(param0: boolean): void;
					public setOffsettingHelper(param0: android.support.wearable.view.WearableRecyclerView.OffsettingHelper): void;
					public constructor(param0: android.content.Context);
					public getCenterEdgeItems(): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setCircularScrollingGestureEnabled(param0: boolean): void;
					public getScrollDegreesPerScreen(): number;
					public getOffsettingHelper(): android.support.wearable.view.WearableRecyclerView.OffsettingHelper;
					public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public isCircularScrollingGestureEnabled(): boolean;
					public setBezelWidth(param0: number): void;
					public clearOffsettingHelper(): void;
				}
				export module WearableRecyclerView {
					export abstract class ChildLayoutManager {
						public static class: java.lang.Class<android.support.wearable.view.WearableRecyclerView.ChildLayoutManager>;
						public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
						public constructor(param0: android.content.Context);
						public updateChild(param0: android.view.View, param1: android.support.wearable.view.WearableRecyclerView): void;
					}
					export abstract class OffsettingHelper {
						public static class: java.lang.Class<android.support.wearable.view.WearableRecyclerView.OffsettingHelper>;
						public constructor();
						public updateChild(param0: android.view.View, param1: android.support.wearable.view.WearableRecyclerView): void;
					}
					export class OffsettingLinearLayoutManager {
						public static class: java.lang.Class<android.support.wearable.view.WearableRecyclerView.OffsettingLinearLayoutManager>;
						public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
						public constructor(param0: android.support.wearable.view.WearableRecyclerView, param1: android.content.Context);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class FlingWatcher {
						public static class: java.lang.Class<android.support.wearable.view.drawer.FlingWatcher>;
						public start(param0: android.view.View): void;
						public constructor(param0: android.support.wearable.view.drawer.FlingWatcher.FlingListener);
					}
					export module FlingWatcher {
						export class FlingListener {
							public static class: java.lang.Class<android.support.wearable.view.drawer.FlingWatcher.FlingListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.view.drawer.FlingWatcher$FlingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFlingComplete(param0: android.view.View): void;
							});
							public constructor();
							public onFlingComplete(param0: android.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class PageIndicatorView {
						public static class: java.lang.Class<android.support.wearable.view.drawer.PageIndicatorView>;
						public getDotShadowRadius(): number;
						public getDotFadeOutDuration(): number;
						public getDotRadiusSelected(): number;
						public setPager(param0: android.support.v4.view.ViewPager): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public setDotColor(param0: number): void;
						public constructor(param0: android.content.Context);
						public onPageScrollStateChanged(param0: number): void;
						public getDotColorSelected(): number;
						public getDotFadeInDuration(): number;
						public setDotFadeOutDuration(param0: number, param1: java.util.concurrent.TimeUnit): void;
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
						public setPagerAdapter(param0: android.support.v4.view.PagerAdapter): void;
						public setDotFadeOutDelay(param0: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getDotColor(): number;
						public setDotFadeInDuration(param0: number, param1: java.util.concurrent.TimeUnit): void;
						public setDotRadius(param0: number): void;
						public onPageSelected(param0: number): void;
						public notifyDataSetChanged(): void;
						public onPageScrolled(param0: number, param1: number, param2: number): void;
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
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class ViewDragHelper {
						public static class: java.lang.Class<android.support.wearable.view.drawer.ViewDragHelper>;
						public static INVALID_POINTER: number;
						public static STATE_IDLE: number;
						public static STATE_DRAGGING: number;
						public static STATE_SETTLING: number;
						public static EDGE_LEFT: number;
						public static EDGE_RIGHT: number;
						public static EDGE_TOP: number;
						public static EDGE_BOTTOM: number;
						public static EDGE_ALL: number;
						public static DIRECTION_HORIZONTAL: number;
						public static DIRECTION_VERTICAL: number;
						public static DIRECTION_ALL: number;
						public getViewDragState(): number;
						public getEdgeSize(): number;
						public processTouchEvent(param0: android.view.MotionEvent): void;
						public setEdgeTrackingEnabled(param0: number): void;
						public getTouchSlop(): number;
						public getMinVelocity(): number;
						public static create(param0: android.view.ViewGroup, param1: android.support.wearable.view.drawer.ViewDragHelper.Callback): android.support.wearable.view.drawer.ViewDragHelper;
						public flingCapturedView(param0: number, param1: number, param2: number, param3: number): void;
						public abort(): void;
						public shouldInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
						public isCapturedViewUnder(param0: number, param1: number): boolean;
						public isEdgeTouched(param0: number): boolean;
						public getCapturedView(): android.view.View;
						public isViewUnder(param0: android.view.View, param1: number, param2: number): boolean;
						public checkTouchSlop(param0: number): boolean;
						public findTopChildUnder(param0: number, param1: number): android.view.View;
						public getActivePointerId(): number;
						public setMinVelocity(param0: number): void;
						public isEdgeTouched(param0: number, param1: number): boolean;
						public cancel(): void;
						public static create(param0: android.view.ViewGroup, param1: number, param2: android.support.wearable.view.drawer.ViewDragHelper.Callback): android.support.wearable.view.drawer.ViewDragHelper;
						public continueSettling(param0: boolean): boolean;
						public captureChildView(param0: android.view.View, param1: number): void;
						public isPointerDown(param0: number): boolean;
						public canScroll(param0: android.view.View, param1: boolean, param2: number, param3: number, param4: number, param5: number): boolean;
						public smoothSlideViewTo(param0: android.view.View, param1: number, param2: number): boolean;
						public checkTouchSlop(param0: number, param1: number): boolean;
						public settleCapturedViewAt(param0: number, param1: number): boolean;
						public refreshEdgeSize(): void;
					}
					export module ViewDragHelper {
						export abstract class Callback {
							public static class: java.lang.Class<android.support.wearable.view.drawer.ViewDragHelper.Callback>;
							public constructor();
							public clampViewPositionHorizontal(param0: android.view.View, param1: number, param2: number): number;
							public tryCaptureView(param0: android.view.View, param1: number): boolean;
							public onEdgeLock(param0: number): boolean;
							public onViewCaptured(param0: android.view.View, param1: number): void;
							public onEdgeDragStarted(param0: number, param1: number): void;
							public onEdgeTouched(param0: number, param1: number): void;
							public getOrderedChildIndex(param0: number): number;
							public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
							public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
							public getViewHorizontalDragRange(param0: android.view.View): number;
							public onViewDragStateChanged(param0: number): void;
							public getViewVerticalDragRange(param0: android.view.View): number;
							public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class WearableActionDrawer extends android.support.wearable.view.drawer.WearableDrawerView {
						public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawer>;
						public onPeekContainerClicked(param0: android.view.View): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public setTitle(param0: string): void;
						public setOnMenuItemClickListener(param0: android.support.wearable.view.drawer.WearableActionDrawer.OnMenuItemClickListener): void;
						public getMenu(): android.view.Menu;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public canScrollHorizontally(param0: number): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
					}
					export module WearableActionDrawer {
						export class ActionItemViewHolder {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawer.ActionItemViewHolder>;
							public view: android.view.View;
							public iconView: android.widget.ImageView;
							public textView: android.widget.TextView;
							public constructor(param0: android.support.wearable.view.drawer.WearableActionDrawer, param1: android.view.View);
						}
						export class ActionListAdapter extends android.support.v7.widget.RecyclerView.Adapter<android.support.v7.widget.RecyclerView.ViewHolder> {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawer.ActionListAdapter>;
							public static TYPE_ACTION: number;
							public static TYPE_TITLE: number;
							public constructor(param0: android.support.wearable.view.drawer.WearableActionDrawer, param1: android.view.Menu);
							public getItemViewType(param0: number): number;
							public getItemCount(): number;
							public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
							public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
						}
						export class OnMenuItemClickListener {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawer.OnMenuItemClickListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.view.drawer.WearableActionDrawer$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMenuItemClick(param0: android.view.MenuItem): boolean;
							});
							public constructor();
							public onMenuItemClick(param0: android.view.MenuItem): boolean;
						}
						export class TitleViewHolder {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawer.TitleViewHolder>;
							public view: android.view.View;
							public textView: android.widget.TextView;
							public constructor(param0: android.view.View);
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class WearableActionDrawerMenu {
						public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawerMenu>;
						public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public close(): void;
						public add(param0: string): android.view.MenuItem;
						public getItem(param0: number): android.view.MenuItem;
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						public performIdentifierAction(param0: number, param1: number): boolean;
						public setGroupVisible(param0: number, param1: boolean): void;
						public removeItem(param0: number): void;
						public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						public size(): number;
						public hasVisibleItems(): boolean;
						public setQwertyMode(param0: boolean): void;
						public findItem(param0: number): android.view.MenuItem;
						public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;
						public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						public constructor(param0: android.content.Context, param1: android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuListener);
						public addSubMenu(param0: number): android.view.SubMenu;
						public add(param0: number): android.view.MenuItem;
						public clear(): void;
						public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						public removeGroup(param0: number): void;
						public addSubMenu(param0: string): android.view.SubMenu;
						public setGroupEnabled(param0: number, param1: boolean): void;
					}
					export module WearableActionDrawerMenu {
						export class WearableActionDrawerMenuItem {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem>;
							public setTitleCondensed(param0: string): android.view.MenuItem;
							public getIcon(): android.graphics.drawable.Drawable;
							public isActionViewExpanded(): boolean;
							public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
							public setActionView(param0: number): android.view.MenuItem;
							public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
							public hasSubMenu(): boolean;
							public getNumericShortcut(): string;
							public setIntent(param0: android.content.Intent): android.view.MenuItem;
							public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
							public getSubMenu(): android.view.SubMenu;
							public getActionProvider(): android.view.ActionProvider;
							public getActionView(): android.view.View;
							public setChecked(param0: boolean): android.view.MenuItem;
							public setNumericShortcut(param0: string): android.view.MenuItem;
							public setIcon(param0: number): android.view.MenuItem;
							public isCheckable(): boolean;
							public getItemId(): number;
							public setTitle(param0: string): android.view.MenuItem;
							public setAlphabeticShortcut(param0: string): android.view.MenuItem;
							public setVisible(param0: boolean): android.view.MenuItem;
							public setEnabled(param0: boolean): android.view.MenuItem;
							public getGroupId(): number;
							public setShortcut(param0: string, param1: string): android.view.MenuItem;
							public getTitleCondensed(): string;
							public setActionView(param0: android.view.View): android.view.MenuItem;
							public getTitle(): string;
							public isVisible(): boolean;
							public expandActionView(): boolean;
							public setShowAsAction(param0: number): void;
							public getAlphabeticShortcut(): string;
							public collapseActionView(): boolean;
							public isEnabled(): boolean;
							public constructor(param0: android.content.Context, param1: number, param2: string, param3: android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem.MenuItemChangedListener);
							public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
							public setShowAsActionFlags(param0: number): android.view.MenuItem;
							public setTitle(param0: number): android.view.MenuItem;
							public isChecked(): boolean;
							public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
							public getIntent(): android.content.Intent;
							public setCheckable(param0: boolean): android.view.MenuItem;
							public getOrder(): number;
						}
						export module WearableActionDrawerMenuItem {
							export class MenuItemChangedListener {
								public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem.MenuItemChangedListener>;
								/**
								 * Constructs a new instance of the android.support.wearable.view.drawer.WearableActionDrawerMenu$WearableActionDrawerMenuItem$MenuItemChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									itemChanged(param0: android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem): void;
								});
								public constructor();
								public itemChanged(param0: android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuItem): void;
							}
						}
						export class WearableActionDrawerMenuListener {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableActionDrawerMenu.WearableActionDrawerMenuListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.view.drawer.WearableActionDrawerMenu$WearableActionDrawerMenuListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class WearableDrawerLayout implements android.support.wearable.view.drawer.FlingWatcher.FlingListener {
						public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerLayout>;
						public onStopNestedScroll(param0: android.view.View): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public computeScroll(): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
						public setDrawerStateCallback(param0: android.support.wearable.view.drawer.WearableDrawerLayout.DrawerStateCallback): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public getNestedScrollAxes(): number;
						public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public closeDrawer(param0: number): void;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public peekDrawer(param0: android.support.wearable.view.drawer.WearableDrawerView): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public openDrawer(param0: number): void;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public closeDrawer(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public onFlingComplete(param0: android.view.View): void;
						public openDrawer(param0: android.view.View): void;
						public peekDrawer(param0: number): void;
					}
					export module WearableDrawerLayout {
						export class BottomDrawerDraggerCallback extends android.support.wearable.view.drawer.WearableDrawerLayout.DrawerDraggerCallback {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerLayout.BottomDrawerDraggerCallback>;
							public getDrawerView(): android.support.wearable.view.drawer.WearableDrawerView;
							public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
							public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
							public onEdgeDragStarted(param0: number, param1: number): void;
							public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
						}
						export class ClosePeekRunnable {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerLayout.ClosePeekRunnable>;
							public run(): void;
						}
						export abstract class DrawerDraggerCallback extends android.support.wearable.view.drawer.ViewDragHelper.Callback {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerLayout.DrawerDraggerCallback>;
							public getDrawerView(): android.support.wearable.view.drawer.WearableDrawerView;
							public tryCaptureView(param0: android.view.View, param1: number): boolean;
							public onViewCaptured(param0: android.view.View, param1: number): void;
							public onViewDragStateChanged(param0: number): void;
							public getViewVerticalDragRange(param0: android.view.View): number;
						}
						export abstract class DrawerStateCallback {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerLayout.DrawerStateCallback>;
							public constructor();
							public onDrawerOpened(param0: android.view.View): void;
							public onDrawerStateChanged(param0: number): void;
							public onDrawerClosed(param0: android.view.View): void;
						}
						export class TopDrawerDraggerCallback extends android.support.wearable.view.drawer.WearableDrawerLayout.DrawerDraggerCallback {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerLayout.TopDrawerDraggerCallback>;
							public getDrawerView(): android.support.wearable.view.drawer.WearableDrawerView;
							public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
							public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
							public onEdgeDragStarted(param0: number, param1: number): void;
							public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class WearableDrawerView {
						public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerView>;
						public hasDrawerContent(): boolean;
						public peekDrawer(): void;
						public setShouldLockWhenNotOpenOrPeeking(param0: boolean): void;
						public onAttachedToWindow(): void;
						public onFinishInflate(): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public onDrawerOpened(): void;
						public lockDrawerClosed(): void;
						public setPeekContent(param0: android.view.View): void;
						public isClosed(): boolean;
						public shouldLockWhenNotOpenOrPeeking(): boolean;
						public shouldPeekOnScrollDown(): boolean;
						public isOpened(): boolean;
						public getDrawerContent(): android.view.View;
						public lockDrawerOpened(): void;
						public setDrawerContent(param0: android.view.View): void;
						public openDrawer(): void;
						public closeDrawer(): void;
						public setCanAutoPeek(param0: boolean): void;
						public isLocked(): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public setShouldOnlyOpenWhenAtTop(param0: boolean): void;
						public getDrawerState(): number;
						public canAutoPeek(): boolean;
						public onDrawerStateChanged(param0: number): void;
						public unlockDrawer(): void;
						public onPeekContainerClicked(param0: android.view.View): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public setShouldPeekOnScrollDown(param0: boolean): void;
						public shouldOnlyOpenWhenAtTop(): boolean;
						public isPeeking(): boolean;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public onDrawerClosed(): void;
					}
					export module WearableDrawerView {
						export class DrawerState {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableDrawerView.DrawerState>;
							/**
							 * Constructs a new instance of the android.support.wearable.view.drawer.WearableDrawerView$DrawerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static STATE_DRAGGING: number;
							public static STATE_SETTLING: number;
							public static STATE_IDLE: number;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module view {
				export module drawer {
					export class WearableNavigationDrawer extends android.support.wearable.view.drawer.WearableDrawerView {
						public static class: java.lang.Class<android.support.wearable.view.drawer.WearableNavigationDrawer>;
						public setAdapter(param0: android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter): void;
						public onDrawerOpened(): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter, param2: android.view.GestureDetector);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
						public canScrollHorizontally(param0: number): boolean;
						public onDrawerClosed(): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public setCurrentItem(param0: number, param1: boolean): void;
						public constructor(param0: android.content.Context);
					}
					export module WearableNavigationDrawer {
						export class NavigationStyle {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableNavigationDrawer.NavigationStyle>;
							/**
							 * Constructs a new instance of the android.support.wearable.view.drawer.WearableNavigationDrawer$NavigationStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static SINGLE_PAGE: number;
							public static MULTI_PAGE: number;
						}
						export abstract class WearableNavigationDrawerAdapter {
							public static class: java.lang.Class<android.support.wearable.view.drawer.WearableNavigationDrawer.WearableNavigationDrawerAdapter>;
							public constructor();
							public getItemText(param0: number): string;
							public notifyDataSetChanged(): void;
							public getItemDrawable(param0: number): android.graphics.drawable.Drawable;
							public onItemSelected(param0: number): void;
							public getCount(): number;
							public setPresenter(param0: android.support.wearable.internal.view.drawer.WearableNavigationDrawerPresenter): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export abstract class CanvasWatchFaceService extends android.support.wearable.watchface.WatchFaceService {
					public static class: java.lang.Class<android.support.wearable.watchface.CanvasWatchFaceService>;
					public constructor();
					public onCreateEngine(): android.support.wearable.watchface.CanvasWatchFaceService.Engine;
					public onCreateEngine(): android.support.wearable.watchface.WatchFaceService.Engine;
				}
				export module CanvasWatchFaceService {
					export class Engine extends android.support.wearable.watchface.WatchFaceService.Engine {
						public static class: java.lang.Class<android.support.wearable.watchface.CanvasWatchFaceService.Engine>;
						public constructor(param0: android.support.wearable.watchface.WatchFaceService);
						public onDestroy(): void;
						public invalidate(): void;
						public onVisibilityChanged(param0: boolean): void;
						public constructor(param0: android.support.wearable.watchface.CanvasWatchFaceService);
						public onDraw(param0: android.graphics.Canvas, param1: android.graphics.Rect): void;
						public onSurfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
						public onSurfaceCreated(param0: android.view.SurfaceHolder): void;
						public postInvalidate(): void;
						public onSurfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export abstract class Gles2WatchFaceService extends android.support.wearable.watchface.WatchFaceService {
					public static class: java.lang.Class<android.support.wearable.watchface.Gles2WatchFaceService>;
					public constructor();
					public onCreateEngine(): android.support.wearable.watchface.WatchFaceService.Engine;
					public onCreateEngine(): android.support.wearable.watchface.Gles2WatchFaceService.Engine;
				}
				export module Gles2WatchFaceService {
					export class Engine extends android.support.wearable.watchface.WatchFaceService.Engine {
						public static class: java.lang.Class<android.support.wearable.watchface.Gles2WatchFaceService.Engine>;
						public constructor(param0: android.support.wearable.watchface.WatchFaceService);
						public onCreate(param0: android.view.SurfaceHolder): void;
						public onSurfaceDestroyed(param0: android.view.SurfaceHolder): void;
						public onGlSurfaceCreated(param0: number, param1: number): void;
						public constructor(param0: android.support.wearable.watchface.Gles2WatchFaceService);
						public chooseEglConfig(param0: android.opengl.EGLDisplay): android.opengl.EGLConfig;
						public createWindowSurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig, param2: android.view.SurfaceHolder): android.opengl.EGLSurface;
						public postInvalidate(): void;
						public onSurfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
						public onApplyWindowInsets(param0: android.view.WindowInsets): void;
						public onDraw(): void;
						public onDestroy(): void;
						public invalidate(): void;
						public onGlContextCreated(): void;
						public onSurfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
						public createEglContext(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLConfig): android.opengl.EGLContext;
						public initializeEglDisplay(): android.opengl.EGLDisplay;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export class IWatchFaceService {
					public static class: java.lang.Class<android.support.wearable.watchface.IWatchFaceService>;
					/**
					 * Constructs a new instance of the android.support.wearable.watchface.IWatchFaceService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setStyle(param0: android.support.wearable.watchface.WatchFaceStyle): void;
						setActiveComplications(param0: native.Array<number>, param1: boolean): void;
						setDefaultComplicationProvider(param0: number, param1: android.content.ComponentName, param2: number): void;
						setDefaultSystemComplicationProvider(param0: number, param1: number, param2: number): void;
						setContentDescriptionLabels(param0: native.Array<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>): void;
						updateDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition): void;
					});
					public constructor();
					public setDefaultComplicationProvider(param0: number, param1: android.content.ComponentName, param2: number): void;
					public setDefaultSystemComplicationProvider(param0: number, param1: number, param2: number): void;
					public setStyle(param0: android.support.wearable.watchface.WatchFaceStyle): void;
					public setActiveComplications(param0: native.Array<number>, param1: boolean): void;
					public setContentDescriptionLabels(param0: native.Array<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>): void;
					public updateDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition): void;
				}
				export module IWatchFaceService {
					export abstract class Stub extends android.support.wearable.internal.aidl.BaseStub implements android.support.wearable.watchface.IWatchFaceService {
						public static class: java.lang.Class<android.support.wearable.watchface.IWatchFaceService.Stub>;
						public updateDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition): void;
						public constructor();
						public setDefaultComplicationProvider(param0: number, param1: android.content.ComponentName, param2: number): void;
						public setActiveComplications(param0: native.Array<number>, param1: boolean): void;
						public static asInterface(param0: android.os.IBinder): android.support.wearable.watchface.IWatchFaceService;
						public dispatchTransaction(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public setDefaultSystemComplicationProvider(param0: number, param1: number, param2: number): void;
						public setContentDescriptionLabels(param0: native.Array<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>): void;
						public constructor(param0: string);
						public setStyle(param0: android.support.wearable.watchface.WatchFaceStyle): void;
					}
					export module Stub {
						export class Proxy extends android.support.wearable.internal.aidl.BaseProxy implements android.support.wearable.watchface.IWatchFaceService {
							public static class: java.lang.Class<android.support.wearable.watchface.IWatchFaceService.Stub.Proxy>;
							public setContentDescriptionLabels(param0: native.Array<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>): void;
							public setActiveComplications(param0: native.Array<number>, param1: boolean): void;
							public setDefaultComplicationProvider(param0: number, param1: android.content.ComponentName, param2: number): void;
							public setStyle(param0: android.support.wearable.watchface.WatchFaceStyle): void;
							public updateDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition): void;
							public setDefaultSystemComplicationProvider(param0: number, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export abstract class WatchFaceService {
					public static class: java.lang.Class<android.support.wearable.watchface.WatchFaceService>;
					public static COMMAND_AMBIENT_UPDATE: string;
					public static COMMAND_BACKGROUND_ACTION: string;
					public static COMMAND_SET_PROPERTIES: string;
					public static COMMAND_SET_BINDER: string;
					public static COMMAND_REQUEST_STYLE: string;
					public static COMMAND_REQUEST_DECOMPOSITION: string;
					public static COMMAND_TOUCH: string;
					public static COMMAND_TOUCH_CANCEL: string;
					public static COMMAND_TAP: string;
					public static COMMAND_COMPLICATION_DATA: string;
					public static TAP_TYPE_TOUCH: number;
					public static TAP_TYPE_TOUCH_CANCEL: number;
					public static TAP_TYPE_TAP: number;
					public static ACTION_REQUEST_STATE: string;
					public static EXTRA_WATCH_FACE_VISIBLE: string;
					public static EXTRA_CARD_LOCATION: string;
					public static EXTRA_AMBIENT_MODE: string;
					public static EXTRA_INTERRUPTION_FILTER: string;
					public static EXTRA_UNREAD_COUNT: string;
					public static EXTRA_NOTIFICATION_COUNT: string;
					public static EXTRA_INDICATOR_STATUS: string;
					public static EXTRA_BINDER: string;
					public static EXTRA_TAP_TIME: string;
					public static EXTRA_COMPLICATION_ID: string;
					public static EXTRA_COMPLICATION_DATA: string;
					public static PROPERTY_BURN_IN_PROTECTION: string;
					public static PROPERTY_LOW_BIT_AMBIENT: string;
					public static PROPERTY_IN_RETAIL_MODE: string;
					public static PROPERTY_OFFLOAD_SUPPORTED: string;
					public static PROPERTY_PHYSICAL_HANDS: string;
					public static STATUS_CHARGING: string;
					public static STATUS_AIRPLANE_MODE: string;
					public static STATUS_CONNECTED: string;
					public static STATUS_THEATER_MODE: string;
					public static STATUS_GPS_ACTIVE: string;
					public static STATUS_KEYGUARD_LOCKED: string;
					public static STATUS_INTERRUPTION_FILTER: string;
					public static INTERRUPTION_FILTER_UNKNOWN: number;
					public static INTERRUPTION_FILTER_ALL: number;
					public static INTERRUPTION_FILTER_PRIORITY: number;
					public static INTERRUPTION_FILTER_NONE: number;
					public static INTERRUPTION_FILTER_ALARMS: number;
					public constructor();
					public onCreateEngine(): android.support.wearable.watchface.WatchFaceService.Engine;
				}
				export module WatchFaceService {
					export abstract class Engine {
						public static class: java.lang.Class<android.support.wearable.watchface.WatchFaceService.Engine>;
						public updateDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition): void;
						public onTimeTick(): void;
						public onInterruptionFilterChanged(param0: number): void;
						public onCreate(param0: android.view.SurfaceHolder): void;
						public setWatchFaceStyle(param0: android.support.wearable.watchface.WatchFaceStyle): void;
						public onAmbientModeChanged(param0: boolean): void;
						public getUnreadCount(): number;
						public setTouchEventsEnabled(param0: boolean): void;
						public onDestroy(): void;
						public onTapCommand(param0: number, param1: number, param2: number, param3: number): void;
						public onTouchEvent(param0: android.view.MotionEvent): void;
						public setActiveComplications(param0: native.Array<number>): void;
						public onStatusChanged(param0: android.os.Bundle): void;
						public setDefaultComplicationProvider(param0: number, param1: android.content.ComponentName, param2: number): void;
						public constructor(param0: android.support.wearable.watchface.WatchFaceService);
						public onPropertiesChanged(param0: android.os.Bundle): void;
						public setContentDescriptionLabels(param0: native.Array<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>): void;
						public isInAmbientMode(): boolean;
						public onNotificationCountChanged(param0: number): void;
						public onCommand(param0: string, param1: number, param2: number, param3: number, param4: android.os.Bundle, param5: boolean): android.os.Bundle;
						public onComplicationDataUpdate(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
						public onPeekCardPositionUpdate(param0: android.graphics.Rect): void;
						public getInterruptionFilter(): number;
						public getNotificationCount(): number;
						public onVisibilityChanged(param0: boolean): void;
						public setDefaultSystemComplicationProvider(param0: number, param1: number, param2: number): void;
						public onUnreadCountChanged(param0: number): void;
						public getPeekCardPosition(): android.graphics.Rect;
					}
					export class ProviderConfig {
						public static class: java.lang.Class<android.support.wearable.watchface.WatchFaceService.ProviderConfig>;
						public provider: android.content.ComponentName;
						public systemProvider: number;
						public type: number;
						public constructor(param0: android.content.ComponentName, param1: number);
						public constructor(param0: number, param1: number);
					}
					export class TapType {
						public static class: java.lang.Class<android.support.wearable.watchface.WatchFaceService.TapType>;
						/**
						 * Constructs a new instance of the android.support.wearable.watchface.WatchFaceService$TapType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export class WatchFaceStyle {
					public static class: java.lang.Class<android.support.wearable.watchface.WatchFaceStyle>;
					public static PEEK_MODE_VARIABLE: number;
					public static PEEK_MODE_SHORT: number;
					public static PEEK_MODE_NONE: number;
					public static PROGRESS_MODE_NONE: number;
					public static PROGRESS_MODE_DISPLAY: number;
					public static PEEK_OPACITY_MODE_OPAQUE: number;
					public static PEEK_OPACITY_MODE_TRANSLUCENT: number;
					public static BACKGROUND_VISIBILITY_INTERRUPTIVE: number;
					public static BACKGROUND_VISIBILITY_PERSISTENT: number;
					public static AMBIENT_PEEK_MODE_VISIBLE: number;
					public static AMBIENT_PEEK_MODE_HIDDEN: number;
					public static PROTECT_STATUS_BAR: number;
					public static PROTECT_HOTWORD_INDICATOR: number;
					public static PROTECT_WHOLE_SCREEN: number;
					public static DEFAULT_ACCENT_COLOR: number;
					public static KEY_COMPONENT: string;
					public static KEY_CARD_PEEK_MODE: string;
					public static KEY_CARD_PROGRESS_MODE: string;
					public static KEY_BACKGROUND_VISIBILITY: string;
					public static KEY_SHOW_SYSTEM_UI_TIME: string;
					public static KEY_AMBIENT_PEEK_MODE: string;
					public static KEY_PEEK_CARD_OPACITY: string;
					public static KEY_VIEW_PROTECTION_MODE: string;
					public static KEY_STATUS_BAR_GRAVITY: string;
					public static KEY_HOTWORD_INDICATOR_GRAVITY: string;
					public static KEY_SHOW_UNREAD_INDICATOR: string;
					public static KEY_HIDE_NOTIFICATION_INDICATOR: string;
					public static KEY_ACCENT_COLOR: string;
					public static KEY_ACCEPTS_TAPS: string;
					public static KEY_HIDE_HOTWORD_INDICATOR: string;
					public static KEY_HIDE_STATUS_BAR: string;
					public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.WatchFaceStyle>;
					public constructor(param0: android.os.Bundle);
					public getShowUnreadCountIndicator(): boolean;
					public getHotwordIndicatorGravity(): number;
					public getCardPeekMode(): number;
					public describeContents(): number;
					public toBundle(): android.os.Bundle;
					public getShowSystemUiTime(): boolean;
					public equals(param0: any): boolean;
					public getAccentColor(): number;
					public toString(): string;
					public getHideNotificationIndicator(): boolean;
					public getCardProgressMode(): number;
					public getPeekOpacityMode(): number;
					public getAmbientPeekMode(): number;
					public getViewProtectionMode(): number;
					public getBackgroundVisibility(): number;
					public getHideStatusBar(): boolean;
					public getComponent(): android.content.ComponentName;
					public getStatusBarGravity(): number;
					public getAcceptsTapEvents(): boolean;
					public getHideHotwordIndicator(): boolean;
					public hashCode(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export module WatchFaceStyle {
					export class Builder {
						public static class: java.lang.Class<android.support.wearable.watchface.WatchFaceStyle.Builder>;
						public setCardPeekMode(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public static forActivity(param0: android.app.Activity): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setPeekOpacityMode(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setHideNotificationIndicator(param0: boolean): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public build(): android.support.wearable.watchface.WatchFaceStyle;
						public setAccentColor(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setShowSystemUiTime(param0: boolean): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public static forDefault(): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setViewProtection(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setShowUnreadCountIndicator(param0: boolean): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setAcceptsTapEvents(param0: boolean): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setBackgroundVisibility(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setCardProgressMode(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setHotwordIndicatorGravity(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setHideHotwordIndicator(param0: boolean): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setAmbientPeekMode(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public static forComponentName(param0: android.content.ComponentName): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public constructor(param0: android.app.Service);
						public setHideStatusBar(param0: boolean): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setStatusBarGravity(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
						public setViewProtectionMode(param0: number): android.support.wearable.watchface.WatchFaceStyle.Builder;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module accessibility {
					export class AccessibilityUtils {
						public static class: java.lang.Class<android.support.wearable.watchface.accessibility.AccessibilityUtils>;
						public constructor();
						public static generateContentDescription(param0: android.content.Context, param1: android.support.wearable.complications.ComplicationData): android.support.wearable.complications.TimeDependentText;
						public static makeTimeAsComplicationText(param0: android.content.Context): android.support.wearable.complications.ComplicationText;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module accessibility {
					export class ContentDescriptionLabel {
						public static class: java.lang.Class<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.accessibility.ContentDescriptionLabel>;
						public describeContents(): number;
						public getText(): android.support.wearable.complications.TimeDependentText;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(param0: android.graphics.Rect, param1: android.support.wearable.complications.ComplicationTextTemplate);
						public constructor(param0: android.content.Context, param1: android.graphics.Rect, param2: android.support.wearable.complications.ComplicationData);
						public setTapAction(param0: android.app.PendingIntent): void;
						public constructor(param0: android.graphics.Rect, param1: android.support.wearable.complications.ComplicationText);
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getBounds(): android.graphics.Rect;
						public getTapAction(): android.app.PendingIntent;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export abstract class BaseComponent extends android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Component {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.BaseComponent>;
						public fields: android.os.Bundle;
						public isInteractive(): boolean;
						public getDisplayModes(): number;
						public getComponentId(): number;
						public isAmbient(): boolean;
					}
					export module BaseComponent {
						export abstract class BaseBuilder<T, K>  extends java.lang.Object {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.BaseComponent.BaseBuilder<any,any>>;
							public fields: android.os.Bundle;
							public validate(): void;
							public build(): K;
							public setDisplayModes(param0: number): T;
							public setComponentId(param0: number): T;
						}
						export class ComponentFactory<T>  extends java.lang.Object {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.BaseComponent.ComponentFactory<any>>;
							/**
							 * Constructs a new instance of the android.support.wearable.watchface.decomposition.BaseComponent$ComponentFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								buildComponent(param0: android.os.Bundle): T;
							});
							public constructor();
							public buildComponent(param0: android.os.Bundle): T;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export abstract class BaseDrawnComponent extends android.support.wearable.watchface.decomposition.BaseComponent implements android.support.wearable.watchface.decomposition.WatchFaceDecomposition.DrawnComponent {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.BaseDrawnComponent>;
						public getZOrder(): number;
						public isInteractive(): boolean;
						public getDisplayModes(): number;
						public getComponentId(): number;
						public isAmbient(): boolean;
					}
					export module BaseDrawnComponent {
						export abstract class BaseDrawnBuilder<T, K>  extends android.support.wearable.watchface.decomposition.BaseComponent.BaseBuilder<any,any> {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.BaseDrawnComponent.BaseDrawnBuilder<any,any>>;
							public setZOrder(param0: number): any;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export class ComplicationComponent extends android.support.wearable.watchface.decomposition.BaseDrawnComponent {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.ComplicationComponent>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.decomposition.ComplicationComponent>;
						public describeContents(): number;
						public getWatchFaceComplicationId(): number;
						public getComplicationTypes(): native.Array<number>;
						public getComplicationDrawable(): android.support.wearable.complications.rendering.ComplicationDrawable;
						public isAmbient(): boolean;
						public getZOrder(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getBounds(): android.graphics.RectF;
						public getDefaultComplicationType(): number;
						public isInteractive(): boolean;
						public getDisplayModes(): number;
						public getDefaultSystemProvider(): number;
						public getComponentId(): number;
					}
					export module ComplicationComponent {
						export class Builder extends android.support.wearable.watchface.decomposition.BaseDrawnComponent.BaseDrawnBuilder<android.support.wearable.watchface.decomposition.ComplicationComponent.Builder,android.support.wearable.watchface.decomposition.ComplicationComponent> {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.ComplicationComponent.Builder>;
							public constructor();
							public validate(): void;
							public setDefaultSystemProvider(param0: number, param1: number): android.support.wearable.watchface.decomposition.ComplicationComponent.Builder;
							public setBounds(param0: android.graphics.RectF): android.support.wearable.watchface.decomposition.ComplicationComponent.Builder;
							public setWatchFaceComplicationId(param0: number): android.support.wearable.watchface.decomposition.ComplicationComponent.Builder;
							public setComplicationDrawable(param0: android.support.wearable.complications.rendering.ComplicationDrawable): android.support.wearable.watchface.decomposition.ComplicationComponent.Builder;
							public setComplicationTypes(param0: native.Array<number>): android.support.wearable.watchface.decomposition.ComplicationComponent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export class FontComponent extends android.support.wearable.watchface.decomposition.BaseComponent {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.FontComponent>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.decomposition.FontComponent>;
						public describeContents(): number;
						public getDigitCount(): number;
						public getImage(): any;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public isInteractive(): boolean;
						public getDisplayModes(): number;
						public getComponentId(): number;
						public isAmbient(): boolean;
					}
					export module FontComponent {
						export class Builder extends android.support.wearable.watchface.decomposition.BaseComponent.BaseBuilder<android.support.wearable.watchface.decomposition.FontComponent.Builder,android.support.wearable.watchface.decomposition.FontComponent> {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.FontComponent.Builder>;
							public constructor();
							public validate(): void;
							public setDigitCount(param0: number): android.support.wearable.watchface.decomposition.FontComponent.Builder;
							public setImage(param0: any): android.support.wearable.watchface.decomposition.FontComponent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export class ImageComponent extends android.support.wearable.watchface.decomposition.BaseDrawnComponent {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.ImageComponent>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.decomposition.ImageComponent>;
						public getDegreesPerDay(): number;
						public describeContents(): number;
						public getDegreesPerStep(): number;
						public getPivot(): android.graphics.PointF;
						public getOffsetDegrees(): number;
						public isAmbient(): boolean;
						public getZOrder(): number;
						public getImage(): any;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getBounds(): android.graphics.RectF;
						public isInteractive(): boolean;
						public getDisplayModes(): number;
						public getComponentId(): number;
					}
					export module ImageComponent {
						export class Builder extends android.support.wearable.watchface.decomposition.BaseDrawnComponent.BaseDrawnBuilder<android.support.wearable.watchface.decomposition.ImageComponent.Builder,android.support.wearable.watchface.decomposition.ImageComponent> {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.ImageComponent.Builder>;
							public static SMOOTH_SECOND_HAND: number;
							public static TICKING_SECOND_HAND: number;
							public static MINUTE_HAND: number;
							public static HOUR_HAND: number;
							public static BPH_21600_SECOND_HAND: number;
							public static BPH_28800_SECOND_HAND: number;
							public constructor();
							public setImage(param0: any): android.support.wearable.watchface.decomposition.ImageComponent.Builder;
							public setPivot(param0: android.graphics.PointF): android.support.wearable.watchface.decomposition.ImageComponent.Builder;
							public validate(): void;
							public setBounds(param0: android.graphics.RectF): android.support.wearable.watchface.decomposition.ImageComponent.Builder;
							public setOffsetDegrees(param0: number): android.support.wearable.watchface.decomposition.ImageComponent.Builder;
							public setDegreesPerDay(param0: number): android.support.wearable.watchface.decomposition.ImageComponent.Builder;
							public constructor(param0: number);
							public setDegreesPerStep(param0: number): android.support.wearable.watchface.decomposition.ImageComponent.Builder;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export class NumberComponent extends android.support.wearable.watchface.decomposition.BaseDrawnComponent {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.NumberComponent>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.decomposition.NumberComponent>;
						public describeContents(): number;
						public getMinDigitsShown(): number;
						public getDisplayStringForTime(param0: number): string;
						public isAmbient(): boolean;
						public getZOrder(): number;
						public getMsPerIncrement(): number;
						public getTimeOffsetMs(): number;
						public getPosition(): android.graphics.PointF;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public isInteractive(): boolean;
						public getLowestValue(): number;
						public getDisplayModes(): number;
						public getHighestValue(): number;
						public getFontComponentId(): number;
						public getComponentId(): number;
					}
					export module NumberComponent {
						export class Builder extends android.support.wearable.watchface.decomposition.BaseDrawnComponent.BaseDrawnBuilder<android.support.wearable.watchface.decomposition.NumberComponent.Builder,android.support.wearable.watchface.decomposition.NumberComponent> {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.NumberComponent.Builder>;
							public static SECONDS: number;
							public static MINUTES: number;
							public static HOURS_12: number;
							public static HOURS_24: number;
							public static DAY_OF_WEEK: number;
							public static DAY_OF_MONTH: number;
							public static MONTH_ZERO_INDEX: number;
							public static MONTH_NUMERICAL: number;
							public constructor();
							public setHighestValue(param0: number): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public setMsPerIncrement(param0: number): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public validate(): void;
							public setPosition(param0: android.graphics.PointF): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public setFontComponent(param0: android.support.wearable.watchface.decomposition.FontComponent): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public setLowestValue(param0: number): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public setFontComponentId(param0: number): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public setMinDigitsShown(param0: number): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public setTimeOffsetMs(param0: number): android.support.wearable.watchface.decomposition.NumberComponent.Builder;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decomposition {
					export class WatchFaceDecomposition {
						public static class: java.lang.Class<android.support.wearable.watchface.decomposition.WatchFaceDecomposition>;
						public static MAX_COMPONENT_ID: number;
						public static CREATOR: android.os.Parcelable.Creator<android.support.wearable.watchface.decomposition.WatchFaceDecomposition>;
						public getImageComponents(): java.util.List<android.support.wearable.watchface.decomposition.ImageComponent>;
						public describeContents(): number;
						public getComplicationComponents(): java.util.List<android.support.wearable.watchface.decomposition.ComplicationComponent>;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getFontComponents(): java.util.List<android.support.wearable.watchface.decomposition.FontComponent>;
						public getNumberComponents(): java.util.List<android.support.wearable.watchface.decomposition.NumberComponent>;
					}
					export module WatchFaceDecomposition {
						export class Builder {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Builder>;
							public constructor();
							public addComplicationComponents(param0: native.Array<android.support.wearable.watchface.decomposition.ComplicationComponent>): android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Builder;
							public addFontComponents(param0: native.Array<android.support.wearable.watchface.decomposition.FontComponent>): android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Builder;
							public addNumberComponents(param0: native.Array<android.support.wearable.watchface.decomposition.NumberComponent>): android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Builder;
							public addImageComponents(param0: native.Array<android.support.wearable.watchface.decomposition.ImageComponent>): android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Builder;
							public build(): android.support.wearable.watchface.decomposition.WatchFaceDecomposition;
						}
						export class Component {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Component>;
							/**
							 * Constructs a new instance of the android.support.wearable.watchface.decomposition.WatchFaceDecomposition$Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getComponentId(): number;
								getDisplayModes(): number;
								isAmbient(): boolean;
								isInteractive(): boolean;
							});
							public constructor();
							public static DISPLAY_INTERACTIVE: number;
							public static DISPLAY_AMBIENT: number;
							public getDisplayModes(): number;
							public isInteractive(): boolean;
							public isAmbient(): boolean;
							public getComponentId(): number;
						}
						export class DrawnComponent extends android.support.wearable.watchface.decomposition.WatchFaceDecomposition.Component {
							public static class: java.lang.Class<android.support.wearable.watchface.decomposition.WatchFaceDecomposition.DrawnComponent>;
							/**
							 * Constructs a new instance of the android.support.wearable.watchface.decomposition.WatchFaceDecomposition$DrawnComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getZOrder(): number;
								getComponentId(): number;
								getDisplayModes(): number;
								isAmbient(): boolean;
								isInteractive(): boolean;
							});
							public constructor();
							public static DISPLAY_INTERACTIVE: number;
							public static DISPLAY_AMBIENT: number;
							public getDisplayModes(): number;
							public isInteractive(): boolean;
							public isAmbient(): boolean;
							public getZOrder(): number;
							public getComponentId(): number;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decompositionface {
					export class CoordConverter {
						public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.CoordConverter>;
						public getPixelRectFromProportional(param0: android.graphics.RectF, param1: android.graphics.Rect): void;
						public constructor();
						public getPixelY(param0: number): number;
						public setPixelBounds(param0: android.graphics.Rect): void;
						public getPixelX(param0: number): number;
						public setPixelBounds(param0: number, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decompositionface {
					export abstract class DecompositionConfigActivity {
						public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DecompositionConfigActivity>;
						public constructor();
						public onDestroy(): void;
						public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
						public buildDecompositionForWatchFace(param0: string): android.support.wearable.watchface.decomposition.WatchFaceDecomposition;
						public onCreate(param0: android.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decompositionface {
					export class DecompositionConfigView {
						public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DecompositionConfigView>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getWatchFaceComplicationIds(): native.Array<number>;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public setDisplayTime(param0: number): void;
						public setDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition): void;
						public setProviderInfo(param0: number, param1: android.support.wearable.complications.ComplicationProviderInfo): void;
						public constructor(param0: android.content.Context);
						public setOnComplicationTapListener(param0: android.support.wearable.watchface.decompositionface.DecompositionConfigView.OnComplicationTapListener): void;
					}
					export module DecompositionConfigView {
						export class OnComplicationTapListener {
							public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DecompositionConfigView.OnComplicationTapListener>;
							/**
							 * Constructs a new instance of the android.support.wearable.watchface.decompositionface.DecompositionConfigView$OnComplicationTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onComplicationTap(param0: number, param1: native.Array<number>): void;
							});
							public constructor();
							public onComplicationTap(param0: number, param1: native.Array<number>): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decompositionface {
					export class DecompositionDrawable {
						public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DecompositionDrawable>;
						public draw(param0: android.graphics.Canvas): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public setInAmbientMode(param0: boolean): void;
						public setComplicationData(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
						public onTap(param0: number, param1: number): boolean;
						public getOpacity(): number;
						public setLowBitAmbient(param0: boolean): void;
						public setClipToCircle(param0: boolean): void;
						public setAlpha(param0: number): void;
						public constructor(param0: android.content.Context);
						public static calculateStepIntervalMs(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition, param1: number): number;
						public onBoundsChange(param0: android.graphics.Rect): void;
						public setDecomposition(param0: android.support.wearable.watchface.decomposition.WatchFaceDecomposition, param1: boolean): void;
						public setCurrentTimeMillis(param0: number): void;
						public setBurnInProtection(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decompositionface {
					export abstract class DecompositionWatchFaceService extends android.support.wearable.watchface.CanvasWatchFaceService {
						public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DecompositionWatchFaceService>;
						public constructor();
						public buildDecomposition(): android.support.wearable.watchface.decomposition.WatchFaceDecomposition;
						public onCreateEngine(): android.support.wearable.watchface.WatchFaceService.Engine;
						public onCreateEngine(): android.support.wearable.watchface.decompositionface.DecompositionWatchFaceService.Engine;
						public onCreateEngine(): android.support.wearable.watchface.CanvasWatchFaceService.Engine;
					}
					export module DecompositionWatchFaceService {
						export class Engine extends android.support.wearable.watchface.CanvasWatchFaceService.Engine {
							public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DecompositionWatchFaceService.Engine>;
							public onCreate(param0: android.view.SurfaceHolder): void;
							public onPropertiesChanged(param0: android.os.Bundle): void;
							public onAmbientModeChanged(param0: boolean): void;
							public onComplicationDataUpdate(param0: number, param1: android.support.wearable.complications.ComplicationData): void;
							public onVisibilityChanged(param0: boolean): void;
							public constructor(param0: android.support.wearable.watchface.CanvasWatchFaceService);
							public onDraw(param0: android.graphics.Canvas, param1: android.graphics.Rect): void;
							public constructor(param0: android.support.wearable.watchface.WatchFaceService);
							public onTimeTick(): void;
							public constructor(param0: android.support.wearable.watchface.decompositionface.DecompositionWatchFaceService);
							public onTapCommand(param0: number, param1: number, param2: number, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module wearable {
			export module watchface {
				export module decompositionface {
					export class DigitDrawable {
						public static class: java.lang.Class<android.support.wearable.watchface.decompositionface.DigitDrawable>;
						public draw(param0: android.graphics.Canvas): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public setCurrentDigit(param0: number): void;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setFontDrawable(param0: android.graphics.drawable.Drawable): void;
						public setDigitCount(param0: number): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module wearable {
				export module intent {
					export class RemoteIntent {
						public static class: java.lang.Class<com.google.android.wearable.intent.RemoteIntent>;
						public static ACTION_REMOTE_INTENT: string;
						public static EXTRA_INTENT: string;
						public static EXTRA_NODE_ID: string;
						public static EXTRA_RESULT_RECEIVER: string;
						public static RESULT_OK: number;
						public static RESULT_FAILED: number;
						public static startRemoteActivity(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.os.ResultReceiver, param3: string): void;
						public constructor();
						public static startRemoteActivity(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.os.ResultReceiver): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module wearable {
				export module playstore {
					export class PlayStoreAvailability {
						public static class: java.lang.Class<com.google.android.wearable.playstore.PlayStoreAvailability>;
						public static PLAY_STORE_ON_PHONE_ERROR_UNKNOWN: number;
						public static PLAY_STORE_ON_PHONE_AVAILABLE: number;
						public static PLAY_STORE_ON_PHONE_UNAVAILABLE: number;
						public constructor();
						public static getPlayStoreAvailabilityOnPhone(param0: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

//Generics information:
//android.support.wearable.view.WearableListView.GenericAdapter:1
//android.support.wearable.watchface.decomposition.BaseComponent.BaseBuilder:2
//android.support.wearable.watchface.decomposition.BaseComponent.ComponentFactory:1
//android.support.wearable.watchface.decomposition.BaseDrawnComponent.BaseDrawnBuilder:2


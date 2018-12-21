declare module com {
  export namespace google {
    export namespace android {
      export namespace wearable {
        export class WearableSharedLib {
          public static class: java.lang.Class<
            com.google.android.wearable.WearableSharedLib
          >;
          public static version(): number;
        }
      }
    }
  }
}

declare module com {
  export namespace google {
    export namespace android {
      export namespace wearable {
        export namespace compat {
          export class WearableActivityController {
            public static class: java.lang.Class<
              com.google.android.wearable.compat.WearableActivityController
            >;
            public static EXTRA_BURN_IN_PROTECTION: string;
            public static EXTRA_LOWBIT_AMBIENT: string;
            public setAutoResumeEnabled(param0: boolean): void;
            public constructor(
              param0: string,
              param1: globalAndroid.app.Activity,
              param2: com.google.android.wearable.compat.WearableActivityController.AmbientCallback
            );
            public onDestroy(): void;
            public setAmbientEnabled(): void;
            public setAmbientOffloadEnabled(param0: boolean): void;
            public onCreate(): void;
            public onResume(): void;
            public dump(
              param0: string,
              param1: java.io.FileDescriptor,
              param2: java.io.PrintWriter,
              param3: native.Array<string>
            ): void;
            public onStop(): void;
            public onPause(): void;
            public isAmbient(): boolean;
          }
          export namespace WearableActivityController {
            export abstract class AmbientCallback {
              public static class: java.lang.Class<
                com.google.android.wearable.compat.WearableActivityController.AmbientCallback
              >;
              public constructor();
              public onExitAmbient(): void;
              public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
              public onUpdateAmbient(): void;
              public onInvalidateAmbientOffload(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export namespace google {
    export namespace android {
      export namespace wearable {
        export namespace display {
          export class WearableDisplayHelper {
            public static class: java.lang.Class<
              com.google.android.wearable.display.WearableDisplayHelper
            >;
            public static getObstruction(): globalAndroid.graphics.RectF;
          }
        }
      }
    }
  }
}

declare module com {
  export namespace google {
    export namespace android {
      export namespace wearable {
        export namespace input {
          export class RotaryEncoderHelper {
            public static class: java.lang.Class<
              com.google.android.wearable.input.RotaryEncoderHelper
            >;
            public static isFromRotaryEncoder(
              param0: globalAndroid.view.MotionEvent
            ): boolean;
            public static getRotaryAxisValue(
              param0: globalAndroid.view.MotionEvent
            ): number;
            public static getScaledScrollFactor(
              param0: globalAndroid.content.Context
            ): number;
          }
        }
      }
    }
  }
}

declare module com {
  export namespace google {
    export namespace android {
      export namespace wearable {
        export namespace input {
          export class WearableInputDevice {
            public static class: java.lang.Class<
              com.google.android.wearable.input.WearableInputDevice
            >;
            public static X_KEY: string;
            public static X_KEY_ROTATED: string;
            public static Y_KEY: string;
            public static Y_KEY_ROTATED: string;
            public static getAvailableButtonKeyCodes(
              param0: globalAndroid.content.Context
            ): native.Array<number>;
            public static getButtonInfo(
              param0: globalAndroid.content.Context,
              param1: number
            ): globalAndroid.os.Bundle;
          }
        }
      }
    }
  }
}

//Generics information:

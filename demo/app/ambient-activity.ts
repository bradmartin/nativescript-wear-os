/// <reference path="./typings/wearable-support.2.4.0.d.ts" />
/// <reference path="./typings/wear.d.ts" />
/// <reference path="../node_modules/tns-platform-declarations/android-25.d.ts" />

import {
  setActivityCallbacks,
  AndroidActivityCallbacks
} from 'tns-core-modules/ui/frame';
import * as application from 'tns-core-modules/application';

@JavaProxy('com.nativescript.AmbientActivity')
@Interfaces([
  android.support.wear.ambient.AmbientModeSupport.AmbientCallbackProvider
])
class AmbientActivity extends android.support.v7.app.AppCompatActivity
  implements
    android.support.wear.ambient.AmbientModeSupport.AmbientCallbackProvider {
  constructor() {
    super();
  }

  /**
   * Ambient mode controller attached to this display. Used by Activity to see if it is in ambient
   * mode.
   */
  public ambientController: android.support.wear.ambient.AmbientModeSupport.AmbientController;

  public isNativeScriptActivity;

  private _callbacks: AndroidActivityCallbacks;

  public getAmbientCallback(): android.support.wear.ambient.AmbientModeSupport.AmbientCallback {
    return new MyAmbientCallback();
  }

  public onCreate(savedInstanceState: android.os.Bundle): void {
    // Set the isNativeScriptActivity in onCreate (as done in the original NativeScript activity code)
    // The JS constructor might not be called because the activity is created from Android.
    this.isNativeScriptActivity = true;
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }

    this._callbacks.onCreate(this, savedInstanceState, super.onCreate);

    this.ambientController = android.support.wear.ambient.AmbientModeSupport.attach(
      this
    );
  }

  public onSaveInstanceState(outState: android.os.Bundle): void {
    this._callbacks.onSaveInstanceState(
      this,
      outState,
      super.onSaveInstanceState
    );
  }

  public onStart(): void {
    this._callbacks.onStart(this, super.onStart);
  }

  public onStop(): void {
    this._callbacks.onStop(this, super.onStop);
  }

  public onDestroy(): void {
    this._callbacks.onDestroy(this, super.onDestroy);
  }

  public onBackPressed(): void {
    this._callbacks.onBackPressed(this, super.onBackPressed);
  }

  public onRequestPermissionsResult(
    requestCode: number,
    permissions: Array<string>,
    grantResults: Array<number>
  ): void {
    this._callbacks.onRequestPermissionsResult(
      this,
      requestCode,
      permissions,
      grantResults,
      undefined /*TODO: Enable if needed*/
    );
  }

  public onActivityResult(
    requestCode: number,
    resultCode: number,
    data: android.content.Intent
  ): void {
    this._callbacks.onActivityResult(
      this,
      requestCode,
      resultCode,
      data,
      super.onActivityResult
    );
  }
}

class MyAmbientCallback extends android.support.wear.ambient.AmbientModeSupport
  .AmbientCallback {
  /** If the display is low-bit in ambient mode. i.e. it requires anti-aliased fonts. */
  public mIsLowBitAmbient: boolean;

  /**
   * If the display requires burn-in protection in ambient mode, rendered pixels need to be
   * intermittently offset to avoid screen burn-in.
   */
  public mDoBurnInProtection: boolean;

  public onEnterAmbient(ambientDetails: android.os.Bundle): void {
    this.mIsLowBitAmbient = ambientDetails.getBoolean(
      android.support.wear.ambient.AmbientModeSupport.EXTRA_LOWBIT_AMBIENT,
      false
    );
    this.mDoBurnInProtection = ambientDetails.getBoolean(
      android.support.wear.ambient.AmbientModeSupport.EXTRA_BURN_IN_PROTECTION,
      false
    );

    // Handle entering ambient mode
    const eventData = {
      eventName: 'enterAmbient',
      object: this,
      data: {
        isLowBitAmbient: this.mIsLowBitAmbient,
        doBurnInProtection: this.mDoBurnInProtection
      }
    };
    application.notify(eventData);
  }

  public onExitAmbient(): void {
    // Handle exiting ambient mode
    const eventData = {
      eventName: 'exitAmbient',
      object: this,
      data: {
        isLowBitAmbient: this.mIsLowBitAmbient,
        doBurnInProtection: this.mDoBurnInProtection
      }
    };
    application.notify(eventData);
  }

  public onUpdateAmbient(): void {
    // Update the content
    const eventData = {
      eventName: 'updateAmbient',
      object: this,
      data: {
        isLowBitAmbient: this.mIsLowBitAmbient,
        doBurnInProtection: this.mDoBurnInProtection
      }
    };
    application.notify(eventData);
  }
}

import {
  AndroidActivityCallbacks,
  setActivityCallbacks
} from '@nativescript/core';

@NativeClass()
@JavaProxy('com.nativescript.AmbientActivity')
@Interfaces([androidx.wear.ambient.AmbientModeSupport.AmbientCallbackProvider])
class Activity
  extends androidx.appcompat.app.AppCompatActivity
  implements androidx.wear.ambient.AmbientModeSupport.AmbientCallbackProvider {
  private _callbacks: AndroidActivityCallbacks;

  /**
   * Ambient mode controller attached to this display. Used by Activity to see if it is in ambient
   * mode.
   */
  public ambientController: androidx.wear.ambient.AmbientModeSupport.AmbientController;

  public isNativeScriptActivity;

  public getAmbientCallback() {
    return new MyAmbientCallback();
  }

  public onCreate(savedInstanceState: android.os.Bundle): void {
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }

    this._callbacks.onCreate(
      this,
      savedInstanceState,
      this.getIntent(),
      super.onCreate
    );

    this.ambientController = androidx.wear.ambient.AmbientModeSupport.attach(
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

@NativeClass()
class MyAmbientCallback extends androidx.wear.ambient.AmbientModeSupport
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
      androidx.wear.ambient.AmbientModeSupport.EXTRA_LOWBIT_AMBIENT,
      false
    );
    this.mDoBurnInProtection = ambientDetails.getBoolean(
      androidx.wear.ambient.AmbientModeSupport.EXTRA_BURN_IN_PROTECTION,
      false
    );

    // Handle entering ambient mode
    const eventData = {
      eventName: 'enterAmbient',
      object: this,
      data: {
        isLowBitAmbient: this.mIsLowBitAmbient,
        doBurnInProtection: this.mDoBurnInProtection,
      },
    };
    global.NativeScriptGlobals.events.notify(eventData);
  }

  public onExitAmbient(): void {
    // Handle exiting ambient mode
    const eventData = {
      eventName: 'exitAmbient',
      object: this,
      data: {
        isLowBitAmbient: this.mIsLowBitAmbient,
        doBurnInProtection: this.mDoBurnInProtection,
      },
    };
    global.NativeScriptGlobals.events.notify(eventData);
  }

  public onUpdateAmbient(): void {
    // Update the content
    const eventData = {
      eventName: 'updateAmbient',
      object: this,
      data: {
        isLowBitAmbient: this.mIsLowBitAmbient,
        doBurnInProtection: this.mDoBurnInProtection,
      },
    };
    global.NativeScriptGlobals.events.notify(eventData);
  }
}

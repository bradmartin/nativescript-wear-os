import { Application, Utils } from '@nativescript/core';
const FAILURE_ACTIVITY_REQUEST_CODE = 5675;

/**
 * Show the Failure Activity from the SmartWearOs Library.
 * @param msg? [string] - The message to show for failure/error action.
 * @param dismissTime? [number] - The time in seconds until the failure activity closes. Default is 3 seconds.
 */
export const showFailure = (msg?: string, dismissTime = 3) => {
  return new Promise((resolve, reject) => {
    // create the intent
    const intent = new android.content.Intent(
      Utils.android.getApplicationContext(),
      (com as any).github.bradmartin.smartwearos.FailureActivity.class
    );

    if (msg) {
      intent.putExtra('MESSAGE', msg);
    }
    intent.putExtra('DISMISS_TIMEOUT', dismissTime);

    // start the failure activity
    const activity: android.app.Activity =
      Application.android.foregroundActivity ||
      Application.android.startActivity;
    activity.startActivityForResult(intent, FAILURE_ACTIVITY_REQUEST_CODE);

    activity.onActivityResult = (requestCode, resultCode, data) => {
      // Check which request we're responding to
      if (requestCode === FAILURE_ACTIVITY_REQUEST_CODE) {
        resolve();
      }
    };
  });
};

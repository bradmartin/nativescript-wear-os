import * as app from 'tns-core-modules/application';
import { ad as androidUtils } from 'tns-core-modules/utils/utils';
const SUCCESS_ACTIVITY_REQUEST_CODE = 5674;

/**
 * Show the Success Activity from the SmartWearOs Library.
 * @param msg [string] - The message to show for successful action.
 * @param dismissTime [number] - The time in seconds until the success activity closes. Default is 3 seconds.
 */
export const showSuccess = (msg?: string, dismissTime = 3) => {
  return new Promise((resolve, reject) => {
    // create the intent
    const intent = new android.content.Intent(
      androidUtils.getApplicationContext(),
      (com as any).github.bradmartin.smartwearos.SuccessActivity.class
    );

    if (msg) {
      intent.putExtra('MESSAGE', msg);
    }
    intent.putExtra('DISMISS_TIMEOUT', dismissTime);

    // start the success activity
    const activity: android.app.Activity =
      app.android.foregroundActivity || app.android.startActivity;
    activity.startActivityForResult(intent, SUCCESS_ACTIVITY_REQUEST_CODE);

    activity.onActivityResult = (requestCode, resultCode, data) => {
      // Check which request we're responding to
      if (requestCode === SUCCESS_ACTIVITY_REQUEST_CODE) {
        return resolve();
      }
    };
  });
};

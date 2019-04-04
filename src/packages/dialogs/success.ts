import { ad as androidUtils } from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';
const SUCCESS_ACTIVITY_REQUEST_CODE = 5673;

/**
 * Show the Success Activity from the Cowabunga Library.
 * @param msg [string] - The message to show for successful action.
 * @param dismissTime [number] - The time in seconds until the success activity closes. Default is 3 seconds.
 */
export const showSuccess = (msg?: string, dismissTime = 3) => {
  // create the intent
  const intent = new android.content.Intent(
    androidUtils.getApplicationContext(),
    (com as any).github.bradmartin.cowabunga.SuccessActivity.class
  );
  intent.putExtra('MESSAGE', msg);
  intent.putExtra('DISMISS_TIMEOUT', dismissTime);

  // start the success activity
  const activity = app.android.foregroundActivity || app.android.startActivity;
  activity.startActivityForResult(intent, SUCCESS_ACTIVITY_REQUEST_CODE);
};

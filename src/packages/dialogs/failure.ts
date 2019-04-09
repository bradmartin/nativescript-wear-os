import { ad as androidUtils } from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';
const FAILURE_ACTIVITY_REQUEST_CODE = 5673;

/**
 * Show the Failure Activity from the Cowabunga Library.
 * @param msg? [string] - The message to show for failure/error action.
 * @param dismissTime? [number] - The time in seconds until the failure activity closes. Default is 3 seconds.
 */
export const showFailure = (msg?: string, dismissTime = 3) => {
  // create the intent
  const intent = new android.content.Intent(
    androidUtils.getApplicationContext(),
    (com as any).github.bradmartin.smartwearos.FailureActivity.class
  );
  intent.putExtra('MESSAGE', msg);
  intent.putExtra('DISMISS_TIMEOUT', dismissTime);

  // start the failure activity
  const activity = app.android.foregroundActivity || app.android.startActivity;
  activity.startActivityForResult(intent, FAILURE_ACTIVITY_REQUEST_CODE);
};

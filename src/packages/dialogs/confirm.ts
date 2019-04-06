import { ad as androidUtils } from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';
const CONFIRMATION_ACTIVITY_REQUEST_CODE = 5673;

/**
 * Show the Failure Activity from the Cowabunga Library.
 * @param msg [string] - The message to show for failure/error action.
 * @param title? [string] - The title of the dialog
 */
export const confirm = (msg: string, title?: string) => {
  return new Promise((resolve, reject) => {
    // create the intent
    const intent = new android.content.Intent(
      androidUtils.getApplicationContext(),
      (com as any).github.bradmartin.cowabunga.ConfirmationActivity.class
    );

    intent.putExtra('MESSAGE', msg);
    if (title) {
      intent.putExtra('TITLE', title);
    }

    // start the failure activity
    const activity =
      app.android.foregroundActivity || app.android.startActivity;
    activity.startActivityForResult(intent, CONFIRMATION_ACTIVITY_REQUEST_CODE);

    activity.onActivityResult = (requestCode, resultCode, data) => {
      // Check which request we're responding to
      if (requestCode === CONFIRMATION_ACTIVITY_REQUEST_CODE) {
        if (resultCode === android.app.Activity.RESULT_OK) {
          return resolve(true);
        } else if (resultCode === android.app.Activity.RESULT_CANCELED) {
          return resolve(false);
        } else {
          return resolve(null);
        }
      }
    };
  });
};

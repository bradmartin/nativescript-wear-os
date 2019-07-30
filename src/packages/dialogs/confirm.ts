import * as app from 'tns-core-modules/application';
import { ad as androidUtils } from 'tns-core-modules/utils/utils';
const CONFIRMATION_ACTIVITY_REQUEST_CODE = 5673;

/**
 * Show the Failure Activity from the SmartWearOs Library.
 * @param options [ConfirmOptions] - Options for the confirmation dialog.
 */
export const confirm = (options: ConfirmOptions) => {
  return new Promise((resolve, reject) => {
    // create the intent
    const intent = new android.content.Intent(
      androidUtils.getApplicationContext(),
      (com as any).github.bradmartin.smartwearos.ConfirmationActivity.class
    );

    intent.putExtra('MESSAGE', options.message);
    if (options.title) {
      intent.putExtra('TITLE', options.title);
    }
    if (options.autoCloseTime) {
      intent.putExtra('AUTO_CLOSE_TIME', options.autoCloseTime);
    }

    // start the confirm activity
    const activity: android.app.Activity =
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

export interface ConfirmOptions {
  /**
   * The message to show for failure/error action.
   */
  message: string;

  /**
   * The title of the dialog
   */
  title?: string;

  /**
   * Time in seconds to auto close the confirm dialog.
   * Will result in the promise resolving false if user makes no selection after the provided time.
   */
  autoCloseTime?: number;
}

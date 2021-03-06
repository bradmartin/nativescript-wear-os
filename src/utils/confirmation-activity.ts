import {
  AndroidActivityResultEventData,
  AndroidApplication,
  Application,
  Utils
} from '@nativescript/core';

const CONFIRMATION_ACTIVITY_REQUEST_CODE = 5673;

export function showConfirmationActivity(
  message: string,
  type: ConfirmationActivityType
) {
  return new Promise((resolve, reject) => {
    try {
      const activityType = _getActivityType(type);

      // create the intent
      const intent = new android.content.Intent(
        Utils.android.getApplicationContext(),
        android.support.wearable.activity.ConfirmationActivity.class
      ) as android.content.Intent;
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity
          .EXTRA_ANIMATION_TYPE,
        activityType
      );
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity.EXTRA_MESSAGE,
        message
      );

      // handle the speech result
      Application.android.on(
        AndroidApplication.activityResultEvent,
        (args: AndroidActivityResultEventData) => {
          if (
            args.requestCode === CONFIRMATION_ACTIVITY_REQUEST_CODE &&
            args.resultCode === android.app.Activity.RESULT_OK
          ) {
            const intentData = args.intent as android.content.Intent;
            resolve(intentData);
          }
        }
      );

      // start the speech activity
      const activity: android.app.Activity =
        Application.android.foregroundActivity ||
        Application.android.startActivity;
      activity.startActivityForResult(
        intent,
        CONFIRMATION_ACTIVITY_REQUEST_CODE
      );
    } catch (error) {
      reject(error);
    }
  });
}

export enum ConfirmationActivityType {
  'SUCCESS' = 'SUCCESS',
  'FAILURE' = 'FAILURE',
  'OPEN_ON_PHONE' = 'OPEN_ON_PHONE',
}

function _getActivityType(type: ConfirmationActivityType) {
  switch (type) {
    case ConfirmationActivityType.SUCCESS:
      return android.support.wearable.activity.ConfirmationActivity
        .SUCCESS_ANIMATION;
    case ConfirmationActivityType.FAILURE:
      return android.support.wearable.activity.ConfirmationActivity
        .FAILURE_ANIMATION;
    case ConfirmationActivityType.OPEN_ON_PHONE:
      return android.support.wearable.activity.ConfirmationActivity
        .OPEN_ON_PHONE_ANIMATION;
    default:
      return android.support.wearable.activity.ConfirmationActivity
        .SUCCESS_ANIMATION;
  }
}

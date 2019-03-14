/// <reference path="../../typings/wearable-support-2.4.0.d.ts" />
/// <reference path="../../node_modules/tns-platform-declarations/android-25.d.ts" />

import { ad as androidUtils } from 'tns-core-modules/utils/utils';
import * as app from 'tns-core-modules/application';

const CONFIRMATION_SUCCESS_REQUEST_CODE = 5673;
const CONFIRMATION_FAILURE_REQUEST_CODE = 5674;
const OPEN_ON_PHONE_REQUEST_CODE = 5675;

export function showSuccessActivity(message: string) {
  return new Promise((resolve, reject) => {
    try {
      // create the intent
      const intent = new android.content.Intent(
        androidUtils.getApplicationContext(),
        android.support.wearable.activity.ConfirmationActivity.class
      ) as android.content.Intent;
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity
          .EXTRA_ANIMATION_TYPE,
        android.support.wearable.activity.ConfirmationActivity.SUCCESS_ANIMATION
      );
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity.EXTRA_MESSAGE,
        message
      );

      // handle the speech result
      app.android.on(
        app.AndroidApplication.activityResultEvent,
        (args: app.AndroidActivityResultEventData) => {
          if (
            args.requestCode === CONFIRMATION_SUCCESS_REQUEST_CODE &&
            args.resultCode === android.app.Activity.RESULT_OK
          ) {
            const intentData = args.intent as android.content.Intent;
            resolve(intentData);
          }
        }
      );

      // start the speech activity
      const activity: android.app.Activity =
        app.android.foregroundActivity || app.android.startActivity;
      activity.startActivityForResult(
        intent,
        CONFIRMATION_SUCCESS_REQUEST_CODE
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function showFailureActivity(message: string) {
  return new Promise((resolve, reject) => {
    try {
      // create the intent
      const intent = new android.content.Intent(
        androidUtils.getApplicationContext(),
        android.support.wearable.activity.ConfirmationActivity.class
      ) as android.content.Intent;
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity
          .EXTRA_ANIMATION_TYPE,
        android.support.wearable.activity.ConfirmationActivity.FAILURE_ANIMATION
      );
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity.EXTRA_MESSAGE,
        message
      );

      // handle the speech result
      app.android.on(
        app.AndroidApplication.activityResultEvent,
        (args: app.AndroidActivityResultEventData) => {
          if (
            args.requestCode === CONFIRMATION_FAILURE_REQUEST_CODE &&
            args.resultCode === android.app.Activity.RESULT_OK
          ) {
            const intentData = args.intent as android.content.Intent;
            resolve(intentData);
          }
        }
      );

      // start the speech activity
      const activity: android.app.Activity =
        app.android.foregroundActivity || app.android.startActivity;
      activity.startActivityForResult(
        intent,
        CONFIRMATION_FAILURE_REQUEST_CODE
      );
    } catch (error) {
      reject(error);
    }
  });
}

export function showOpenOnPhoneActivity(message: string) {
  return new Promise((resolve, reject) => {
    try {
      // create the intent
      const intent = new android.content.Intent(
        androidUtils.getApplicationContext(),
        android.support.wearable.activity.ConfirmationActivity.class
      ) as android.content.Intent;
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity
          .EXTRA_ANIMATION_TYPE,
        android.support.wearable.activity.ConfirmationActivity.FAILURE_ANIMATION
      );
      intent.putExtra(
        android.support.wearable.activity.ConfirmationActivity.EXTRA_MESSAGE,
        message
      );

      // handle the speech result
      app.android.on(
        app.AndroidApplication.activityResultEvent,
        (args: app.AndroidActivityResultEventData) => {
          if (
            args.requestCode === OPEN_ON_PHONE_REQUEST_CODE &&
            args.resultCode === android.app.Activity.RESULT_OK
          ) {
            const intentData = args.intent as android.content.Intent;
            resolve(intentData);
          }
        }
      );

      // start the speech activity
      const activity: android.app.Activity =
        app.android.foregroundActivity || app.android.startActivity;
      activity.startActivityForResult(intent, OPEN_ON_PHONE_REQUEST_CODE);
    } catch (error) {
      reject(error);
    }
  });
}

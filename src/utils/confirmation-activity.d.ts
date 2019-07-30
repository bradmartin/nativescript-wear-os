export declare function showConfirmationActivity(message: string, type: ConfirmationActivityType): Promise<unknown>;
export declare enum ConfirmationActivityType {
    'SUCCESS' = "SUCCESS",
    'FAILURE' = "FAILURE",
    'OPEN_ON_PHONE' = "OPEN_ON_PHONE"
}

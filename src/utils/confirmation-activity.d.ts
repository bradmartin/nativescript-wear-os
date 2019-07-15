export declare function showConfirmationActivity(message: string, type: ConfirmationActivityType): Promise<{}>;
export declare enum ConfirmationActivityType {
    'SUCCESS' = "SUCCESS",
    'FAILURE' = "FAILURE",
    'OPEN_ON_PHONE' = "OPEN_ON_PHONE"
}

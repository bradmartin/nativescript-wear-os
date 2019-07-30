export declare const confirm: (options: ConfirmOptions) => Promise<unknown>;
export interface ConfirmOptions {
    message: string;
    title?: string;
    autoCloseTime?: number;
}

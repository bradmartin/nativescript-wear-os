export declare const confirm: (options: ConfirmOptions) => Promise<{}>;
export interface ConfirmOptions {
    message: string;
    title?: string;
    autoCloseTime?: number;
}

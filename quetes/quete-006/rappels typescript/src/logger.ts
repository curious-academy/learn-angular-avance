export interface LoggerInformation {
    message: string;
    date: Date;
}

export function log<T extends LoggerInformation>(data: T): void {
    console.info(data.message);
}
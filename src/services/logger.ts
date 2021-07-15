/* eslint-disable no-console */

export class Logger {
    static log(message: string): void {
        console.log(message);
    }

    static err(err: string | Error): void {
        console.error(err);
    }
}

export class WhoAmIError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "WhoAmIError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
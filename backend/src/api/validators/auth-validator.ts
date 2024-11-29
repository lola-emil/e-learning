import { User } from "../../models/user";

type FieldError = {
    [key: string]: string
};

export function validateLogin(data: User) {
    let errors: FieldError = {};

    return errors;
}

export function validateReigster(data: User) {
    let errors: FieldError = {};

    return errors;
}
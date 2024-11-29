import { User } from "../../models/user";

type FieldError = {
    [key: string]: string
};

export async function validateUser(data: User) {
    let errors: FieldError = {};

    return errors;
}

export async function validateUserUpdate(data: Partial<User>) {
    let errors: FieldError = {};
    return errors;   
}
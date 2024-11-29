import type { Request, Response } from "express";
import * as UserRepo from "../../models/user";
import { validateLogin, validateReigster } from "../validators/auth-validator";
import { ErrorResponse } from "../../middlewares/errorhandler";

type AuthResponse = {
    message: string,
    token?: string 
};

export async function login(req: Request, res: Response) {
    const body = req.body;
    const errors = validateLogin(body);

    // Validate ang login credentials
    if (errors) 
        throw new ErrorResponse(422, "", errors);

    const response: AuthResponse = {
        message: "Sign in successful.",
    };

    return res.status(200).json(response)
}

export async function register(req: Request, res: Response) {
    const body = req.body;
    const errors = validateReigster(body);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    const response: AuthResponse = {
        message: "Registration successful."
    };
}

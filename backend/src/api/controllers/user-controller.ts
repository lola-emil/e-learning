import type {Request, Response} from "express";
import * as UserRepo from "../../models/user";
import { validateUser, validateUserUpdate } from "../validators/user-validator";
import { ErrorResponse } from "../../middlewares/errorhandler";


export async function saveUser(req: Request, res: Response) {
    const body = req.body;
    const errors = await validateUser(body);
    
    if (errors)
        throw new ErrorResponse(422, "", errors);

    return res.status(200).json({
        message: "User saved"
    })
}

export async function getUsers(req: Request, res: Response) {
    const query = req.query;   
    const users = await UserRepo.find(query);
    return res.status(200).json(users);
}

export async function updateUser(req: Request, res: Response) {
    const body = req.body;
    const userId = parseInt(req.params.userId);

    const errors = await validateUserUpdate(body);

    if (errors)
        throw new ErrorResponse(422, "", errors);

    // TODO: kinahanglan ug validator

    const result = await UserRepo.updateById(userId, body);

    // TODO: dapat response pud niya ang updated nga object
    return res.status(200).json({
        message: "Updated successfully"
    });
}
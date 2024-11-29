import { db } from "../config/database";


const TBL_NAME = "users";
export type User = {
    id: number,
    firstname: string,
    lastname: string,
    middlename?: string,

    gender: "male" | "female"

    createdAt: Date,
    updatedAt: Date
};


export async function find(query: Partial<User>) {
    const result = await db<User>(TBL_NAME).select(query);
    return result;
}

export async function save(data: Partial<User>) {
    const result = await db<User>(TBL_NAME).insert(data);
    return result;
}

export async function updateById(id:number, data: Partial<User>)  {
    const result = db<User>(TBL_NAME).update(data).where("id", id);
    return result;
}
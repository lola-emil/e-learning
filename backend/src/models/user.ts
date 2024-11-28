


type User = {
    id: number,
    firstname: string,
    lastname: string,
    middlename?: string,

    gender: "male" | "female"

    createdAt: Date,
    updatedAt: Date
};
import * as dotenv from "dotenv";

// dotenv
dotenv.config();


const PORT = process.env["PORT"] ?? "5000";
const DB_NAME = process.env["DB_NAME"] ?? "";



export {
    PORT,
    DB_NAME
}
import { Router } from "express";
import asyncHandler from "../../middlewares/asynchandler";
import * as UserController from "../controllers/user-controller";

const router = Router();


router.get("/", asyncHandler(UserController.getUsers));
router.post("/", asyncHandler(UserController.saveUser));
router.patch("/:id", asyncHandler(UserController.updateUser));

export default router;  
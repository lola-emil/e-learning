import { Router } from "express";
import asyncHandler from "../../middlewares/asynchandler";
import * as AuthController from "../controllers/auth-controller";

const router = Router();

router.post("/login", asyncHandler(AuthController.login));
router.post("/register", asyncHandler(AuthController.register));

export default router;
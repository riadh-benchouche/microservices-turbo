import express from "express";
import { register, login, logout } from "../routes/authRoutes.js";
import authMiddleware from "../middleware/verifyToken.ts";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);

export default router;

// @ts-ignore
import express from "express";
import { getPosts, getPost, createPost, deletePost, updatePost } from "../routes/postsRoutes.ts";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

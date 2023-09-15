// @ts-ignore
import express from "express";
import {getProjects, getProject, createProject, deleteProject, updateProject} from "../routes/projectsRoutes.ts";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;

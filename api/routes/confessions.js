import express from "express";
import { getConfessions, addConfession, deleteConfession } from "../controllers/confession.js";

const router = express.Router();

router.get("/", getConfessions);
router.post("/", addConfession);
router.delete("/:id", deleteConfession);

export default router;
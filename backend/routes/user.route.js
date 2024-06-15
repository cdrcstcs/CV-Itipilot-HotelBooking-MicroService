import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

export default router;

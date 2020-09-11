import express from "express";
import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  createUser,
} from "./usersRoutes.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

router.post("/", createUser);

export default router;

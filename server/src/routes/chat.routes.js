import express from "express";
import protect from "../middleware/auth.middleware.js";

import {
  createChat,
  getChats,
  saveMessage,
  getSingleChat,
  deleteChat,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", protect, createChat);
router.get("/:id", protect, getSingleChat);
router.get("/", protect, getChats);
router.post("/message", protect, saveMessage);
router.delete("/:id", protect, deleteChat);

export default router;
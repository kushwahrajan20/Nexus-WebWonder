import express from "express";
import { copost } from "../controller/CoPost.controller.js";

const router = express.Router()

router.post("/copost",copost)

export default router;
import express from "express";
import { copost,getcopost } from "../controller/CoPost.controller.js";

const router = express.Router()

router.post("/copost",copost)
router.get("/show_copost",getcopost)

export default router;
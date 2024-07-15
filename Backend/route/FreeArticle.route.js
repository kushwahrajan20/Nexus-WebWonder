import express from 'express';
import { getFreeArticle } from '../controller/FreeArticle.controller.js';

const router=express.Router()

router.get("/",getFreeArticle)

export default router
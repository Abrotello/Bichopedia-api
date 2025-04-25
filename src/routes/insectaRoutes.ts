import { getInsecta } from "../controllers/insectaController";
import { Router } from "express";

export const InsectaRouter = Router()
InsectaRouter.get("/", getInsecta)
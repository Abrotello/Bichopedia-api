import { getArachnida } from "../controllers/arachnidaController"
import  { Router } from "express"

export const ArachnidaRouter = Router()
ArachnidaRouter.get("/", getArachnida)

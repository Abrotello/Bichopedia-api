import { arachnidaSchema } from "../schemas/arachnidaSchema";
import { Request, Response } from "express";

export const getArachnida = async( req: Request, res: Response ) => {
    res.status(200).json({
        clase: arachnidaSchema.tax.class,
    })
}
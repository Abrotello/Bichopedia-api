import { insectaSchema } from "../schemas/insectaSchema";
import { Request, Response } from "express";


export const getInsecta = async( req: Request, res: Response ) => {
    res.status(200).json({
        clase: insectaSchema.tax.class,
    })
}
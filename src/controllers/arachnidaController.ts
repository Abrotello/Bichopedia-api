import { Request, Response } from "express";
import { createArachnidaInstance } from "../model/Arthropoda/arachnida";

export const getArachnida = async( req: Request, res: Response ) => {
    const response = await createArachnidaInstance()
    res.status(200).json({
        data: response
    })
}
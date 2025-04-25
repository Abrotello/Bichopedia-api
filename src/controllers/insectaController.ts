import { Request, Response } from "express";
import { newInsecta } from "../model/insecta";


export const getInsecta = async( req: Request, res: Response ) => {
    res.status(200).json({
        insecta: newInsecta
    })
}
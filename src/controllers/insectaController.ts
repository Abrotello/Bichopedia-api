import { Request, Response } from "express";
import { createInsectInstance } from "../model/insecta";


export const getInsecta = async( req: Request, res: Response ) => {
    const response = await createInsectInstance()
    res.status(200).json({
        data: response
    })
}
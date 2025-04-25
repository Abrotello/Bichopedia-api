import { InsectaSchema } from "../schemas/insectaSchema"
import { getInsectaData } from "../data/fetchDataInsect"


export const createInsectInstance = async () => {
    const data = await getInsectaData()
    return data
}
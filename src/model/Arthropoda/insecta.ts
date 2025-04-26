// import { InsectaSchema } from "../../schemas/Arthropoda/insectaSchema"
import { getInsectaData } from "../../APIs/fetchDataInsect"
import { getNaturalistData, NaturalistData } from "../Naturalist/data"


export const createInsectInstance = async () => {
    const data = await getInsectaData()
    const naturalistData: NaturalistData[] = getNaturalistData(data)

    return naturalistData
}
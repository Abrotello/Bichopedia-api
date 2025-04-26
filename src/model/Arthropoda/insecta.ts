// import { InsectaSchema } from "../../schemas/Arthropoda/insectaSchema"
import { fetchDataFromNaturalist } from "../../APIs/Naturalist/fetchData"
import { mapNaturalistData, NaturalistData } from "../Naturalist/data"


export const createInsectInstance = async () => {
    const data = await fetchDataFromNaturalist(47158)
    const naturalistData: NaturalistData[] = mapNaturalistData(data)

    return naturalistData
}
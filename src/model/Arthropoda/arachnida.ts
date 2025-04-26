import { getArachnidaData } from "../../APIs/fetchDataArachnida";
import { getNaturalistData, NaturalistData } from "../Naturalist/data";

export const createArachnidaInstance = async () => {
    const data = await getArachnidaData()
    const naturalistData: NaturalistData[] = getNaturalistData(data)

    return naturalistData
}
import { fetchDataFromNaturalist } from "../../APIs/Naturalist/fetchData";
import { mapNaturalistData, NaturalistData } from "../../mappers/Naturalist/data";

export const createArachnidaInstance = async () => {
    const data = await fetchDataFromNaturalist(47119)
    const naturalistData: NaturalistData[] = mapNaturalistData(data)

    return naturalistData
}
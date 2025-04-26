export interface NaturalistData {
    scientifiName: string,
    photo: string | string[],
    license: {
        code: string,
        attribution: string,
    },
}

export const getNaturalistData = (results: []): NaturalistData[] => {
    const data: NaturalistData[] = []

    for (const result of results) {
        const scientificName = getScientificName(result["taxon"])
        const license = getLicence(result["taxon"])
        const photos = getPhotos(result["taxon"])

        data.push({
            scientifiName: scientificName,
            photo: photos,
            license: {attribution: license.attribution, code: license.license}
        })
    }
    
    return data
}


const getScientificName = (result: {[key: string]: any}): string => {
    const scientificName = result["name"]
    return scientificName
}

const getLicence = (result: {[key: string]: any}): {license: string, attribution: string} => {
    const license = result["default_photo"]["license_code"]
    const attribution = result["default_photo"]["attribution"]
    return {
        license: license? license : "No license code",
        attribution: attribution
    }
}

const getPhotos = (result: {[key: string]: any}): string | string[] => {
    const photos = result["default_photo"]["medium_url"]
    return photos
}

const getInsectaDataByName = async (name: string) => {}
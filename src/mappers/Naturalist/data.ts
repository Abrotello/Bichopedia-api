export interface NaturalistData {
    name: {
        scientificName: string,
        commonName: string[] | string,
    }
    photo: string | string[],
    license: {
        code: string,
        attribution: string,
    },
    id: number,
}

export const mapNaturalistData = (results: []): NaturalistData[] => {
    const data: NaturalistData[] = []

    for (const result of results) {
        const names = getNames(result["taxon"])
        const license = getLicence(result["taxon"])
        const photos = getPhotos(result["taxon"])

        data.push({
            name: {
                scientificName: names.scientificName,
                commonName: names.commonName
            },
            photo: photos,
            license: {attribution: license.attribution, code: license.license},
            id: getId(result["taxon"])
        })
    }
    
    return data
}


const getNames = (result: {[key: string]: any}): {scientificName: string, commonName: string[] | string} => {
    const scientificName = result["name"]
    const commonName = result["preferred_common_name"]
    return {
        scientificName, 
        commonName
    }
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

const getId = ( result: {[key: string]: any} ): number => {
    return result["id"]
}

const getInsectaDataByName = async (name: string) => {}
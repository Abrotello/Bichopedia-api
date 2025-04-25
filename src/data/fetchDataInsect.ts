// Example of fetching data from iNaturalist
// {
//     "id": 47158,
//     "rank": "class",
//     "rank_level": 50,
//     "iconic_taxon_id": 47158,
//     "ancestor_ids": [
//       48460,
//       1,
//       47120,
//       372739,
//       47158
//     ],
//     "is_active": true,
//     "name": "Insecta",
//     "parent_id": 372739,
//     "ancestry": "48460/1/47120/372739",
//     "extinct": false,
//     "default_photo": {
//       "id": 18333696,
//       "license_code": "cc-by",
//       "attribution": "(c) TOUROULT Julien, some rights reserved (CC BY), uploaded by TOUROULT Julien",
//       "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18333696/square.jpeg",
//       "original_dimensions": {
//         "height": 1357,
//         "width": 2048
//       },
//       "flags": [],
//       "square_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18333696/square.jpeg",
//       "medium_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18333696/medium.jpeg"
//     },
//     "taxon_changes_count": 3,
//     "taxon_schemes_count": 2,
//     "observations_count": 63526828,
//     "flag_counts": {
//       "resolved": 43,
//       "unresolved": 0
//     },
//     "current_synonymous_taxon_ids": null,
//     "atlas_id": null,
//     "complete_species_count": null,
//     "wikipedia_url": "http://en.wikipedia.org/wiki/Insect",
//     "complete_rank": "order",
//     "iconic_taxon_name": "Insecta",
//     "preferred_common_name": "Insects"
// },

export const getInsectaData = async () => {
    const taxId = 47158
    const page = Math.floor(Math.random() * 20) + 1
    const url = `https://api.inaturalist.org/v1/observations?taxon_id=${taxId}`

    const params: {} = {
        "taxon_id": taxId,
        "taxa": "Insecta",
        "quality_grade": "research",
        "per_page": 5,
        "page": page,
    }

    try {
        const response = await fetch(`${url}&${new URLSearchParams(params)}`, {
            method: "GET",
        })

        if (!response.ok) throw new Error(`HTTP error ${response.status}`)
        
        const data = await response.json()
        const scientificNames: string[] = getScientificNames(data["results"])
        return scientificNames

    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}

const getScientificNames = (results: []): string[] => {
    const names: string[] = []
    for ( const result of results ) {
        names.push(result["taxon"]["name"])
    }
    return names
}

export const getInsectaDataByName = async (name: string) => {

}
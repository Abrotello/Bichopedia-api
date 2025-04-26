import { getTwoRandomIntervals } from "../../utils/helpers"

export const fetchDataFromNaturalist = async ( taxId: number ): Promise<[]> => {
    const page = Math.floor(Math.random() * 10) + 1
    const url = `https://api.inaturalist.org/v1/observations?taxon_id=${taxId}`

    const params: {} = {
        "taxon_id": taxId,
        "taxa": "Arachnida",
        "quality_grade": "research",
        "per_page": 200,
        "page": page,
    }

    try {
        const response = await fetch(`${url}&${new URLSearchParams(params)}`, {
            method: "GET",
        })

        if (!response.ok) throw new Error(`HTTP error ${response.status}`)
        
        const data = await response.json()
        const results = data["results"]
        const [start, end] = getTwoRandomIntervals(results.length)

        return results.slice(start, end)


    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}
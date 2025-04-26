export const getInsectaData = async (): Promise<[]> => {
    const taxId = 47158
    const page = Math.floor(Math.random() * 10) + 1
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
        return data["results"]

    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}
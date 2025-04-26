type conservationStatus = "Extinct (EX)" | "Extinct in the Wild (EW)" | "Critically Endangered (CR)" | "Endangered (EN)" | "Vulnerable (VU)" | "Near Threatened (NT)" | "Least Concern (LC)" | "Data Deficient (DD)" | "Not Evaluated (NE)";
type arthropodClass = "Arachnida" | "Insecta"

export interface Taxonomy {
    Domain: "Eukaryota"
    kingdom: "Animalia",
    phylum: "Arthropoda",
    subclass?: string,
    class: arthropodClass,
    order: string,
    suborder?: string,
    family?: string,
    genus?: string,
    species?: string,
}

export interface Name {
    common: string,
    scientific: string,
    others?: string[],
}

export interface Behavior {
    habitat: string,
    diet: string,
    role: string,
}

export interface Information {
    plague: boolean,
    distribution: string[],
    images?: string[],
    license?: {
        code: string,
        attribution: string
    }
    conservationStatus: conservationStatus,
}

export interface Medical {
    venomous: boolean,
    sympthoms: string[],
}
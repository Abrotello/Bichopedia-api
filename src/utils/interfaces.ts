type conservationStatus = "Extinct (EX)" | "Extinct in the Wild (EW)" | "Critically Endangered (CR)" | "Endangered (EN)" | "Vulnerable (VU)" | "Near Threatened (NT)" | "Least Concern (LC)" | "Data Deficient (DD)" | "Not Evaluated (NE)";

export interface Taxonomy {
    kingdom: string,
    phylum: string,
    class: string,
    order: string,
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
    conservationStatus: conservationStatus,
}

export interface Medical {
    venomous: boolean,
    sympthoms: string[],
}
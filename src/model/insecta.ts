import { InsectaSchema } from "../schemas/insectaSchema";

export const newInsecta: InsectaSchema = {
    tax: {
        kingdom: "Animalia",
        phylum: "Arthropoda",
        class: "Insecta",
        order: "Lepidoptera"
    },

    name: {
        common: "Moth",
        scientific: "Lepidoptera",
        others: ["Butterfly"]
    },

    behavior: {
        habitat: "Forests, grasslands, and wetlands",
        diet: "Nectar, fruit, and tree sap",
        role: "Pollinator"
    }, 

    information: {
        plague: false,
        distribution: ["Worldwide"],
        conservationStatus: "Not Evaluated (NE)",
    },

    medical: {
        venomous: false,
        sympthoms: ["None"],
    }
}
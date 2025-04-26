import { 
    Taxonomy,
    Name,
    Behavior,
    Information,
    Medical,
} from '../utils/interfaces'

interface ArachnidaSchema {
    tax: Taxonomy,
    name: Name,
    behavior: Behavior,
    information: Information,
    medical: Medical,
}

export const arachnidaSchema: ArachnidaSchema = {
    tax: {} as Taxonomy,
    name: {} as Name,
    behavior: {} as Behavior,
    information: {} as Information,
    medical: {} as Medical,
};
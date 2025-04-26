import { 
    Taxonomy,
    Name,
    Behavior,
    Information,
    Medical,
} from '../../utils/interfaces'

export interface InsectaSchema {
    tax: Taxonomy,
    name: Name,
    behavior: Behavior,
    information: Information,
    medical: Medical,
}
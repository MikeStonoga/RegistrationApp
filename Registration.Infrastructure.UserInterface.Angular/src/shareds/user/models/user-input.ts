import { FullAuditedEntityInput } from "src/sdk/interfaces/DTOs/full-audited-entity-input.abstraction";
import { EducationLevels } from "./education-levels.enum";

export interface UserInput extends FullAuditedEntityInput {
    emailAddress: string,
    birthDate: Date
    educationLevel: EducationLevels
}
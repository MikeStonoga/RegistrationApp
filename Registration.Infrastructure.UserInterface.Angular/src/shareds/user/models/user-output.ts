import { FullAuditedEntityOutput } from "src/sdk/interfaces/DTOs/full-audited-entity-output.abstraction";
import { EducationLevels } from "./education-levels.enum";

export interface UserOutput extends FullAuditedEntityOutput {
    emailAddress: string,
    birthDate: Date
    formattedBirthDate: string;
    educationLevel: EducationLevels
    educationLevelName: string;
}
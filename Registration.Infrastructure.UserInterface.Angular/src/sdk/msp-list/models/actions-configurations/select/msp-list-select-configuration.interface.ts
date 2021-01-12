import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";
import { IHaveActionDefinition } from "../IHaveActionDefinition.interface";
import { IMayHavePermission } from "../IHavePermission.interface";


export interface MspListSelectConfiguration<TOutput extends EntityOutput> extends IMayHavePermission, IHaveActionDefinition<SelectActionDefinition<TOutput>> {}
export type SelectActionDefinition<TOutput extends EntityOutput> = (entityOutput: TOutput) => void;

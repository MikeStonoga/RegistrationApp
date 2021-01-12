import {Directive} from "@angular/core";
import {EntityInput} from "./entity-input.abstraction";

@Directive()
export abstract class FullAuditedEntityInput extends EntityInput {
   creatorId: string;
   creationTime: Date;
   lastModifierId: string | null;
   lastModificationTime: Date | null;
}

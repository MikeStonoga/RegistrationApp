import {EntityOutput} from "./entity-output.abstraction";
import {Directive} from "@angular/core";

@Directive()
export abstract class FullAuditedEntityOutput extends EntityOutput{
  creatorId: string;
  creationTime: Date;
  lastModifierId: string | null;
  lastModificationTime: Date | null;
}

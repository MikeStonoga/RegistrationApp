import {Directive} from "@angular/core";

@Directive()
export abstract class EntityInput {
  id: string;
  firstName: string;
  lastName: string;
}

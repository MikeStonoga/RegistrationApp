import {Directive} from "@angular/core";

@Directive()
export abstract class EntityOutput {
  id: string;
  firstName: string;
  lastName: string;
}
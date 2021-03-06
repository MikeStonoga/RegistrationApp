﻿import { Observable } from 'rxjs';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import {  MspApiResponseWithOutput } from 'src/sdk/interfaces/DTOs/msp-api-response.interface';
import { IHaveActionDefinition } from '../IHaveActionDefinition.interface';
import { IHaveComponentOrTemplateRef } from '../IHaveComponentOrTemplateRef.interface';
import { IHaveModalTitle } from '../IHaveModalTitle.interface';
import { IMayHavePermission } from '../IHavePermission.interface';
import {MspListButtonConfiguration} from "../msp-list-button-configuration.interface";

export interface MspListUpdateConfiguration<TOutput extends EntityOutput, TEntityManipulationInput, TComponentOrTemplateRef>
  extends MspListButtonConfiguration, IMayHavePermission, IHaveModalTitle,
    IHaveActionDefinition<UpdateActionDefinition<TEntityManipulationInput, TOutput>>, IHaveComponentOrTemplateRef<TComponentOrTemplateRef> {
  inputManipulationModalData?: any;
}
export type UpdateActionDefinition<TEntityManipulationInput, TOutput extends EntityOutput> = (entityOutput: TEntityManipulationInput) => Observable<MspApiResponseWithOutput<TOutput>>;

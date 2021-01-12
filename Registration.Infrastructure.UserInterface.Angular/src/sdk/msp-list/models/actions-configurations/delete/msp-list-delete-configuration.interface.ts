
import { Observable } from 'rxjs';
import { MspApiResponse, MspApiResponseWithOutput } from 'src/sdk/interfaces/DTOs/msp-api-response.interface';
import { IHaveActionDefinition } from '../IHaveActionDefinition.interface';
import { IMayHavePermission } from '../IHavePermission.interface';
import {MspListButtonConfiguration} from "../msp-list-button-configuration.interface";

export interface MspListDeleteConfiguration<TOutput>
  extends MspListButtonConfiguration, IMayHavePermission,
    IHaveActionDefinition<DeleteActionDefinition<TOutput>> {
  enableAutoConfirm?: boolean;
}
export type DeleteActionDefinition<TOutput> = (entityOutput: TOutput) => Observable<MspApiResponse>;

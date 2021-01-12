import {Observable} from "rxjs";
import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";
import { MspApiResponseWithOutput } from "src/sdk/interfaces/DTOs/msp-api-response.interface";
import {MspListGetAllInputOptions} from "./msp-list-get-all-input-options.interface";
import {MspListGetAllResponse} from "./msp-list-get-all-response.interface";

export type GetByIdDefinition<TOutput extends EntityOutput> = (id: string) => Observable<MspApiResponseWithOutput<TOutput>>;
export type GetAllActionDefinition<TOutput extends EntityOutput> = (inputOptions: MspListGetAllInputOptions) => Observable<MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>>;

export interface MspListDisplayConfiguration<TOutput extends EntityOutput> {
  listData: MspListGetAllResponse<TOutput>;
  noEntityDataMessage: string;
  permission?: boolean;
  pageSizeOptions?: number[];
  getAllDefinition: GetAllActionDefinition<TOutput>;
}

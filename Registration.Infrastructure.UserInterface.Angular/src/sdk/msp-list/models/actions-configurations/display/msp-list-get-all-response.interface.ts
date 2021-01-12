import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";
import { MspBaseGetAllResponse } from "src/sdk/interfaces/DTOs/msp-base-get-all-response.interface";

export interface MspListGetAllResponse<TOutput extends EntityOutput> extends MspBaseGetAllResponse<TOutput> {}

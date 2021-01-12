import { EntityOutput } from "./entity-output.abstraction";
import { MspBaseGetAllResponse } from "./msp-base-get-all-response.interface";

export interface MspListGetAllResponse<TOutput extends EntityOutput> extends MspBaseGetAllResponse<TOutput> {}

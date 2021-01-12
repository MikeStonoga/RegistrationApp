import { EntityOutput } from "./entity-output.abstraction";

export interface MspBaseGetAllResponse<TOutput extends EntityOutput> {
    items: TOutput[];
    totalCount: number;
  }
  
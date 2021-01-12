import { Observable } from "rxjs";
import { EntityInput } from "src/sdk/interfaces/DTOs/entity-input.abstraction";
import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";
import { MspApiResponse, MspApiResponseWithOutput } from "src/sdk/interfaces/DTOs/msp-api-response.interface";
import { MspListGetAllResponse } from "src/sdk/interfaces/DTOs/msp-list-get-all-response.interface";

export interface IReadOnlySharedService<TOutput extends EntityOutput> {
    getAll(): Observable<MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>>;
    getById(id: string): Observable<MspApiResponseWithOutput<TOutput>>;
}
  
export interface ICrudSharedService<TOutput extends EntityOutput, TManipulationInput extends EntityInput> extends IReadOnlySharedService<TOutput> {
    create(input: TManipulationInput): Observable<MspApiResponseWithOutput<TOutput>>;
    update(input: TManipulationInput): Observable<MspApiResponseWithOutput<TOutput>>;
    delete(output: TOutput): Observable<MspApiResponse>;
}
import {Directive} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { MspListGetAllResponse } from "src/sdk/interfaces/DTOs/msp-list-get-all-response.interface";
import { MspApiResponse, MspApiResponseWithOutput } from "src/sdk/interfaces/DTOs/msp-api-response.interface";
import { EntityOutput } from "src/sdk/interfaces/DTOs/entity-output.abstraction";
import { EntityInput } from "src/sdk/interfaces/DTOs/entity-input.abstraction";
import { ICrudSharedService } from "./base-shared.service.abstraction";

@Directive()
export abstract class BaseApiServiceProxyAbstraction<TOutput extends EntityOutput, TInput extends EntityInput> implements ICrudSharedService<TOutput, TInput> {
  public url: string;

  constructor(
    protected readonly http: HttpClient,
    API_PATH: string
  ) {
    this.url = API_PATH;
  }

  public getById(id: string): Observable<MspApiResponseWithOutput<TOutput>> {
    const response = this.http.get<MspApiResponseWithOutput<TOutput>>(this.url + '/GetById?id=' + id, {headers: this.getHeader()});
    return response;
  }

  public getByIds(ids: string[]): Observable<MspApiResponseWithOutput<TOutput[]>> {
    const response = this.http.post<MspApiResponseWithOutput<TOutput[]>>(this.url + '/GetByIds',  ids, {headers: this.getHeader()});
    return response;
  }

  public getAll(): Observable<MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>> {
    const response = this.http.get<MspApiResponseWithOutput<MspListGetAllResponse<TOutput>>>(this.url + '/GetAll', {headers: this.getHeader()});
    return response;
  }

  public create(input: TInput): Observable<MspApiResponseWithOutput<TOutput>> {
    const response = this.http.post<MspApiResponseWithOutput<TOutput>>(this.url + '/Create', input, {headers: this.getHeader()});
    return response;
  }

  public update(input: TInput): Observable<MspApiResponseWithOutput<TOutput>> {
    const response = this.http.put<MspApiResponseWithOutput<TOutput>>(this.url + '/Update', input,{headers: this.getHeader()});
    return response;
  }

  public delete(entityOutput: TOutput): Observable<MspApiResponse> {
    const response = this.http.delete<MspApiResponse>(this.url + '/Delete/' + entityOutput.id, {headers: this.getHeader()});
    return response;
  }

  private getHeader() {
    const header = undefined;
    return header;
  }
}

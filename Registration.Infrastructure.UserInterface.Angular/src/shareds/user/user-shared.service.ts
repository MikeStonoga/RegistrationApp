import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { UserApiServiceProxy } from "./user.api.service.proxy";
import { UserOutput } from "./models/user-output";
import { UserInput } from "./models/user-input";
import { MspListGetAllResponse } from "src/sdk/interfaces/DTOs/msp-list-get-all-response.interface";
import { MspApiResponse, MspApiResponseWithOutput } from "src/sdk/interfaces/DTOs/msp-api-response.interface";
import { ICrudSharedService, IReadOnlySharedService } from "../base-shared.service.abstraction";

@Injectable()
export class UserReadOnlySharedService implements IReadOnlySharedService<UserOutput> {

  constructor(
    protected readonly proxy: UserApiServiceProxy
  ) { }

  getAll(): Observable<MspApiResponseWithOutput<MspListGetAllResponse<UserOutput>>> {
    return this.proxy.getAll();
  }

  getById(id: string): Observable<MspApiResponseWithOutput<UserOutput>> {
    return this.proxy.getById(id);
  }

  getByIds(ids: string[]): Observable<MspApiResponseWithOutput<UserOutput[]>> {
    return this.proxy.getByIds(ids);
  }

}

@Injectable()
export class UserSharedService extends UserReadOnlySharedService implements ICrudSharedService<UserOutput, UserInput> {

  constructor(
    protected readonly proxy: UserApiServiceProxy
  ) {
    super(proxy);
  }

  create(input: UserInput): Observable<MspApiResponseWithOutput<UserOutput>> {
    return this.proxy.create(input);
  }

  delete(output: UserOutput): Observable<MspApiResponse> {
    return this.proxy.delete(output);
  }

  update(input: UserInput): Observable<MspApiResponseWithOutput<UserOutput>> {
    return this.proxy.update(input);
  }
}

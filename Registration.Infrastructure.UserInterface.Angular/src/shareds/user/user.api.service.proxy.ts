﻿import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"; 
import {BaseApiServiceProxyAbstraction} from "../base-api.service.proxy.abstraction";
import {UserOutput} from "./models/user-output";
import {UserInput} from "./models/user-input";
import {API_BASE_PATH} from "../consts/consts";

@Injectable({providedIn: 'root'})
export class UserApiServiceProxy extends BaseApiServiceProxyAbstraction<UserOutput, UserInput> {

  constructor(
    protected readonly http: HttpClient
  ) {
    super(http, API_BASE_PATH + '/User');
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseListAbstraction } from 'src/sdk/msp-list/base-list.abstraction';
import { MspListColumn } from 'src/sdk/msp-list/models/columns/msp-list-simple-column.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';
import { MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';
import { getDefaultColumns } from 'src/shareds/consts/list.functions';
import { UserManipulationModalComponent } from '../manipulation-modal/user-manipulation-modal.component';
import { UserInput } from '../models/user-input';
import { UserOutput } from '../models/user-output';
import { UserSharedService } from '../user-shared.service';

@Component({
  selector: 'app-user-msp-list',
  templateUrl: './user-msp-list.component.html',
  styleUrls: ['./user-msp-list.component.scss'],
  providers: [MspListService]
})
export class UserMspListComponent extends BaseListAbstraction<
  UserOutput,
  UserInput,
  UserManipulationModalComponent,
  UserSharedService
> implements OnInit {

  constructor(
    protected readonly service: UserSharedService,
    protected readonly snackbar: MspSnackbarService
  ) {
    super(service, snackbar, UserManipulationModalComponent);
  }

  getListColumns(): MspListColumn[] {
    const columns: MspListColumn[] = getDefaultColumns(150); 
    columns.push(...[
      {title: 'Sobrenome', valueAcessor: 'lastName', width: 180},
      {title: 'Email', valueAcessor: 'emailAddress', width: 250},
      {title: 'Escolaridade', valueAcessor: 'educationLevelName', width: 200},
      {title: 'Nascimento', valueAcessor: 'birthDate', type: "date", width: 180}
    ]as MspListColumn[]);
    return columns;
  }
}
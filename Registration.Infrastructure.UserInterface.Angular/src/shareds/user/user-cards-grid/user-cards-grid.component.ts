import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MspApiResponse, MspApiResponseWithOutput } from 'src/sdk/interfaces/DTOs/msp-api-response.interface';
import { MspListGetAllResponse } from 'src/sdk/interfaces/DTOs/msp-list-get-all-response.interface';
import { MspDialogService } from 'src/sdk/msp-dialog/msp-dialog.service';
import { MspSnackbarNotificateParameters, MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';
import { DELETE_DEFAULT_MESSAGE } from 'src/shareds/consts/consts';
import { DELETE_BUTTON_ICON, UPDATE_BUTTON_ICON } from 'src/shareds/consts/icons.consts';
import { CREATE_BUTTON_TOOLTIP, DELETE_BUTTON_TOOLTIP, UPDATE_BUTTON_TOOLTIP } from 'src/shareds/consts/tooltips.consts';
import { UserManipulationModalComponent } from '../manipulation-modal/user-manipulation-modal.component';
import { UserInput } from '../models/user-input';
import { UserOutput } from '../models/user-output';
import { UserSharedService } from '../user-shared.service';

@Component({
  selector: 'app-user-cards-grid',
  templateUrl: './user-cards-grid.component.html',
  styleUrls: ['./user-cards-grid.component.scss'],
})
export class UserCardsGridComponent implements OnInit {
  public users: UserOutput[] = [];
  
  public isLoaded = false;
  
  public get deleteIcon() {return DELETE_BUTTON_ICON};
  public get deleteTooltip() {return DELETE_BUTTON_TOOLTIP};


  public get cretionModalTemplate() {return UserManipulationModalComponent; }

  public get iconOfUpdateButton(): string {return UPDATE_BUTTON_ICON; }
  public get tooltipOfUpdateButton(): string {return UPDATE_BUTTON_TOOLTIP; }
  public get modificationModalTemplate() {return UserManipulationModalComponent; }
  
  constructor(
    public readonly service: UserSharedService,
    private readonly snackbar: MspSnackbarService,
    private readonly mspDialog: MspDialogService
  ) { 
    this.refreshCards()();
  }
  

  ngOnInit(): void { 
    this.isLoaded = true;
   }

   public refreshCards(): () => void {
    return () => {
      this.service.getAll().subscribe(this.refreshUsersOrNotificateFailure());  
    };
  };

  private refreshUsersOrNotificateFailure() {
    return (getAllResponse: MspApiResponseWithOutput<MspListGetAllResponse<UserOutput>>) => {
      if (getAllResponse.success) this.refreshUsers(getAllResponse);
      else this.notificateFailure(getAllResponse);
    };
  }

  private refreshUsers(getAllResponse: MspApiResponseWithOutput<MspListGetAllResponse<UserOutput>>) {
    this.users = getAllResponse.result.items;
  }

  private notificateFailure(getAllResponse: MspApiResponseWithOutput<MspListGetAllResponse<UserOutput>>) {
    this.snackbar.notificate({message: "Obter Cartões: " + getAllResponse.message} as MspSnackbarNotificateParameters);
  }

  
  public get creationInputModalData() {
    return {
       action: 'create',
       id: undefined,
       title: CREATE_BUTTON_TOOLTIP,
       others: undefined
     };
 }

 public createDefinition(): (manipulationInput?: UserInput) => Observable<MspApiResponseWithOutput<UserOutput>> {
    return (manipulationInput?: UserInput) => this.service.create(manipulationInput);
  }

  public updateDefinition(): (manipulationInput?: UserInput) => Observable<MspApiResponseWithOutput<UserOutput>> {
    return (manipulationInput: UserInput) => this.service.update(manipulationInput);
  }

  public confirmThenDeleteAndShowResponseMessage(entityOutput: UserOutput) {
    this.mspDialog.confirm(DELETE_DEFAULT_MESSAGE).subscribe(
      (isToDelete: boolean) => {
        if (isToDelete) this.deleteAndShowResponseMessage(entityOutput);
      }
    );
  }

  private deleteAndShowResponseMessage(entityOutput: UserOutput) {
    this.service.delete(entityOutput).subscribe(this.showResponseMessageAndRefreshList());
  }

  private showResponseMessageAndRefreshList(){
    return (response: MspApiResponse) => {
      this.showDeleteResponseMessage(response);
      if (response.success) this.refreshCards()()
    };
  }

  private showDeleteResponseMessage(response: MspApiResponse) {
    this.snackbar.notificate({ message: 'Exclusão: ' + response.message } as MspSnackbarNotificateParameters);
  }
}

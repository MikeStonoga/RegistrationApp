import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityInput } from 'src/sdk/interfaces/DTOs/entity-input.abstraction';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspApiResponse, MspApiResponseWithOutput } from 'src/sdk/interfaces/DTOs/msp-api-response.interface';
import { MspDialogService } from 'src/sdk/msp-dialog/msp-dialog.service';
import { BaseManipulationModalInputData } from 'src/sdk/msp-list/msp-list.module';
import { MspSnackbarNotificateParameters, MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';
import { UPDATE_BUTTON_TOOLTIP } from 'src/shareds/consts/tooltips.consts';

@Injectable({providedIn: 'root'})
export class MspUpdateButtonService<TOutput extends EntityOutput, TInput extends EntityInput, TComponentOrTemplateRef> {

  constructor(
    private readonly mspDialogService: MspDialogService,
    private readonly snackbar: MspSnackbarService
  ) { }


  update(entityOutput: TOutput, updateDefinition: (input: TInput) => Observable<MspApiResponseWithOutput<EntityOutput>>, refreshDefinition: () => void, modificationModalTemplate: ComponentType<TComponentOrTemplateRef> | TemplateRef<TComponentOrTemplateRef>) {
    const inputModalData: BaseManipulationModalInputData<TOutput> = {
      action: 'update',
      id: entityOutput.id,
      entity: entityOutput,
      title: UPDATE_BUTTON_TOOLTIP,
      others: undefined
    };

    this.mspDialogService.open(modificationModalTemplate, {data: inputModalData})
      .subscribe(
        (input?: TInput) => {
          if (!!input) {
            updateDefinition(input).subscribe(this.showResponseMessageAndRefreshList(refreshDefinition));
          }
        } 
    );
  }

  private showResponseMessageAndRefreshList(refreshDefinition: () => void){
    return (response: MspApiResponse) => {
      this.snackbar.notificate({ message: "Criação: " + response.message } as MspSnackbarNotificateParameters);
      if (response.success) refreshDefinition()
    };
  }

  

 
  
}

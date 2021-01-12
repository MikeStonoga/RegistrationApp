import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import { EntityInput } from 'src/sdk/interfaces/DTOs/entity-input.abstraction';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspApiResponse, MspApiResponseWithOutput } from 'src/sdk/interfaces/DTOs/msp-api-response.interface';
import { MspDialogService } from 'src/sdk/msp-dialog/msp-dialog.service';
import { BaseManipulationModalInputData } from 'src/sdk/msp-list/msp-list.module';
import { MspSnackbarNotificateParameters, MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';
import { CREATE_BUTTON_ICON } from 'src/shareds/consts/icons.consts';
import { CREATE_BUTTON_TOOLTIP } from 'src/shareds/consts/tooltips.consts';

@Component({
  selector: 'msp-creation-button',
  templateUrl: './msp-creation-button.component.html',
  styleUrls: ['./msp-creation-button.component.scss']
})
export class MspCreationButtonComponent<TOutput extends EntityOutput, TInput extends EntityInput, TComponentOrTemplateRef, TInputModalData> implements OnInit {

  @Input() creationModalTemplate: ComponentType<TComponentOrTemplateRef> | TemplateRef<TComponentOrTemplateRef>;
  @Input() creationModalData: BaseManipulationModalInputData<TOutput>;
  @Input() createDefiniton: (entityInput: TInput) => Observable<MspApiResponseWithOutput<EntityOutput>>;
  @Input() refreshDefinition: () => void;
  @Input() label: string;
  @Input() color?: string;
  @Input() icon: string = CREATE_BUTTON_ICON;
  @Input() tooltip: string = CREATE_BUTTON_TOOLTIP;
  @Input() show = true;
  @Output() created: EventEmitter = new EventEmitter();
  
  public isLoaded = false;

  constructor(
    private readonly mspDialogService: MspDialogService,
    private readonly snackbar: MspSnackbarService,
  ) { }

  ngOnInit(): void {
    this.isLoaded = true;
   }

  create() {
    this.mspDialogService.open(
      this.creationModalTemplate, 
      {data: this.creationModalData}
    ).subscribe(
      (input?: TInput) => {
        if (!!input) {
          this.createDefiniton(input).subscribe(this.showResponseMessageAndRefreshList());
        }
      }
    );
  }

  private showResponseMessageAndRefreshList(){
    return (response: MspApiResponse) => {
      this.snackbar.notificate({ message: "Criação: " + response.message } as MspSnackbarNotificateParameters);
      if (response.success) this.refreshDefinition()
    };
  }
}

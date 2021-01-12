import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspDialogService } from 'src/sdk/msp-dialog/msp-dialog.service';
import { MspCrudListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';

@Component({
  selector: 'msp-list-body-row-actions-delete',
  templateUrl: './msp-list-body-row-actions-delete.component.html',
  styleUrls: ['./msp-list-body-row-actions-delete.component.scss']
})
export class MspListBodyRowActionsDeleteComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() listConfiguration: MspCrudListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Input() entityOutput;

  public get hasListCrudMethods(): boolean {return this.service.hasListCrudMethods(this.listConfiguration); }
  public get deleteIcon(): string {return  this.service.getCustomOrDefaultActionPropertyValue('delete', 'icon', this.listConfiguration); }
  public get deleteTooltip(): string {return this.service.getCustomOrDefaultActionPropertyValue('delete', 'tooltip', this.listConfiguration); }


  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
    private readonly mspDialogService: MspDialogService
  ) {
  }

  public delete(entityOutput: TOutput) {
    if (this.listConfiguration.actions.delete.enableAutoConfirm) this.confirmThenDeleteAndShowResponseMessage(entityOutput);
    else this.service.executeActionThenShowResponseMessageAndRefreshList('delete', entityOutput);
  }

  private confirmThenDeleteAndShowResponseMessage(entityOutput: TOutput) {
    this.mspDialogService.confirm(this.service.defaultConfiguration.delete.autoConfirmMessage).subscribe(
      (isToDelete: boolean) => {
        if (isToDelete) {
          this.service.executeActionThenShowResponseMessageAndRefreshList('delete', entityOutput);
        }
      }
    );
  }
}

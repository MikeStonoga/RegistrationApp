import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListCustomActionConfiguration } from 'src/sdk/msp-list/models/actions-configurations/custom-actions/msp-list-custom-action-configuration';
import { MspListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';

@Component({
  selector: 'msp-list-body-row-actions-custom',
  templateUrl: './msp-list-body-row-actions-custom.component.html',
  styleUrls: ['./msp-list-body-row-actions-custom.component.scss']
})
export class MspListBodyRowActionsCustomComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Input() entityOutput: TOutput;
  
  public isToShowCustomAction(action: MspListCustomActionConfiguration<TOutput>): boolean {return action.displayCondition ? action.displayCondition : true; }
  public get hasListCustomActions(): boolean {return !!this.listConfiguration.actions.customActions && this.listConfiguration.actions.customActions.length > 0; }
  public get listCustomActions(): MspListCustomActionConfiguration<TOutput>[]  {return this.listConfiguration.actions.customActions; }
  
  constructor(
    public readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) {
  }
}

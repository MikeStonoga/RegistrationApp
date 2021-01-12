import { Component, Input } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';

@Component({
  selector: 'msp-list-body-row-actions',
  templateUrl: './msp-list-body-row-actions.component.html',
  styleUrls: ['./msp-list-body-row-actions.component.scss']
})
export class MspListBodyRowActionsComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal, TDeleteResponse> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Input() entityOutput: TOutput;
}

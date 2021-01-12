import { Component, Input, OnInit } from '@angular/core';
import { EntityInput } from 'src/sdk/interfaces/DTOs/entity-input.abstraction';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspUpdateButtonService } from 'src/sdk/msp-button/update/msp-update-button.service';
import { MspCrudListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';

@Component({
  selector: 'msp-list-body-row-actions-update',
  templateUrl: './msp-list-body-row-actions-update.component.html',
  styleUrls: ['./msp-list-body-row-actions-update.component.scss']
})
export class MspListBodyRowActionsUpdateComponent<TOutput extends EntityOutput, TEntityManipulationInput extends EntityInput, TManipulationModal> implements OnInit {
  @Input() listConfiguration: MspCrudListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Input() entityToUpdate: TOutput;

  public isLoaded = false;

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
    private readonly updateService: MspUpdateButtonService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) {
  }
  

  public get iconOfUpdateButton(): string {return this.service.getCustomOrDefaultActionPropertyValue('update', 'icon', this.listConfiguration); }
  public get tooltipOfUpdateButton(): string {return this.service.getCustomOrDefaultActionPropertyValue('update', 'tooltip', this.listConfiguration); }
  public get hasListCrudMethods(): boolean {return this.service.hasListCrudMethods(this.listConfiguration); }
  public get modificationModalTemplate() {return this.listConfiguration.actions.update.componentOrTemplateRef; }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  public update(entityOutput: TOutput) {
    this.updateService.update(
      entityOutput,
      this.listConfiguration.actions.update.actionDefinition,
      this.listConfiguration.actions.refresh,
      this.listConfiguration.actions.update.componentOrTemplateRef
    );
  }
}

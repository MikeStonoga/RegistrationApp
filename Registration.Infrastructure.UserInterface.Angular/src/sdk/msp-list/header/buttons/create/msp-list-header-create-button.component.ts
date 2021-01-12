import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspCrudListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from '../../../msp-list.service';

@Component({
  selector: 'msp-list-header-create-button',
  templateUrl: './msp-list-header-create-button.component.html',
  styleUrls: ['./msp-list-header-create-button.component.scss']
})
export class MspListHeaderCreateButtonComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> implements OnInit {
  @Input() listConfiguration:  MspCrudListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  
  public isLoaded = false;
  
  public get creationIcon(): string {return this.service.getCustomOrDefaultActionPropertyValue('create', 'icon', this.listConfiguration) }
  public get creationTooltip(): string {return this.service.getCustomOrDefaultActionPropertyValue('create', 'tooltip', this.listConfiguration) }
  public get hasListCrudMethods(): boolean {return this.service.hasListCrudMethods(this.listConfiguration); }
  public get creationModalTemplate() {return this.listConfiguration.actions.create.componentOrTemplateRef; }
  

  constructor(
    public readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) { }


  ngOnInit(): void {
    this.isLoaded = true;
  }

  public get inputModalData() {
     return {
        action: 'create',
        id: undefined,
        title: this.listConfiguration.actions.create.modalTitle,
        others: this.listConfiguration.actions.create.inputManipulationModalData ?? undefined
      };
  }
}

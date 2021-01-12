import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { EntityInput } from 'src/sdk/interfaces/DTOs/entity-input.abstraction';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspUpdateButtonService } from 'src/sdk/msp-button/update/msp-update-button.service';
import { MspColumnsTypes, MspListColumn, MspListColumns } from 'src/sdk/msp-list/models/columns/msp-list-simple-column.interface';
import { MspListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';

@Component({
  selector: 'msp-list-body-row',
  templateUrl: './msp-list-body-row.component.html',
  styleUrls: ['./msp-list-body-row.component.scss']
})
export class MspListBodyRowComponent<TOutput extends EntityOutput, TInput extends EntityInput, TManipulationModal extends ComponentType<TManipulationModal> | TemplateRef<TManipulationModal>> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TInput, TManipulationModal>;
  @Input() entityOutput: TOutput;
  @Output() selected: EventEmitter<TOutput> = new EventEmitter();

  public isToApplyCheckboxColumnSize(columnType: MspColumnsTypes) {return columnType === 'checkbox' ? 'checkboxColumnSize' : ''; }
  public getColumnWidth(column: MspListColumn): number {return this.service.getColumnWidth(column) }
  
  public get listColumns(): MspListColumns { return  this.listConfiguration.columns; }
  
  constructor(
    private readonly service: MspListService<TOutput, TInput, TManipulationModal>,
    private readonly updateService: MspUpdateButtonService<TOutput, TInput, TManipulationModal>
  ) {
  }

  public selectActionDefinition(entityOutput: TOutput) {
    const actions = this.listConfiguration.actions;
    const hasSelectActionDefinition: boolean = !!actions.select;
    this.selected.emit(entityOutput);
    if (hasSelectActionDefinition) {
      return this.listConfiguration.actions.select.actionDefinition(entityOutput);
    } else {
      if (this.service.isCrudList(this.listConfiguration)) {
        this.updateService.update(
          entityOutput,
          this.listConfiguration.actions.update.actionDefinition,
          this.listConfiguration.actions.refresh,
          this.listConfiguration.actions.update.componentOrTemplateRef
        );
      }
    }
  }
}

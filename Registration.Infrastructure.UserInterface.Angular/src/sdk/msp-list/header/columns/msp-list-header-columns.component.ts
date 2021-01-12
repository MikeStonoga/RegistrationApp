import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListColumn, MspListColumns } from '../../models/columns/msp-list-simple-column.interface';
import { MspListConfiguration } from '../../models/msp-list-configuration.interface';
import { MspListService } from '../../msp-list.service';

@Component({
  selector: 'msp-list-header-columns',
  templateUrl: './msp-list-header-columns.component.html',
  styleUrls: ['./msp-list-header-columns.component.scss']
})
export class MspListHeaderColumnsComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) {

  }

  public get listColumns(): MspListColumns { return  this.listConfiguration.columns; }
  public getColumnWidth(column: MspListColumn): number {return this.service.getColumnWidth(column) }
}

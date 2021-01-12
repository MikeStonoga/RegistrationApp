import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListColumn } from '../models/columns/msp-list-simple-column.interface';
import { MspListConfiguration } from '../models/msp-list-configuration.interface';
import { MspListService } from '../msp-list.service';

@Component({
  selector: 'msp-list-header',
  templateUrl: './msp-list-header.component.html',
  styleUrls: ['./msp-list-header.component.scss']
})
export class MspListHeaderComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> implements OnInit {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  
  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) { }

  public get columnsFiltersFormGroup() {return this.service.columnsFiltersFormGroup; }
  public get hasActions() {return this.service.hasActions(this.listConfiguration);  }
  public get isToShowColumnsFilters() {return this.service.isToShowColumnsFilters(this.listConfiguration); }

  public get interactionsColumnSize(): number {return this.service.isCrudList(this.listConfiguration) ? this.interactionsColumnSizeWithCrudActions : this.interactionsColumnSizeWithoutCrudActions; }
  public get interactionsColumnSizeWithCrudActions() {return (this.listConfiguration.actions.customActions?.length + 2 ?? 2) * 24 + 10}
  public get interactionsColumnSizeWithoutCrudActions() {return this.listConfiguration.actions.customActions?.length * 24 ?? 60 }

  ngOnInit(): void {
    this.listConfiguration.columns.forEach((column: MspListColumn) => {
      this.columnsFiltersFormGroup.addControl(column.valueAcessor, new FormControl());
      if (!column.type) {
        column.type = 'text';
      }
    });
  }
}

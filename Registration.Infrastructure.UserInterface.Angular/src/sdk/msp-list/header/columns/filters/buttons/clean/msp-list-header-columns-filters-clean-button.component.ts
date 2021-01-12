import { Component, Input } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListColumn } from 'src/sdk/msp-list/models/columns/msp-list-simple-column.interface';
import { MspListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';

@Component({
  selector: 'msp-list-header-columns-filters-clean-button',
  templateUrl: './msp-list-header-columns-filters-clean-button.component.html',
  styleUrls: ['./msp-list-header-columns-filters-clean-button.component.scss']
})
export class MspListHeaderColumnsFiltersCleanButtonComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) { }

  public get defaultConfiguration() { return this.service.defaultConfiguration; }
  public get columnsFiltersFormGroup() {return this.service.columnsFiltersFormGroup; }
  public get columnsFiltersEraserIcon(): string {return this.listConfiguration.columnsFilters?.eraserButton?.icon ?? this.defaultConfiguration.columnsFilters.eraserButton.icon; }
  public get columnsFiltersEraserTooltip(): string {return this.listConfiguration.columnsFilters?.eraserButton?.tooltip ?? this.defaultConfiguration.columnsFilters.eraserButton.tooltip; }

  public cleanAllColumnsFilters() {
    this.listConfiguration.columns.forEach(this.cleanColumnFilter());
  }

  private cleanColumnFilter() {
    return (column: MspListColumn) => {
      const hasColumnFilter: boolean = this.service.columnsFiltersFormGroup.controls[column.valueAcessor].value;
      if (hasColumnFilter) this.setColumnFilterAsUndefined(column);
    }
  }

  private setColumnFilterAsUndefined(column : MspListColumn) {
    this.columnsFiltersFormGroup.controls[column.valueAcessor].setValue(undefined);
  }
}

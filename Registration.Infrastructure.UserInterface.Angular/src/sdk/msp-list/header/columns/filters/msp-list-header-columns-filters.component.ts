import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListDefaultFilterConfiguration } from 'src/sdk/msp-list/models/actions-configurations/display/msp-list-default-filter-configuration.interface';
import { MspListColumn } from 'src/sdk/msp-list/models/columns/msp-list-simple-column.interface';
import { MspListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';
import { MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';

@Component({
  selector: 'msp-list-header-columns-filters',
  templateUrl: './msp-list-header-columns-filters.component.html',
  styleUrls: ['./msp-list-header-columns-filters.component.scss']
})
export class MspListHeaderColumnsFiltersComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> implements OnInit {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  public get displayColumnsFiltersControl(): boolean {return this.service.displayColumnsFiltersControl;};

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
    private readonly snackbar: MspSnackbarService
  ) {
  }



  ngOnInit(): void {
    this.service.displayColumnsFiltersControl = this.listConfiguration.columnsFilters?.displayInitiallyExpanded ? this.listConfiguration.columnsFilters.displayInitiallyExpanded : false;
  }
  public get listGetAllInputOptions() { return this.service.listGetAllInputOptions; }
  public get columnsFiltersFormGroup() {return this.service.columnsFiltersFormGroup; }
  public get listColumns() {return this.service.listConfiguration.columns; }
  
  public filterByColumn() {
    this.snackbar.notificateDeveloping();
    // this.listGetAllInputOptions.columnsFilters = [];
    // this.listConfiguration.columns.forEach(this.filterColumn());
  }

  private filterColumn() {
    return (column: MspListColumn) => {
      const hasColumnFilter: boolean = this.columnsFiltersFormGroup.controls[column.valueAcessor]?.value;
      if (hasColumnFilter) this.addColumnFilterToGetAllInputOptions(column);
    }
  }

  private addColumnFilterToGetAllInputOptions(column: MspListColumn) {
    const columnFilter: MspListDefaultFilterConfiguration = {
      propertyName: column.valueAcessor, 
      value: this.columnsFiltersFormGroup.controls[column.valueAcessor].value
    };
    this.listGetAllInputOptions.columnsFilters.push(columnFilter);
  }
}

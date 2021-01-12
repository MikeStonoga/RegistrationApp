import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListColumn } from 'src/sdk/msp-list/models/columns/msp-list-simple-column.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';
import { MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';

@Component({
  selector: 'msp-list-header-sorting-button',
  templateUrl: './msp-list-header-sorting-button.component.html',
  styleUrls: ['./msp-list-header-sorting-button.component.scss']
})
export class MspListHeaderSortingButtonComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() column: MspListColumn;

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
    private readonly snackbar: MspSnackbarService
  ) { }

  public isSortingByThisColumnAscending(): boolean {return this.service.listGetAllInputOptions.sorting === this.column.valueAcessor + ' asc'; }

  public sortAscending() {
    
    this.snackbar.notificateDeveloping();
    // this.service.listGetAllInputOptions.sorting = this.column.valueAcessor + ' asc';
    // this.service.subscribeToSetAllEntityData();
  }

  public sortDescending() {
    this.snackbar.notificateDeveloping();
    // this.service.listGetAllInputOptions.sorting = this.column.valueAcessor + ' desc';
    // this.service.subscribeToSetAllEntityData();
  }

}

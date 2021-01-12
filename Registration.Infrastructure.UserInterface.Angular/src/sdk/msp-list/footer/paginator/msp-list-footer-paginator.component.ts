import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';
import { MspListService } from '../../msp-list.service';

@Component({
  selector: 'msp-list-footer-paginator',
  templateUrl: './msp-list-footer-paginator.component.html',
  styleUrls: ['./msp-list-footer-paginator.component.scss']
})
export class MspListFooterPaginatorComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> implements OnInit  {
  
  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
    private readonly snackbar: MspSnackbarService
  ) {
  }



  ngOnInit(): void { }

  public get numberOfEntityElements(): number {return this.service.numberOfEntityElements; }
  public get pageSizeOptions(): number[] { return this.service.pageSizeOptions; }
  public get listGetAllInputOptions() {return this.service.listGetAllInputOptions; }
  
  public updatePageSize(pageEvent: PageEvent) {
    this.snackbar.notificateDeveloping();
    // this.service.listGetAllInputOptions.pageSize = pageEvent.pageSize;
    // this.service.listGetAllInputOptions.skipCount = this.service.listGetAllInputOptions.pageSize * pageEvent.pageIndex;
    // this.service.subscribeToSetAllEntityData();
  }

}

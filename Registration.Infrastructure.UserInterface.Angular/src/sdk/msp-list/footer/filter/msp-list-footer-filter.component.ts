import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspSnackbarService } from 'src/sdk/msp-snackbar/msp-snackbar.service';
import { MspListService } from '../../msp-list.service';

@Component({
  selector: 'msp-list-footer-filter',
  templateUrl: './msp-list-footer-filter.component.html',
  styleUrls: ['./msp-list-footer-filter.component.scss']
})
export class MspListFooterFilterComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal>  {
  public formGroup: FormGroup = new FormGroup({});

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
    private readonly formBuilder: FormBuilder,
    private readonly snackbar: MspSnackbarService
  ) {
    this.formGroup = this.formBuilder.group({
      filter: ['']
    });
  }

  public get listGetAllInputOptions() {return this.service.listGetAllInputOptions; }
  public get listConfiguration() {return this.service.listConfiguration; }
  public get defaultConfiguration() {return this.service.defaultConfiguration; }
  public get filterLabel(): string {return this.listConfiguration.footer?.filter?.label ?? this.defaultConfiguration.footer.filter.label; }
  public get filterPlaceholder(): string {return this.listConfiguration.footer?.filter?.placeholder ?? this.defaultConfiguration.footer.filter.placeholder; }

  public updateFilter(newFilter: string) {
    this.snackbar.notificateDeveloping();
    // this.listGetAllInputOptions.filter = newFilter;
  }
}

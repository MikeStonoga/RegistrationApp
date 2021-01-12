import { Component, Input, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListConfiguration } from 'src/sdk/msp-list/models/msp-list-configuration.interface';
import { MspListService } from 'src/sdk/msp-list/msp-list.service';

@Component({
  selector: 'msp-list-header-columns-filters-toggle-button',
  templateUrl: './msp-list-header-columns-filters-toggle-button.component.html',
  styleUrls: ['./msp-list-header-columns-filters-toggle-button.component.scss']
})
export class MspListHeaderColumnsFiltersToggleButtonComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;

  constructor(
    private service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) { }

  public get defaultConfiguration() {return this.service.defaultConfiguration; }
  public get columnsFiltersDisplayIcon(): string {return this.listConfiguration.columnsFilters?.displayButton?.icon ?? this.defaultConfiguration.columnsFilters.displayButton.icon; }
  public get columnsFiltersDisplayTooltip(): string {return this.listConfiguration.columnsFilters?.displayButton?.tooltip ?? this.defaultConfiguration.columnsFilters.displayButton.tooltip; }
  public get isToShowColumnsFilters() {return this.service.isToShowColumnsFilters; }

  public toggleColumnsFiltersDisplay() {
    this.service.toggleDisplayColumnsFilters();
  }
}

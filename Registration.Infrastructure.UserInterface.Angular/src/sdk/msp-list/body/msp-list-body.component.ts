import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListConfiguration } from '../models/msp-list-configuration.interface';
import { MspListService } from '../msp-list.service';

@Component({
  selector: 'msp-list-body',
  templateUrl: './msp-list-body.component.html',
  styleUrls: ['./msp-list-body.component.scss']
})
export class MspListBodyComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Output() rowSelected: EventEmitter<TOutput> = new EventEmitter();

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
  ) {
  }

  public get hasEntityData(): boolean { return this.service.hasEntityData; }

  public emitRowSelected(entityOutput: TOutput) {
    this.rowSelected.emit(entityOutput);
  }
}

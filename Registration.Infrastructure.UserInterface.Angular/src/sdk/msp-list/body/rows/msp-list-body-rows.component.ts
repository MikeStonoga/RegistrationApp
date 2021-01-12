import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListConfiguration } from '../../models/msp-list-configuration.interface';
import { MspListService } from '../../msp-list.service';

@Component({
  selector: 'msp-list-body-rows',
  templateUrl: './msp-list-body-rows.component.html',
  styleUrls: ['./msp-list-body-rows.component.scss']
})
export class MspListBodyRowsComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> implements OnInit {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Output() selected: EventEmitter<TOutput> = new EventEmitter();

  public get listData() {return this.listConfiguration.actions.display.listData; }

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
  ) {
  }
  ngOnInit(): void {  }

  public isToApplyShadow(rowIndex: number): string {
    const isEvenRow: boolean = rowIndex % 2 === 0; 
    return isEvenRow ? '' : 'shadowedRow'; 
  }

  public emitSelected(entityOutput: TOutput) {
    this.selected.emit(entityOutput);
  }
}

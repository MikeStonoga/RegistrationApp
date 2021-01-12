import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntityOutput } from '../interfaces/DTOs/entity-output.abstraction';
import { MspListConfiguration } from './models/msp-list-configuration.interface';
import { MspListService } from './msp-list.service';

@Component({
  selector: 'msp-list',
  templateUrl: './msp-list.component.html',
  styleUrls: ['./msp-list.component.scss'],
  providers: [MspListService]
})
export class MspListComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> implements OnInit {
  @Input() listConfiguration: MspListConfiguration<TOutput, TEntityManipulationInput, TManipulationModal>;
  @Output() rowSelected: EventEmitter<TOutput> = new EventEmitter();

  public isLoaded: boolean = false;

  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>
  ) {
   }

   ngOnInit(): void {
    this.service.listConfiguration = this.listConfiguration;
    this.listConfiguration.actions.refresh();
    this.isLoaded = true;
  }

   public get noEntityDataMessage() { return this.listConfiguration.actions.display.noEntityDataMessage; }
   public get hasEntityData() { return this.service.hasEntityData; }

  public emitRowSelected(entityOutput: TOutput) {
    this.rowSelected.emit(entityOutput);
  }
}

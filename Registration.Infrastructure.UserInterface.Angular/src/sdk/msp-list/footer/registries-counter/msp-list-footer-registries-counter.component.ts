import { Component, OnInit } from '@angular/core';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspListService } from '../../msp-list.service';

@Component({
  selector: 'msp-list-footer-registries-counter',
  templateUrl: './msp-list-footer-registries-counter.component.html',
  styleUrls: ['./msp-list-footer-registries-counter.component.scss']
})
export class MspListFooterRegistriesCounterComponent<TOutput extends EntityOutput, TEntityManipulationInput, TManipulationModal> {
  constructor(
    private readonly service: MspListService<TOutput, TEntityManipulationInput, TManipulationModal>,
  ) {
  }
  
  public get numberOfEntityElements(): number {return this.service.numberOfEntityElements; }
  public get numberOfEntityElementsMessage(): string {return this.numberOfEntityElements + ' registros'; }
}

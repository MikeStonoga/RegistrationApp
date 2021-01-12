import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityInput } from 'src/sdk/interfaces/DTOs/entity-input.abstraction';
import { EntityOutput } from 'src/sdk/interfaces/DTOs/entity-output.abstraction';
import { MspApiResponseWithOutput } from 'src/sdk/interfaces/DTOs/msp-api-response.interface';
import { UPDATE_BUTTON_ICON } from 'src/shareds/consts/icons.consts';
import { UPDATE_BUTTON_TOOLTIP } from 'src/shareds/consts/tooltips.consts';
import { MspUpdateButtonService } from './msp-update-button.service';

@Component({
  selector: 'msp-update-button',
  templateUrl: './msp-update-button.component.html',
  styleUrls: ['./msp-update-button.component.scss']
})
export class MspUpdateButtonComponent<TOutput extends EntityOutput, TInput extends EntityInput, TComponentOrTemplateRef> implements OnInit {
  @Input() modificationModalTemplate: ComponentType<TComponentOrTemplateRef> | TemplateRef<TComponentOrTemplateRef>;
  @Input() updateDefinition: (input: TInput) => Observable<MspApiResponseWithOutput<EntityOutput>>;
  @Input() entityToUpdate: TOutput;
  @Input() refreshDefinition: () => void;
  @Input() label: string;
  @Input() color?: string;
  @Input() icon: string = UPDATE_BUTTON_ICON;
  @Input() tooltip: string = UPDATE_BUTTON_TOOLTIP;
  @Input() show = true;


  constructor(
    private readonly service: MspUpdateButtonService<TOutput, TInput, TComponentOrTemplateRef>
  ) { }

  ngOnInit(): void {
  }

  public update() {
    this.service.update(this.entityToUpdate, this.updateDefinition, this.refreshDefinition, this.modificationModalTemplate);
  }
}

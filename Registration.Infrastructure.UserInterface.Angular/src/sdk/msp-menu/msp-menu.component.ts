import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MspMenuConfiguration } from './interfaces/msp-menu-configuration.interface';

@Component({
  selector: 'msp-menu',
  templateUrl: './msp-menu.component.html',
  styleUrls: ['./msp-menu.component.scss']
})
export class MspMenuComponent {

  @Input() menuConfiguration: MspMenuConfiguration;
  @Output() menuItemSelected = new EventEmitter();

  emitMenuItemSelected() {
    this.menuItemSelected.emit();
  }
}

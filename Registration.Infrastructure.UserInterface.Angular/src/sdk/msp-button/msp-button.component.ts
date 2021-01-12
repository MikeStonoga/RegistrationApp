import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type MspButtonType = 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'minifab';

@Component({
  selector: 'msp-button',
  templateUrl: './msp-button.component.html',
  styleUrls: ['./msp-button.component.scss']
})
export class MspButtonComponent {

  @Input() label = '';
  @Input() tooltip = '';
  @Input() type: MspButtonType = 'basic';
  @Input() icon = '';
  @Input() size = 24;
  @Input() iconSize = 24;
  @Input() color = '#666666';
  @Input() disabled = false;
  @Input() show = true;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  public buttonClicked() {
    this.clicked.emit();
  }
}
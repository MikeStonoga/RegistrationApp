import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'msp-confirmation-modal-buttons',
  templateUrl: './msp-confirmation-modal-buttons.component.html',
  styleUrls: ['./msp-confirmation-modal-buttons.component.scss']
})
export class MspConfirmationModalButtonsComponent {
  @Input() disableCondition: boolean = false;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();

  public close(confirmed: boolean): void {
    return confirmed
      ? this.emitConfirmed()
      : this.emitAborted();
  }

  private emitConfirmed(): void {
    this.closed.emit(true);
  }

  private emitAborted(): void {
    this.closed.emit(false);
  }
}

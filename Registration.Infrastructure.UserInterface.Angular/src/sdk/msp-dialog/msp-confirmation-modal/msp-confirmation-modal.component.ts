import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MspConfirmationModalData } from '../msp-confirmation-modal-data.interface';

@Component({
  selector: 'msp-confirmation-modal',
  templateUrl: './msp-confirmation-modal.component.html',
  styleUrls: ['./msp-confirmation-modal.component.scss']
})
export class MspConfirmationModalComponent {
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<MspConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public inputModalData: MspConfirmationModalData
  ) {
    this.message = inputModalData.message;
    this.title = inputModalData.title;
  }

  public close(confirmed: boolean) {
    return confirmed
      ? this.closeConfirming()
      : this.closeAborting();
  }

  private closeConfirming(): void {
    this.dialogRef.close(true);
  }

  private closeAborting(): void {
    this.dialogRef.close(false);
  }

}

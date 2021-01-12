import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

export type MspSnackbarNotificateParameters = { message: string; confirmationMessage?: string; duration?: number; horizontalPosition?: MatSnackBarHorizontalPosition; }

@Injectable()
export class MspSnackbarService {
  private isAlreadyShowingASnackbar = false;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public notificate({ message, confirmationMessage = 'Ok', duration = 5000, horizontalPosition = 'right' }: MspSnackbarNotificateParameters) {
    if (!this.isAlreadyShowingASnackbar) {
      this.isAlreadyShowingASnackbar = true;
      return this.snackBar.open(message, confirmationMessage, {duration, horizontalPosition})
        .afterDismissed().subscribe(() => this.isAlreadyShowingASnackbar = false);
    }
    setTimeout(() => this.notificate({ message, confirmationMessage, duration, horizontalPosition }), 500);
  }

  public notificateDeveloping() {
    const parameters = {
      message: "Infelizmente esta funcionalidade ainda está em desenvolvimento!",
      confirmationMessage: "Entendido!",
      horizontalPosition: 'center'
    } as MspSnackbarNotificateParameters
    this.notificate(parameters);
  }
}

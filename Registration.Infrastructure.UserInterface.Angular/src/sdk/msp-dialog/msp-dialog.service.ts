import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MspConfirmationModalComponent } from './msp-confirmation-modal/msp-confirmation-modal.component';

@Injectable()
export class MspDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public confirm(message: string = 'Deseja realmente realizar esta ação?', title: string = 'Confirme'): Observable<boolean> {
    return this.dialog.open(MspConfirmationModalComponent, {data: {message, title}}).afterClosed();
  }

  public open<TComponentOrTemplateRef, TInputModalData>(componentOrTemplateRef: ComponentType<TComponentOrTemplateRef> | TemplateRef<TComponentOrTemplateRef>, config?: MatDialogConfig<TInputModalData>) {
    return this.dialog.open(componentOrTemplateRef, config).afterClosed();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";

import { MspDialogService } from './msp-dialog.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MspConfirmationModalComponent } from './msp-confirmation-modal/msp-confirmation-modal.component';
import { MspConfirmationModalData } from './msp-confirmation-modal-data.interface';
import { MspButtonModule } from '../msp-button/msp-button.module';
import { MspConfirmationModalButtonsComponent } from './msp-confirmation-modal/buttons/msp-confirmation-modal-buttons.component';
import { BaseManipulationModalAbstraction } from './base-manipulation-modal.abstraction';



@NgModule({
  declarations: [MspConfirmationModalComponent, MspConfirmationModalButtonsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
    MspButtonModule,
  ],
  exports: [
    MspConfirmationModalComponent, 
    MspConfirmationModalButtonsComponent,
    MspButtonModule,
    MatDialogModule
  ],
  providers: [
    MspDialogService
  ]
})
export class MspDialogModule { }
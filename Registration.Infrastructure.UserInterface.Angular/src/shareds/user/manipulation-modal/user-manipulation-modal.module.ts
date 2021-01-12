import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserManipulationModalComponent } from './user-manipulation-modal.component';
import { MspInputModule } from 'src/sdk/msp-input/msp-input.module';
import { MspDialogModule } from 'src/sdk/msp-dialog/msp-dialog.module';
import { MspDatepickerModule } from 'src/sdk/msp-datepicker/msp-datepicker.module';
import { MspSelectModule } from 'src/sdk/msp-select/msp-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [UserManipulationModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MspInputModule,
    MspDialogModule,
    MspDatepickerModule,
    MspSelectModule
  ],
  exports: [
    UserManipulationModalComponent
  ]
})
export class UserManipulationModalModule { }

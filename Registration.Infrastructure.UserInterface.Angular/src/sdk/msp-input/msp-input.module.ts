import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MspInputComponent } from './msp-input.component';
import { MspIconModule } from '../msp-icon/msp-icon.module';



@NgModule({
  declarations: [MspInputComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MspIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    MspInputComponent
  ]
})
export class MspInputModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import { MspIconComponent } from './msp-icon.component';



@NgModule({
  declarations: [MspIconComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MspIconComponent
  ]
})
export class MspIconModule { }

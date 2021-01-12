import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MspCardComponent } from './msp-card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [MspCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MspCardComponent
  ]
})
export class MspCardModule { }

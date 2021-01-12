import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import { MspMenuComponent } from './msp-menu.component';
import { MspButtonModule } from '../msp-button/msp-button.module';
import { MspIconModule } from '../msp-icon/msp-icon.module';



@NgModule({
  declarations: [MspMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MspButtonModule,
    MspIconModule,
    RouterModule
  ],
  exports: [
    MspMenuComponent
  ]
})
export class MspMenuModule { }
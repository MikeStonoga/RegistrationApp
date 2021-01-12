import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MspButtonComponent } from './msp-button.component';
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MspIconModule } from '../msp-icon/msp-icon.module';
import { MspCreationButtonComponent } from './creation/msp-creation-button.component';
import { MspUpdateButtonComponent } from './update/msp-update-button.component';
import { MspUpdateButtonService } from './update/msp-update-button.service';



@NgModule({
  declarations: [MspButtonComponent, MspCreationButtonComponent, MspUpdateButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MspIconModule
  ],
  exports: [
    MspButtonComponent,
    MspCreationButtonComponent,
    MspUpdateButtonComponent
  ],
  providers: [
    MspUpdateButtonService
  ]
})
export class MspButtonModule { }

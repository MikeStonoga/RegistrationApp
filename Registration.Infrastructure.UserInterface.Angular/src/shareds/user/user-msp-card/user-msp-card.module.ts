import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMspCardComponent } from './user-msp-card.component';
import { MspCardModule } from 'src/sdk/msp-card/msp-card.module';
import { MspButtonModule } from 'src/sdk/msp-button/msp-button.module';
import { UserSharedService } from '../user-shared.service';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [UserMspCardComponent],
  imports: [
    CommonModule,
    MspCardModule,
    MspButtonModule,
    FlexLayoutModule
  ],
  exports: [
    UserMspCardComponent
  ],
  providers: [
    UserSharedService
  ]
})
export class UserMspCardModule { }

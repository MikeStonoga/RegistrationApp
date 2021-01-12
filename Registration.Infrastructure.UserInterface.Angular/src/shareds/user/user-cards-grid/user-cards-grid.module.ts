import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsGridComponent } from './user-cards-grid.component';
import { MspCardModule } from 'src/sdk/msp-card/msp-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MspButtonModule } from 'src/sdk/msp-button/msp-button.module';
import { UserSharedService } from '../user-shared.service';



@NgModule({
  declarations: [UserCardsGridComponent],
  imports: [
    CommonModule,
    MspCardModule,
    MspButtonModule,
    FlexLayoutModule
  ],
  exports: [
    UserCardsGridComponent
  ],
  providers: [
    UserSharedService
  ]
})
export class UserCardsGridModule { }

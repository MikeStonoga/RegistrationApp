import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from './user-cards.component';
import { UserSharedModule } from 'src/shareds/user/user-shared.module';
import { UserSharedService } from 'src/shareds/user/user-shared.service';
import { UserCardsGridModule } from 'src/shareds/user/user-cards-grid/user-cards-grid.module';
import { UserMspCardModule } from 'src/shareds/user/user-msp-card/user-msp-card.module';



@NgModule({
  declarations: [UserCardsComponent],
  imports: [
    CommonModule,
    UserMspCardModule,
    UserCardsGridModule,
    UserSharedModule
  ],
  providers: [
    UserSharedService,
  ]
})
export class UserCardsModule { }

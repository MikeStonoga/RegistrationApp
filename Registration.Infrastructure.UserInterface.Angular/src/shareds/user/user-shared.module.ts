import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserReadOnlySharedService, UserSharedService } from './user-shared.service';
import { UserMspListModule } from './msp-list/user-msp-list.module';
import { UserManipulationModalModule } from './manipulation-modal/user-manipulation-modal.module';
import { UserMspCardModule } from './user-msp-card/user-msp-card.module';
import { UserCardsGridModule } from './user-cards-grid/user-cards-grid.module';
import { UserApiServiceProxy } from './user.api.service.proxy';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserMspListModule,
    UserManipulationModalModule,
    UserMspCardModule,
    UserCardsGridModule
  ],
  exports: [
    UserMspListModule,
    UserManipulationModalModule,
    UserMspCardModule,
    UserCardsGridModule
  ],
  providers: [
    UserReadOnlySharedService,
    UserSharedService
  ]
})
export class UserSharedModule { }

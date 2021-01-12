import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSharedModule } from 'src/shareds/user/user-shared.module';
import { UserListModule } from './list/user-list.module';
import { UserCardsModule } from './user-cards/user-cards.module';
import { UserSharedService } from 'src/shareds/user/user-shared.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserListModule,
    UserCardsModule,
    UserSharedModule
  ],
  providers: [
    UserSharedService
  ]
})
export class UserModule { }

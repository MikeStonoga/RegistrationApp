import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserReadOnlySharedService, UserSharedService } from 'src/shareds/user/user-shared.service';
import { UserSharedModule } from 'src/shareds/user/user-shared.module';
import { UserMspListModule } from 'src/shareds/user/msp-list/user-msp-list.module';
import { MspListModule } from 'src/sdk/msp-list/msp-list.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserMspListModule,
    MspListModule,
    UserSharedModule
  ],
  providers: [
    UserReadOnlySharedService,
    UserSharedService
  ]
})
export class UserListModule { }

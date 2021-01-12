import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMspListComponent } from './user-msp-list.component';
import { MspListModule } from 'src/sdk/msp-list/msp-list.module';
import { UserReadOnlySharedService, UserSharedService } from '../user-shared.service';



@NgModule({
  declarations: [
    UserMspListComponent
  ],
  imports: [
    CommonModule,
    MspListModule
  ],
  exports: [
    UserMspListComponent,
    MspListModule
  ],
  providers: [
    UserReadOnlySharedService,
    UserSharedService
  ]
})
export class UserMspListModule { }

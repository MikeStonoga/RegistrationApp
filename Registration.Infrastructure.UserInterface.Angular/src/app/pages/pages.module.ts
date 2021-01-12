import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { UserModule } from './user/user.module';
import { UserSharedModule } from 'src/shareds/user/user-shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UserModule,
    UserSharedModule
  ]
})
export class PagesModule { }

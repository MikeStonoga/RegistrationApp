import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MspButtonModule } from 'src/sdk/msp-button/msp-button.module';
import { MspIconModule } from 'src/sdk/msp-icon/msp-icon.module';
import { MspMenuModule } from 'src/sdk/msp-menu/msp-menu.module';
import { UserApiServiceProxy } from 'src/shareds/user/user.api.service.proxy';
import { UserSharedModule } from 'src/shareds/user/user-shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTooltipModule,
    HttpClientModule,
    MspButtonModule,
    MspIconModule,
    MspMenuModule,
    UserSharedModule,
    PagesModule,
  ],
  providers: [
    UserApiServiceProxy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

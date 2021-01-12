import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MspMenuConfiguration } from 'src/sdk/msp-menu/interfaces/msp-menu-configuration.interface';
import { HOME_ICON } from 'src/shareds/consts/icons.consts';
import { USER_PAGES } from './pages/user/user-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'Registration';
  public homeIcon = HOME_ICON;
  title = this.appName;
  showFiller = false;

  constructor(
    private readonly router: Router,
  ) {
  }

  public pages: MspMenuConfiguration[] = [
    USER_PAGES,
  ];
}

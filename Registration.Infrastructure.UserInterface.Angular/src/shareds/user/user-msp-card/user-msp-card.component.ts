import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_APP_PATH } from 'src/app/app-routing.module';
import { CARDS_PATH, LISTA_PATH, USER_PATH } from 'src/app/pages/pages-routing.module';
import { DASHBOARD_ICON, LIST_ICON } from 'src/shareds/consts/icons.consts';
import { UserSharedService } from '../user-shared.service';

@Component({
  selector: 'app-user-msp-card',
  templateUrl: './user-msp-card.component.html',
  styleUrls: ['./user-msp-card.component.scss']
})
export class UserMspCardComponent implements OnInit {
  public readonly listIcon = LIST_ICON;
  public readonly dashboardIcon = DASHBOARD_ICON;

  constructor(
    private readonly router: Router,
    protected readonly service: UserSharedService
  ) { }

  ngOnInit(): void { }

  public navigateToUsersList() {
    this.router.navigate([`${BASE_APP_PATH}/${USER_PATH}/${LISTA_PATH}`]);
  }

  public navigateToUsersCards() {
    this.router.navigate([`${BASE_APP_PATH}/${USER_PATH}/${CARDS_PATH}`]);
  }

}

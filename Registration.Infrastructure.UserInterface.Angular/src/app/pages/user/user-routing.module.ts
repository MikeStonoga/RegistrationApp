import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MspMenuConfiguration } from 'src/sdk/msp-menu/interfaces/msp-menu-configuration.interface';
import {BASE_APP_PATH} from "../../app-routing.module";
import { getBaseMenuItems, getBaseRoutes, USER_PATH} from "../pages-routing.module";
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserListComponent } from './list/user-list.component';

export const BASE_MODULE_PATH = `${BASE_APP_PATH}/${USER_PATH}`;

export const USER_PAGES: MspMenuConfiguration = {
  menuTrigger: {
    icon: 'perm_identity',
    tooltip: 'Usuários'
  },
  menuItems: [
  ].concat(getBaseMenuItems(BASE_MODULE_PATH))
}

const routes: Routes = [].concat(getBaseRoutes(UserListComponent, UserCardsComponent));

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

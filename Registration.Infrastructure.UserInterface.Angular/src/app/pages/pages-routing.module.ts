
import { NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MspMenuItemConfiguration } from 'src/sdk/msp-menu/interfaces/msp.menu-item-configuration.interface';
import { DASHBOARD_ICON, LIST_ICON } from 'src/shareds/consts/icons.consts';

export const HOME_PATH = 'home';
export const USER_PATH = 'user';


const routes: Routes = [
  {path: HOME_PATH, loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: USER_PATH, loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: '**', redirectTo: HOME_PATH}
];


export const LISTA_PATH = 'list';
export const CARDS_PATH = 'cards';

export function getBaseMenuItems(modulePath: string): MspMenuItemConfiguration[] {
  return [
    {icon: LIST_ICON, label: 'Lista', routePath: `${modulePath}/${LISTA_PATH}`},
    {icon: DASHBOARD_ICON, label: 'Cartões', routePath: `${modulePath}/${CARDS_PATH}`}
  ] as MspMenuItemConfiguration[]
}

export function getBaseRoutes(listaComponent: Type<any>, cardsComponent: Type<any>, redirectionPath: string = LISTA_PATH): Routes {
  return [
    {path: LISTA_PATH, component: listaComponent},
    {path: CARDS_PATH, component: cardsComponent},
    {path: '**', redirectTo: redirectionPath}
  ]
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }

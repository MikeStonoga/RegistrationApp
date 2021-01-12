import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const BASE_APP_PATH: string = 'registration';

const routes: Routes = [
  {
    path: BASE_APP_PATH,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: BASE_APP_PATH
  }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

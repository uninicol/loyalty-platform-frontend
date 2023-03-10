import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabAccountPage} from './tab-account.page';

const routes: Routes = [
  {
    path: '',
    component: TabAccountPage,
  },
  {
    path: 'prova',
    loadChildren: () => import('./prova/prova.module').then(m => m.ProvaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAccountPageRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabAccountPage} from './tab-account.page';

const routes: Routes = [
  {
    path: 'account',
    component: TabAccountPage,
    children: [
      {
        path: 'register',
        loadChildren: () => import('../tab-account/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../tab-account/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../tab-account/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
    ]
  },
  {
    path: '',
    component: TabAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAccountPageRoutingModule {
}

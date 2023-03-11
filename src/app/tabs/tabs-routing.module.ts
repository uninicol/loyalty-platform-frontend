import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-tessere',
        loadChildren: () => import('../tab-tessere/tab-tessere.module').then(m => m.TabTesserePageModule)
      },
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'tab-account',
        loadChildren: () => import('../tab-account/tab-account.module').then(m => m.TabAccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      },
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
      {
        path: 'account',
        loadChildren: () => import('../tab-account/account/account.module').then(m => m.AccountPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}

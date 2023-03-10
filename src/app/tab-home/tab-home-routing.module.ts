import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabHomePage} from './tab-home.page';
import {LoginPage} from "../tab-account/login/login.page";

const routes: Routes = [
  {
    path: '',
    component: TabHomePage
  },
  {
    path: 'campaign-details',
    loadChildren: () => import('./campaign-details/campaign-details.module').then(m => m.CampaignDetailsPageModule)
  },
  {
    path: 'login',
    component: LoginPage
//    loadChildren: () => import('../../tab-account/login/login.module').then(m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CampaignDetailsPage} from './campaign-details.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignDetailsPage
  },
  {
    path: 'login',
    redirectTo: '../../tab-account/login',
    pathMatch: 'full',
//    loadChildren: () => import('../../tab-account/login/login.module').then(m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignDetailsPageRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabHomePage} from './tab-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage
  },
  {
    path: 'campaign-details',
    loadChildren: () => import('./campaign-details/campaign-details.module').then(m => m.CampaignDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {
}

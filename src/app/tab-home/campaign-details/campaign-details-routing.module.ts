import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CampaignDetailsPage} from './campaign-details.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignDetailsPageRoutingModule {
}

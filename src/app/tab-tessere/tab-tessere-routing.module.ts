import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabTesserePage } from './tab-tessere.page';

const routes: Routes = [
  {
    path: '',
    component: TabTesserePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTesserePageRoutingModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabAccountPageRoutingModule} from './tab-account-routing.module';

import {TabAccountPage} from './tab-account.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    TabAccountPageRoutingModule
  ],
  declarations: [TabAccountPage]
})
export class TabAccountPageModule {
}

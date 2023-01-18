import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabAccountPageRoutingModule} from './tab-account-routing.module';

import {TabAccountPage} from './tab-account.page';
import {HeaderContainerComponent} from "../header-container/header-container.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAccountPageRoutingModule
  ],
  exports: [
    HeaderContainerComponent
  ],
  declarations: [TabAccountPage, HeaderContainerComponent]
})
export class TabAccountPageModule {
}

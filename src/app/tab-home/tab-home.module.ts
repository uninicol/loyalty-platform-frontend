import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabHomePageRoutingModule} from './tab-home-routing.module';

import {TabHomePage} from './tab-home.page';
import {TabAccountPageModule} from "../tab-account/tab-account.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule,
    TabAccountPageModule
  ],
  declarations: [TabHomePage]
})
export class TabHomePageModule {
}

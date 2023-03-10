import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabTesserePageRoutingModule} from './tab-tessere-routing.module';

import {TabTesserePage} from './tab-tessere.page';
import {TabAccountPageModule} from "../tab-account/tab-account.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTesserePageRoutingModule,
    TabAccountPageModule
  ],
  declarations: [TabTesserePage]
})
export class TabTesserePageModule {
}

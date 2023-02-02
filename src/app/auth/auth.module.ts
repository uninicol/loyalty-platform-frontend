import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage-angular";
import {JwtModule} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        //disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ]
})
export class AuthModule {
}

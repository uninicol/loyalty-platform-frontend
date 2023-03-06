import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-tab-account',
  templateUrl: './tab-account.page.html',
  styleUrls: ['./tab-account.page.scss'],
})
export class TabAccountPage implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  public isLogged() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout()
  }
}

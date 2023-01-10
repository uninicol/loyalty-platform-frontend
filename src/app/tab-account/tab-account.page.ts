import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-account',
  templateUrl: './tab-account.page.html',
  styleUrls: ['./tab-account.page.scss'],
})
export class TabAccountPage implements OnInit {

  notLoggedOptions= ["Sign up now", "Sign in"]
  loggedOptions=["Account", "Support", "Settings"]

  constructor() {
  }

  ngOnInit() {
  }

  public isLogged() {
    return false;
  }
}

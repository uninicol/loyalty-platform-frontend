import {Component, OnInit} from '@angular/core';
import {AuthService, UserDetails} from "../../auth/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  user: UserDetails

  constructor(
    private auth: AuthService
  ) {
    this.user = <UserDetails>this.auth.getUser()
  }

  ngOnInit() {
  }

}

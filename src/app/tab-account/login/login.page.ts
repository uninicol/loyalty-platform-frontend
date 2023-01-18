import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  environment = environment
  auth = {
    email: '',
    password: ''
  }

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
  }

  checkValues() {
    this.httpClient
      .post<boolean>(`${environment.apiUrl}/users/auth`, this.auth)
      .subscribe(isValid => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (isValid)
          this.router.navigateByUrl(returnUrl)
        //else error
      });
  }
}

interface Auth {
  email: string
  password: string
}

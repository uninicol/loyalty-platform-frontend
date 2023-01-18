import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  environment = environment;
  auth = {
    email: '',
    password: '',
    confirm_password: ''
  }


  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  public register() {
    if (this.auth.password != this.auth.confirm_password)
      return false  //fare errore registrazione

    this.httpClient
      .post<boolean>(`${environment.apiUrl}/users/register`, this.auth)
      .subscribe(isValid => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (isValid)
          this.router.navigateByUrl(returnUrl)
        //else error
      });
    return true
  }

}

interface Auth {
  email: string,
  password: string,
  confirm_password: string
}

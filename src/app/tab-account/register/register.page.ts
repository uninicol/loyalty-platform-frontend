import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

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
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  public register() {
    if (this.auth.password != this.auth.confirm_password)
      return false  //TODO errore registrazione
    this.httpClient
      .post<boolean>(`${environment.apiUrl}/users/register`, this.auth)
      .subscribe(isValid => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (isValid) {
          this.authService.login(this.auth.email, this.auth.password);
          this.router.navigateByUrl(returnUrl)
        }
        //else error
      });
    return true
  }

}

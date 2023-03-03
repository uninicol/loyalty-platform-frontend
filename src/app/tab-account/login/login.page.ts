import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // form: any = {
  //   username: null,
  //   password: null
  // };
  // isLoggedIn = false;
  // isLoginFailed = false;
  // roles: string[] = [];
  //
  // constructor(private authService: AuthService, private storageService: Storage) { }
  //
  // ngOnInit(): void {
  //   if (this.storageService.isLoggedIn()) {
  //     this.isLoggedIn = true;
  //     this.roles = this.storageService.getUser().roles;
  //   }
  // }
  //
  // onSubmit(): void {
  //   const { username, password } = this.form;
  //
  //   this.authService.login(username, password).subscribe({
  //     next: data => {
  //       this.storageService.saveUser(data);
  //
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.storageService.getUser().roles;
  //     },
  //     error: err => {
  //       this.isLoginFailed = true;
  //     }
  //   });
  // }
  environment = environment
  auth = {
    email: '',
    password: ''
  }

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.auth.email, this.auth.password);
    // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // if (isValid)
    //   this.router.navigateByUrl(returnUrl)
    //else error
  }
}

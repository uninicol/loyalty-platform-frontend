import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {AlertController} from "@ionic/angular";

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
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private alertController: AlertController) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  login() {
    this.authService.login(this.auth.email, this.auth.password)
      .subscribe({
        next: data => {
          console.log("login eseguito con successo")
          this.authService.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl)
        },
        error: _ => {
          this.presentAlert()
          console.log("dati non corretti")
          this.isLoginFailed = true;
        }
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attenzione',
      subHeader: 'Login rifiutato',
      message: 'Dati non corretti!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

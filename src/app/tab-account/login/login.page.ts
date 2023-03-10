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

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private alertController: AlertController) {
  }

  ngOnInit() {
  }

  login() {
    let success = this.authService.login(this.auth.email, this.auth.password);
    if (!success) {
      this.presentAlert()
      throw new Error("registrazione non andata a buon fine")
    }
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigateByUrl(returnUrl)
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

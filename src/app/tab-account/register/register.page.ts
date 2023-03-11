import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  environment = environment;
  auth = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirm_password: '',
    telephoneNumber: ''
  }

  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private alertController: AlertController) {
  }

  ngOnInit() {
  }

  register() {
    if (this.auth.password != this.auth.confirm_password)
      throw new Error("password non uguali")
    this.authService.register(this.auth.name, this.auth.surname, this.auth.email, this.auth.password, this.auth.telephoneNumber)
      .subscribe({
        next: data => {
          console.log("registrato con successo")
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.authService.saveUser(data)
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl)
        },
        error: _ => {
          console.log("Registrazione rifiutata")
          this.presentAlert()
          this.isSignUpFailed = true;
        }
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attenzione',
      subHeader: 'registrazione rifiutata',
      message: 'Email già utilizzata!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

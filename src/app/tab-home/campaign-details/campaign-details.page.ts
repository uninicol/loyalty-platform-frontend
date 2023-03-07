import {Component, OnInit} from '@angular/core';
import {Campaign} from "../Campaign";
import {NavParams} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.page.html',
  styleUrls: ['./campaign-details.page.scss'],
})
export class CampaignDetailsPage implements OnInit {
  campaign: Campaign
  isUserAlreadySubscribed: boolean

  constructor(private navParams: NavParams,
              private http: HttpClient,
              private auth: AuthService) {
    this.campaign = this.navParams.get('inputValue');
    this.isUserAlreadySubscribed = this.isUserAlreadySubscribedCheck()
  }

  ngOnInit() {
  }

  isUserAlreadySubscribedCheck(): boolean {
    let userId = this.auth.getUser()?.id
    if (userId == null)
      return false // TODO non essendo loggato chiedere se registrarsi o loggarsi
    let isRegistered = false
    this.http.post<boolean>(`${environment.apiUrl}/client/${userId}/isRegisteredTo/${this.campaign.id}`, {})
      .subscribe(value => isRegistered = value)
    return isRegistered;
  }

  subscribeToCampaign() {
    if (this.isUserAlreadySubscribed)
      return
    let userId = this.auth.getUser()?.id
    if (userId == null)
      throw new Error("Utente non loggato") // TODO chiedere login o registrazione
    this.http.post(`${environment.apiUrl}/client/${userId}/isRegisteredTo/${this.campaign.id}`, {})
    this.isUserAlreadySubscribed = true
    console.log("iscritto alla campagna")
  }
}

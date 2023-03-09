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
    if (!this.auth.isLoggedIn())
      return false // TODO non essendo loggato chiedere se registrarsi o loggarsi
    let isRegistered = false
    this.http.post<boolean>(`${environment.apiUrl}/client/isRegisteredTo/${this.campaign.id}`, {})
      .subscribe(value => isRegistered = value)
    return isRegistered;
  }

  async subscribeToCampaign() {
    if (!this.auth.isLoggedIn())
      throw new Error("Utente non loggato") // TODO chiedere login o registrazione
    this.http.post(`${environment.apiUrl}/client/registerToCampaign/${this.campaign.id}`,
      {},
      {responseType: "text"})
      .subscribe(value => console.log(value))
    this.isUserAlreadySubscribed = true
  }
}

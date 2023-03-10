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
  isUserAlreadySubscribed: boolean | undefined
  isLogged: boolean

  constructor(private navParams: NavParams,
              private http: HttpClient,
              public auth: AuthService) {
    this.campaign = this.navParams.get('inputValue');
    this.isLogged = this.auth.isLoggedIn()
  }

  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn()
    if (this.isLogged)
      this.updateIsAlreadySubscribed()
  }

  subscribeToCampaign() {
    this.http.post(`${environment.apiUrl}/client/registerToCampaign/${this.campaign.id}`,
      {},
      {responseType: "text"})
      .subscribe(value => {
        console.log(value);
        this.isUserAlreadySubscribed = true;
      })
  }

  private updateIsAlreadySubscribed() {
    this.http.get<boolean>(`${environment.apiUrl}/client/isRegisteredTo/${this.campaign.id}`)
      .subscribe(value => this.isUserAlreadySubscribed = value)
  }
}

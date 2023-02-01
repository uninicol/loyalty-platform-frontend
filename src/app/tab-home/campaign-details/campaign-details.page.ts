import {Component, OnInit} from '@angular/core';
import {Campaign} from "../campaign";
import {NavParams} from "@ionic/angular";

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.page.html',
  styleUrls: ['./campaign-details.page.scss'],
})
export class CampaignDetailsPage implements OnInit {
  campaign: Campaign

  constructor(private navParams: NavParams) {
    this.campaign = this.navParams.get('inputValue');
  }

  ngOnInit() {
  }

}

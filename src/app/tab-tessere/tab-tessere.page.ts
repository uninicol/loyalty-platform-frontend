import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {TessereService} from "./tessere.service";
import {CampaignsCardsService} from "../tab-home/campaigns-cards.service";

@Component({
  selector: 'app-tab-tessere',
  templateUrl: './tab-tessere.page.html',
  styleUrls: ['./tab-tessere.page.scss'],
})
export class TabTesserePage implements OnInit {

  constructor(public auth: AuthService,
              public tessereService: TessereService,
              public campaignService: CampaignsCardsService) {
    if (this.auth.isLoggedIn())
      this.tessereService.updateCards();
  }

  ngOnInit() {
    if (this.auth.isLoggedIn())
      return
    this.tessereService.clear()
  }

  onIonInfinite(event: any) {
    this.tessereService.addDispayedCards(event)
  }

  onIonRefresh(event: any) {
    this.tessereService.refreshCards(event)
  }
}

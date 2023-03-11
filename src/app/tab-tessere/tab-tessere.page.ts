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

  isLoggedIn: boolean

  constructor(private auth: AuthService,
              public tessereService: TessereService,
              public campaignService: CampaignsCardsService) {
    this.isLoggedIn = auth.isLoggedIn()
    if (this.isLoggedIn)
      this.tessereService.updateCards();
  }

  ngOnInit() {
    // this.isLoggedIn = this.auth.isLoggedIn()
    // if (this.isLoggedIn)
    //   return
    // this.displayedCards = []
    // this.cards = []
    // this.lastPicked = 0
  }

  onIonInfinite(event: any) {
    this.tessereService.addDispayedCards(event)
  }

  onIonRefresh(event: any) {
    this.tessereService.refreshCards(event)
  }
}

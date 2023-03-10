import {Component, OnInit} from '@angular/core';
import {Card} from "./Card";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Campaign} from "../tab-home/Campaign";
import {CampaignDetailsPage} from "../tab-home/campaign-details/campaign-details.page";
import {ModalController} from "@ionic/angular";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-tab-tessere',
  templateUrl: './tab-tessere.page.html',
  styleUrls: ['./tab-tessere.page.scss'],
})
export class TabTesserePage implements OnInit {

  isLoggedIn: boolean
  CARD_DISPLAYED_EACH_REFRESH: number = 10
  cards: Card[] = []
  displayedCards: Card[] = []
  lastPicked: number = 0

  constructor(private modalController: ModalController,
              private httpClient: HttpClient,
              private auth: AuthService) {
    this.isLoggedIn = auth.isLoggedIn()
    if (this.isLoggedIn)
      this.updateCards();
  }

  ngOnInit() {
  }

  onIonInfinite(event: any) {
    setTimeout(() => {
      this.addItems()
      event.target.complete();
    }, 1000);
  }

  onIonRefresh(event: any) {
    this.displayedCards = []
    this.lastPicked = 0
    setTimeout(() => {
      this.updateCards()
      event.target.complete();
    }, 300);
  }

  async openCampaignDetails(campaign: Campaign) {
    const modal = await this.modalController.create({
      component: CampaignDetailsPage,
      componentProps: {
        inputValue: campaign
      }
    });
    return await modal.present();
  }

  flip(id: number) {
    let flippedCard = document.getElementById(String(id));
    // @ts-ignore
    flippedCard.classList.toggle('is-flipped');
  }

  private updateCards() {
    this.httpClient.get<Card[]>(`${environment.apiUrl}/customerCard/getCards`)
      .subscribe(dataFromBackend => {
        this.cards = dataFromBackend
        this.addItems()
      });
  }

  private addItems() {
    let sum = 0
    let i
    for (i = this.lastPicked; sum != this.CARD_DISPLAYED_EACH_REFRESH && i < this.cards.length; i++) {
      this.displayedCards.push(this.cards[i])
      sum++
    }
    this.lastPicked = i
  }
}

import {Injectable} from '@angular/core';
import {Card} from "./Card";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TessereService {
  CARD_DISPLAYED_EACH_REFRESH: number = 10
  cards: Card[] = []
  displayedCards: Card[] = []
  lastPicked: number = 0

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
  }

  flip(id: number) {
    let flippedCard = document.getElementById(String(id));
    // @ts-ignore
    flippedCard.classList.toggle('is-flipped');
  }

  updateCards() {
    if (!this.auth.isLoggedIn())
      return
    this.httpClient.get<Card[]>(`${environment.apiUrl}/client/getCards`)
      .subscribe(dataFromBackend => {
        this.cards = dataFromBackend
        this.addItems()
      });
  }

  addDispayedCards(event: any) {
    setTimeout(() => {
      this.addItems()
      event.target.complete();
    }, 1000);
  }

  refreshCards(event: any) {
    this.displayedCards = []
    this.lastPicked = 0
    setTimeout(() => {
      this.updateCards()
      event.target.complete();
    }, 300);
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

import {Component, OnInit} from '@angular/core';
import {Card} from "./Card";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-tab-tessere',
  templateUrl: './tab-tessere.page.html',
  styleUrls: ['./tab-tessere.page.scss'],
})
export class TabTesserePage implements OnInit {
  cards: Card[] = []
  lastCardFlipped: number
  lastCard: HTMLElement | null | undefined

  constructor(private httpClient: HttpClient) {
    httpClient
      .get<Card[]>(`${environment.apiUrl}/card/all`)
      .subscribe(dataFromBackend => this.cards = dataFromBackend);
    this.lastCardFlipped = -1
  }

  ngOnInit() {
  }

  onIonInfinite($event: any) {

  }

  flip(id: number) {
    if (this.lastCard != null)
      this.lastCard.classList.toggle('is-flipped');
    this.lastCard = document.getElementById(String(id));
    // @ts-ignore
    this.lastCard.classList.toggle('is-flipped');
  }
}

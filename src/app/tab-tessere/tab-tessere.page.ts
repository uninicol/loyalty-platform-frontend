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

  constructor(private httpClient: HttpClient) {
    httpClient
      .get<Card[]>(`${environment.apiUrl}/card/all`)
      .subscribe(dataFromBackend => this.cards = dataFromBackend);
  }

  ngOnInit() {
  }

  onIonInfinite($event: any) {

  }

  flip(id: number) {
    let flippedCard = document.getElementById(String(id));
    // @ts-ignore
    flippedCard.classList.toggle('is-flipped');
  }
}

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

  cardss = [
    {
      id: "64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier: "1",
    },
    {
      id: "64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier: "1",
    },
    {
      id: "64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier: "1",
    },
    {
      id: "64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier: "1",
    },
    {
      id: "64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier: "1",
    },
    {
      id: "64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier: "1",
    },

  ]

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
}

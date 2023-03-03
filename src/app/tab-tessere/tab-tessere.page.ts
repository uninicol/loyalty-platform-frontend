import {Component, OnInit} from '@angular/core';
import {Card} from "./Card";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Campaign} from "../tab-home/Campaign";
import {CampaignDetailsPage} from "../tab-home/campaign-details/campaign-details.page";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-tab-tessere',
  templateUrl: './tab-tessere.page.html',
  styleUrls: ['./tab-tessere.page.scss'],
})
export class TabTesserePage implements OnInit {
  cards: Card[] = []

  constructor(private modalController: ModalController, private httpClient: HttpClient) {
    httpClient
      .get<Card[]>(`${environment.apiUrl}/card/all`)
      .subscribe(dataFromBackend => this.cards = dataFromBackend);
  }

  ngOnInit() {
  }

  onIonInfinite($event: any) {
    //TODO implementare
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
}

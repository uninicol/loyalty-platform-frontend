import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Campaign} from "./Campaign";
import {ModalController} from "@ionic/angular";
import {CampaignDetailsPage} from "./campaign-details/campaign-details.page";
import {Categories} from "./Categories";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit, AfterViewInit {

  CAMPAIGNS_DISPLAYED: number = 4
  lastPicked: number
  campaigns: Campaign[]
  displayedCampaigns: Campaign[]
  categories: string[]
  currentCategory: string

  httpClient: HttpClient

  constructor(private modalController: ModalController, httpClient: HttpClient) {
    this.campaigns = []
    this.httpClient = httpClient
    this.displayedCampaigns = []
    this.lastPicked = 0
    this.categories = Object.keys(Categories) //enum to string
      .filter(key => Number.isNaN(Number(key)))
      .map(key => (key.charAt(0).toUpperCase() + key.slice(1)).split('_').join(' '))
    this.currentCategory = this.categories[0]
    this.updateCampaigns()
    this.addItems()
  }

  onIonRefresh(event: any) {
    this.displayedCampaigns = []
    this.lastPicked = 0
    setTimeout(() => {
      this.updateCampaigns()
      this.addItems()
      event.target.complete();
    }, 300);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.categoryButtonRefresh(this.currentCategory)
  }

  onIonInfinite(event: any) {
    setTimeout(() => {
      this.addItems()
      event.target.complete();
    }, 1000);
  }

  categoryButtonRefresh(category: string) {
    setTimeout(() => {
      this.changeButtonColor(category)
      this.currentCategory = category;
      this.displayedCampaigns = []
      this.lastPicked = 0
      this.addItemsByCategory(category)
    }, 300);
  }

  private addItemsByCategory(category: string) {
    let sum = 0;
    let all = false;
    if (category === this.categories[0])
      all = true
    let i;
    for (i = this.lastPicked; sum != this.CAMPAIGNS_DISPLAYED && i < this.campaigns.length; i++) {
      if (all || this.campaigns[i].category === category) {
        // @ts-ignore
        this.displayedCampaigns.push(this.campaigns[i]);
        sum++
      }
    }
    this.lastPicked = i;
  }

  private addItems() {
    this.addItemsByCategory(this.currentCategory)
  }

  private updateCampaigns() {
    this.httpClient
      .get<Campaign[]>(`${environment.apiUrl}/campaign/getCampaigns`)
      .subscribe(dataFromBackend => this.campaigns = dataFromBackend);
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

  private changeButtonColor(category: string) {
    // @ts-ignore
    document.getElementById(this.currentCategory)
      .setAttribute("fill", "outline")
    // @ts-ignore
    document.getElementById(category)
      .setAttribute("fill", "solid")
  }
}

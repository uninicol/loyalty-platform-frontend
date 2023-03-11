import {Injectable} from '@angular/core';
import {Campaign} from "./Campaign";
import {HttpClient} from "@angular/common/http";
import {CategoryBarService} from "./category-bar.service";
import {ModalController} from "@ionic/angular";
import {environment} from "../../environments/environment";
import {CampaignDetailsPage} from "./campaign-details/campaign-details.page";

@Injectable({
  providedIn: 'root'
})
export class CampaignsCardsService {

  CAMPAIGNS_TO_DISPLAY: number = 4
  lastPicked: number
  campaigns: Campaign[]
  displayedCampaigns: Campaign[]

  constructor(private httpClient: HttpClient,
              private categoryBarService: CategoryBarService,
              private modalController: ModalController) {
    this.campaigns = []
    this.displayedCampaigns = []
    this.lastPicked = 0
    this.updateCampaigns()
  }

  refreshCampaign(event: any) {
    this.displayedCampaigns = []
    this.lastPicked = 0
    setTimeout(() => {
      this.updateCampaigns()
      event.target.complete();
    }, 300);
  }

  addDisplayedCampaigns(event: any) {
    setTimeout(() => {
      this.addItems()
      event.target.complete();
    }, 1000);
  }

  addItemsByCategory(category: string) {
    let sum = 0;
    let all = false;
    if (category === this.categoryBarService.categories[0])
      all = true
    let i;
    for (i = this.lastPicked; sum != this.CAMPAIGNS_TO_DISPLAY && i < this.campaigns.length; i++) {
      if (all || this.campaigns[i].category === category) {
        // @ts-ignore
        this.displayedCampaigns.push(this.campaigns[i]);
        sum++
      }
    }
    this.lastPicked = i;
  }

  refreshDisplayedCampaignsByCategory(category: string) {
    this.categoryBarService.changeButtonColor(category)
    this.categoryBarService.currentCategory = category;
    this.displayedCampaigns = []
    this.lastPicked = 0
    this.addItemsByCategory(category)
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

  private addItems() {
    this.addItemsByCategory(this.categoryBarService.currentCategory)
  }

  private updateCampaigns() {
    this.httpClient
      .get<Campaign[]>(`${environment.apiUrl}/activity/campaign/getCampaigns`)
      .subscribe(dataFromBackend => {
        this.campaigns = dataFromBackend
        this.addItems()
      });
  }
}

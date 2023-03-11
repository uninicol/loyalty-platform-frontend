import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Campaign} from "./Campaign";
import {ModalController} from "@ionic/angular";
import {CampaignDetailsPage} from "./campaign-details/campaign-details.page";
import {CampaignsCardsService} from "./campaigns-cards.service";
import {CategoryBarService} from "./category-bar.service";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit, AfterViewInit {

  constructor(private modalController: ModalController,
              public campaignsCardsService: CampaignsCardsService,
              public categoryBarService: CategoryBarService) {
  }

  onIonRefresh(event: any) {
    this.campaignsCardsService.refreshCampaign(event)
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.categoryButtonRefresh(this.categoryBarService.currentCategory)
  }

  onIonInfinite(event: any) {
    this.campaignsCardsService.addDisplayedCampaigns(event)
  }

  categoryButtonRefresh(category: string) {
    this.campaignsCardsService.refreshDisplayedCampaignsByCategory(category)
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
}

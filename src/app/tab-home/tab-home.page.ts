import {Component, OnInit} from '@angular/core';
import {Campaign} from "./campaign";
import {ModalController} from "@ionic/angular";
import {CategoriesFilterButtonsComponent} from "./categories-filter-buttons/categories-filter-buttons.component";
import {CampaignDetailsPage} from "./campaign-details/campaign-details.page";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  LIMIT: number = 5;
  lastPicked: number = -1;
  campaigns: Campaign[]
  displayedCampaigns: Campaign[]

  constructor(private modalController: ModalController) {
    this.campaigns = [
      {
        company: "Adidas",
        category: "Sport",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
        description: "Prendi le scarpe col 10% di sconto"
      },
      {
        company: "Lenovo",
        category: "Tecnologia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
        description: "Laptop ultima generazione fino a 50$ di sconto"
      },
      {
        company: "Adidas",
        category: "Sport",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
        description: "Prendi le scarpe col 10% di sconto"
      },
      {
        company: "Lenovo",
        category: "Tecnologia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
        description: "Laptop ultima generazione fino a 50$ di sconto"
      }, {
        company: "Adidas",
        category: "Sport",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
        description: "Prendi le scarpe col 10% di sconto"
      },
      {
        company: "Lenovo",
        category: "Tecnologia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
        description: "Laptop ultima generazione fino a 50$ di sconto"
      }, {
        company: "Adidas",
        category: "Sport",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
        description: "Prendi le scarpe col 10% di sconto"
      },
      {
        company: "Lenovo",
        category: "Tecnologia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
        description: "Laptop ultima generazione fino a 50$ di sconto"
      },
    ]
    this.displayedCampaigns = []

    const categoriesButtons = this.modalController.create({
      component: CategoriesFilterButtonsComponent
    });
  }

  ngOnInit() {
  }

  addItems(count: number, category: string) {
    let sum = 0
    for (let i = this.lastPicked + 1; sum === count && i < this.campaigns.length; i++) {
      if (this.campaigns[i].category === "Tutto" || this.campaigns[i].category === category) {
        // @ts-ignore
        this.displayedCampaigns.unshift(this.campaigns[i]);
        sum++
      }
    }
  }


  handleRefresh(event: any, category: string) {
    setTimeout(() => {
      // Any calls to load data go here
      // @ts-ignore
      document.getElementById(category).setAttribute("fill", "solid")
      // @ts-ignore
      document.getElementById(this.currentCategory).setAttribute("fill", "outline")

      event.target.complete();
    }, 100);
  }

  onIonInfinite($event: any) {

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

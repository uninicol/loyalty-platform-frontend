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
        company: "Zara",
        category: "Moda",
        logo: "https://www.zara.com/logo.png",
        description: "Iscriviti alla nostra newsletter e ricevi uno sconto del 10% sulla tua prossima spesa. Inoltre, parteciperai automaticamente ai nostri programmi di fidelizzazione per guadagnare premi esclusivi."
      },
      {
        company: "Apple",
        category: "Tecnologia",
        logo: "https://www.apple.com/logo.png",
        description: "Diventa membro di Apple Music e ottieni accesso a contenuti esclusivi e sconti sulle nuove uscite. Inoltre, ogni acquisto effettuato presso uno dei nostri store ti farà guadagnare punti per i premi."
      },
      {
        company: "Sephora",
        category: "Bellezza",
        logo: "https://www.sephora.com/logo.png",
        description: "Iscriviti al nostro programma di fidelizzazione Beauty Insider e ricevi sconti sui tuoi acquisti, campioni gratuiti e accesso a eventi esclusivi."
      },
      {
        company: "Nike",
        category: "Sport",
        logo: "https://www.nike.com/logo.png",
        description: "Unisciti al nostro programma Nike Member e ottieni accesso a sconti esclusivi, prodotti in anteprima e una serie di eventi esclusivi riservati ai membri."
      },
      {
        company: "Lululemon",
        category: "Fitness e salute",
        logo: "https://www.lululemon.com/logo.png",
        description: "Unisciti al programma di fidelizzazione Lululemon e ottieni accesso a sconti esclusivi, eventi esclusivi e programmi personalizzati per migliorare la tua salute e il tuo benessere."
      },
      {
        company: "Coursera",
        category: "Istruzione",
        logo: "https://www.coursera.org/logo.png",
        description: "Diventa membro di Coursera Plus e accedi a migliaia di corsi online. Inoltre, potrai guadagnare certificati verificati e partecipare a eventi esclusivi per i membri."
      },
      {
        company: "Adidas",
        category: "Sport",
        logo: "https://www.adidas.com/logo.png",
        description: "Unisciti alla squadra Adidas e ottieni accesso a sconti esclusivi, prodotti in anteprima e partecipa a eventi esclusivi per i membri."
      },
      {
        company: "Fitbit",
        category: "Fitness e salute",
        logo: "https://www.fitbit.com/logo.png",
        description: "Iscriviti al nostro programma di fidelizzazione Fitbit Premium e ottieni accesso a funzioni avanzate, programmi personalizzati e sconti sui prodotti Fitbit."
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

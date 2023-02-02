import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Campaign} from "./Campaign";
import {ModalController} from "@ionic/angular";
import {CampaignDetailsPage} from "./campaign-details/campaign-details.page";
import {Categories} from "./Categories";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit, AfterViewInit {

  LIMIT: number = 4
  lastPicked: number
  campaigns: Campaign[]
  displayedCampaigns: Campaign[]
  categories: string[]
  currentCategory: string

  constructor(private modalController: ModalController) {
    this.campaigns = [
      {
        company: "Zara",
        category: "Moda",
        logo: "https://asset.brandfetch.io/id96Nz75pK/idlCWIWI34.jpeg",
        description: "Iscriviti alla nostra newsletter e ricevi uno sconto del 10% sulla tua prossima spesa. Inoltre, parteciperai automaticamente ai nostri programmi di fidelizzazione per guadagnare premi esclusivi.",
        shortDescription: "Ricevi sconti e guadagna premi con il programma di fidelizzazione di Zara."
      },
      {
        company: "Apple",
        category: "Tecnologia",
        logo: "https://www.apple.com/logo.png",
        description: "Diventa membro di Apple Music e ottieni accesso a contenuti esclusivi e sconti sulle nuove uscite. Inoltre, ogni acquisto effettuato presso uno dei nostri store ti farà guadagnare punti per i premi.",
        shortDescription: "Ottieni accesso a contenuti esclusivi, sconti e premi con il programma di fidelizzazione di Apple."
      },
      {
        company: "Sephora",
        category: "Bellezza",
        logo: "https://www.sephora.com/logo.png",
        description: "Iscriviti al nostro programma di fidelizzazione Beauty Insider e ricevi sconti sui tuoi acquisti, campioni gratuiti e accesso a eventi esclusivi.",
        shortDescription: "Ricevi sconti, campioni gratuiti e partecipa a eventi esclusivi con il programma di fidelizzazione di Sephora."
      },
      {
        company: "Nike",
        category: "Sport",
        logo: "https://www.nike.com/logo.png",
        description: "Unisciti al nostro programma Nike Member e ottieni accesso a sconti esclusivi, prodotti in anteprima e una serie di eventi esclusivi riservati ai membri.",
        shortDescription: "Ottieni accesso a sconti esclusivi, prodotti in anteprima e eventi con il programma di fidelizzazione di Nike."
      },
      {
        company: "Coursera",
        category: "Istruzione",
        logo: "https://www.coursera.org/logo.png",
        description: "Diventa membro di Coursera Plus e accedi a migliaia di corsi online. Inoltre, potrai guadagnare certificati verificati e partecipare a eventi esclusivi per i membri.",
        shortDescription: "Accedi a corsi online, certificati verificati e eventi esclusivi con Coursera Plus."
      },
      {
        company: "Adidas",
        category: "Sport",
        logo: "https://www.adidas.com/logo.png",
        description: "Unisciti alla squadra Adidas e ottieni accesso a sconti esclusivi, prodotti in anteprima e partecipa a eventi esclusivi per i membri.",
        shortDescription: "Ottieni accesso a sconti esclusivi, prodotti in anteprima e eventi con il programma di fidelizzazione di Adidas."
      },
      {
        company: "SoulCycle",
        category: "Fitness e salute",
        logo: "https://www.soul-cycle.com/logo.png",
        description: "Diventa membro di SoulCycle e ottieni accesso a lezioni di ciclismo esclusive, sconti su prodotti e servizi, e eventi esclusivi per i membri.",
        shortDescription: "Ottieni accesso a lezioni esclusive, sconti e eventi con il programma di fidelizzazione di SoulCycle."
      },
      {
        company: "Lululemon",
        category: "Fitness e salute",
        logo: "https://www.lululemon.com/logo.png",
        description: "Unisciti al programma di fidelizzazione Lululemon e ottieni accesso a sconti esclusivi, eventi esclusivi e programmi personalizzati per migliorare la tua salute e il tuo benessere.",
        shortDescription: "Ottieni accesso a sconti esclusivi, eventi e programmi personalizzati con il programma di fidelizzazione di Lululemon."
      },
      {
        company: "Casa & Cuore",
        category: "Lifestyle",
        logo: "https://www.casaecuore.com/logo.png",
        description: "Unisciti al programma di fidelizzazione Casa & Cuore e ottieni accesso a sconti esclusivi su prodotti per la casa, eventi esclusivi e idee per la decorazione.",
        shortDescription: "Ottieni accesso a sconti, eventi e idee per la decorazione con il programma di fidelizzazione di Casa & Cuore."
      },
      {
        company: "Le Plaisir",
        category: "Lifestyle",
        logo: "https://www.leplaisir.com/logo.png",
        description: "Unisciti al programma di fidelizzazione Le Plaisir e ottieni accesso a sconti esclusivi su prodotti gourmet, eventi esclusivi e consigli per la cucina.",
        shortDescription: "Ottieni accesso a sconti, eventi e consigli per la cucina con il programma di fidelizzazione di Le Plaisir."
      }
    ]
    this.displayedCampaigns = []
    this.lastPicked = 0
    this.categories = Object.keys(Categories)
      .filter(key => Number.isNaN(Number(key)))
      .map(key => (key.charAt(0).toUpperCase() + key.slice(1)).split('_').join(' '))
    this.currentCategory = this.categories[0]
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // @ts-ignore
    document.getElementById(this.currentCategory)
      .setAttribute("fill", "solid")
    this.addItems(this.LIMIT, this.currentCategory)
  }

  addItems(count: number, category: string) {
    let sum = 0;
    let all = false;
    if (category === this.categories[0])
      all = true
    let i;
    for (i = this.lastPicked; sum != count && i < this.campaigns.length; i++) {
      if (all || this.campaigns[i].category === category) {
        // @ts-ignore
        this.displayedCampaigns.push(this.campaigns[i]);
        sum++
      }
    }
    this.lastPicked = i;
  }

  onIonInfinite(event: any) {
    setTimeout(() => {
      this.addItems(this.LIMIT, this.currentCategory)
      event.target.complete();
    }, 1000);
  }

  categoryButtonRefresh(category: string) {
    setTimeout(() => {
      this.changeButtonColor(category)
      this.currentCategory = category;
      this.displayedCampaigns = []
      this.lastPicked = 0
      this.addItems(this.LIMIT, category)
    }, 300);
  }

  onIonRefresh(event: any) {
    this.displayedCampaigns = []
    this.lastPicked = 0
    this.addItems(this.LIMIT, this.currentCategory)
    setTimeout(() => {
      //chiamata API alle campagne nuove
      event.target.complete();
    }, 300);
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
    document.getElementById(category)
      .setAttribute("fill", "solid")
    // @ts-ignore
    document.getElementById(this.currentCategory)
      .setAttribute("fill", "outline")
  }
}

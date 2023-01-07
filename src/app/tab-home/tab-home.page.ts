import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  currentCategory: string = "Tutto"
  campaigns = [
    {
      company: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
      description: "Prendi le scarpe col 10% di sconto"
    },
    {
      company: "Lenovo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
      description: "Laptop ultima generazione fino a 50$ di sconto"
    },
    {
      company: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
      description: "Prendi le scarpe col 10% di sconto"
    },
    {
      company: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
      description: "Prendi le scarpe col 10% di sconto"
    },
    {
      company: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
      description: "Prendi le scarpe col 10% di sconto"
    },
    {
      company: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
      description: "Prendi le scarpe col 10% di sconto"
    },
    {
      company: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png",
      description: "Prendi le scarpe col 10% di sconto"
    },
  ]
  categories = ["Tutto", "Moda", "Tecnologia", "Bellezza", "Fitness e salute", "Lifestyle", "Sport", "Istruzione"]

  constructor() {
  }

  ngOnInit() {
  }


  handleRefresh($event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      $event.target.complete();
    }, 2000);
  }

  getCategory(category: any) {

  }

  onIonInfinite($event: any) {

  }

  getCurrentCategory() {
    return this.currentCategory
  }
}

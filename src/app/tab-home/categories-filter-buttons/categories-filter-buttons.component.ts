import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {TabHomePage} from "../tab-home.page";
import {Categories} from "../Categories";

@Component({
  selector: 'app-categories-filter-buttons',
  templateUrl: './categories-filter-buttons.component.html',
  styleUrls: ['./categories-filter-buttons.component.scss'],
})
export class CategoriesFilterButtonsComponent implements OnInit {
  categories: string[]
  currentCategory: string

  constructor(private modalController: ModalController,
              private navParams: NavParams) {
    this.categories = Object.keys(Categories)
      .filter(key => Number.isNaN(Number(key)))
      .map(key => (key.charAt(0).toUpperCase() + key.slice(1)).split('_').join(' ')
      )
    this.currentCategory = this.categories[0];
  }

  ngOnInit() {
    this.currentCategory = this.navParams.get('currentCategory');
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: TabHomePage,
      componentProps: {
        currentCategory: this.currentCategory
      }
    });
    return await modal.present();
  }

  handleRefresh($event: any, category: string) {

  }
}

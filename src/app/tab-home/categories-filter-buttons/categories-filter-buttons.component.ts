import {Component, OnInit} from '@angular/core';
import {Categories} from "./Categories";

@Component({
  selector: 'app-categories-filter-buttons',
  templateUrl: './categories-filter-buttons.component.html',
  styleUrls: ['./categories-filter-buttons.component.scss'],
})
export class CategoriesFilterButtonsComponent implements OnInit {
  categories: string[]
  currentCategory: string

  constructor() {
    this.categories = Object.keys(Categories)
      .filter(key => Number.isNaN(Number(key)))
      .map(key => (key.charAt(0).toUpperCase() + key.slice(1)).split('_').join(' ')
      )
    this.currentCategory = this.categories[0];
  }

  ngOnInit() {
  }

  handleRefresh(event: any, category: string) {
    setTimeout(() => {
      // Any calls to load data go here
      // @ts-ignore
      document.getElementById(category).setAttribute("fill", "solid")
      // @ts-ignore
      document.getElementById(this.currentCategory).setAttribute("fill", "outline")
      this.currentCategory = category
      event.target.complete();
    }, 100);
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories-filter-buttons',
  templateUrl: './categories-filter-buttons.component.html',
  styleUrls: ['./categories-filter-buttons.component.scss'],
})
export class CategoriesFilterButtonsComponent implements OnInit {
  categories: string[]
  currentCategory: string

  constructor() {
    this.categories = ["Tutto", "Moda", "Tecnologia", "Bellezza", "Fitness e salute", "Lifestyle", "Sport", "Istruzione"]
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

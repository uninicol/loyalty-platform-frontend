import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  categories = ["Tutto", "Moda", "Tecnologia", "Bellezza", "Fitness e salute", "Lifestyle", "Sport", "Istruzione"]

  handleRefresh($event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      $event.target.complete();
    }, 2000);
  }

  getCategory(category: any) {

  }
}

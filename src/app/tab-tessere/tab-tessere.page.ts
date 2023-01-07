import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-tessere',
  templateUrl: './tab-tessere.page.html',
  styleUrls: ['./tab-tessere.page.scss'],
})
export class TabTesserePage implements OnInit {

  cards=[
    {
      id:"64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier:"1",
    },
    {
      id:"64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier:"1",
    },
    {
      id:"64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier:"1",
    },
    {
      id:"64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier:"1",
    },
    {
      id:"64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier:"1",
    },
    {
      id:"64e3980f-0de9-4ce2-880e-7596883593c8",
      company: "Adidas",
      points: 100,
      name: "Gianni",
      tier:"1",
    },

  ]

  constructor() { }

  ngOnInit() {
  }

  onIonInfinite($event: any) {

  }
}

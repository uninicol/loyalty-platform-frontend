import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
})
export class HeaderContainerComponent implements OnInit {
  environment = environment;

  constructor() {
  }

  ngOnInit() {
  }

}

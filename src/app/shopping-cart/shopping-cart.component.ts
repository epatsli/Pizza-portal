import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {SummaryService} from '../summary/summary.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  isClick = true;
  constructor(public shoppingCartService: ShoppingCartService,
              public summaryService: SummaryService) { }

  ngOnInit() {
  }

  hiddenButton() {
    this.isClick = false;
    this.summaryService.toggle();
  }
}

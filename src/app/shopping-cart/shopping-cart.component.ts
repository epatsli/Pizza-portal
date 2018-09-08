import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {DishesService} from '../dishes/dishes.service';
import {ShoppingCartService} from './shopping-cart.service';
import {SummaryService} from '../summary/summary.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService,
              public summaryService: SummaryService) { }

  ngOnInit() {
  }

 // @HostListener('click')
 // click() {
//    this.summaryService.toggle();
 // }

}

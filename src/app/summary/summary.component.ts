import { Component, HostBinding, OnInit } from '@angular/core';
import {SummaryService} from './summary.service';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {Orders} from '../models/orders.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  order: Orders = new class implements Orders {
    city: string;
    dishIds: number[];
    email: string;
    firstName: string;
    flat: string;
    floor: string;
    id: number;
    lastName: string;
    phone: string;
    status: string;
    street: string;
  }

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private summaryService: SummaryService, private shoppingcartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.summaryService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  saveOrder() {
    this.shoppingcartService.saveOrder(this.order).subscribe(x => alert('Add orders'));
  }
}

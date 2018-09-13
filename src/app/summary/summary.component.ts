import { Component, HostBinding, OnInit } from '@angular/core';
import {SummaryService} from './summary.service';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {Order} from '../models/order.model';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  orders: Order = new class implements Order {
    id: number;
    dishIds: number[];
    amountDish: number[];
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    street: string;
    flat: string;
    floor: string;
    status: string;
    price: string;
  }

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private summaryService: SummaryService, private shoppingcartService: ShoppingCartService, private router: Router) {
  }

  ngOnInit() {
    this.summaryService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  saveOrder() {
    this.shoppingcartService.saveOrder(this.orders).subscribe(x => alert('Add orders'));
    this.router.navigate(['/']);
  }
}

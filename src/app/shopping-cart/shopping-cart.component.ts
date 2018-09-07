import { Component, OnInit } from '@angular/core';
import {Dishes} from '../models/dishes.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  dishes: Dishes[];
  sumPrice: number;
  constructor() { }

  ngOnInit() {
  }
  addToShoppingCart(dish) {
      console.log(dish);
      for (let i = 0; i < this.dishes.length; i++) {this.totalPrice();
        console.log(this.dishes);
      }
  }

    totalPrice() {
    this.sumPrice = 0;
    for (let i = 0; i < this.dishes.length; i++) {this.sumPrice += this.dishes[i].price;
      }
    }

}

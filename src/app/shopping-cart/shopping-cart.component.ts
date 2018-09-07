import { Component, OnInit } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {DishesService} from '../dishes/dishes.service';
import {ShoppingCartService} from './shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
   // dishes: Dishes[] = [];
  // sumPrice: number;
  constructor(public shoppingCartService: ShoppingCartService ) { }

  ngOnInit() {
  }

 // addToShoppingCart(dish: Dishes) {
 //     console.log(dish);
//      this.dishes.push(dish);
   //   for (let i = 0; i < this.dishes.length; i++) {
    //    console.log(this.dishes);
    //  }
 //   this.totalPrice();
 // }

 //   totalPrice() {
//    this.sumPrice = 0;
 //   for (let i = 0; i < this.dishes.length; i++) {this.sumPrice += this.dishes[i].price;
//      }
 //   }

}

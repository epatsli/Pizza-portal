import { Component, OnInit } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {DishesService} from '../dishes/dishes.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public dishes: Dishes[] = [];
  public sumPrice: number;
  constructor(private dishesService: DishesService ) { }

  ngOnInit() {
  }

  addToShoppingCart(dish: Dishes) {
      console.log(dish);
      this.dishes = [];
    this.dishes.push(dish);
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

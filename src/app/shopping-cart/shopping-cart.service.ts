import { Injectable } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  dishes: Dishes[] = [];
  price = 0;
  constructor(readonly http: HttpClient) { }

  getDishes(): Dishes[] {
    return this.dishes;
  }
  addDishToOrder(dish: Dishes) {
    this.dishes.push(dish);
    const num = dish.price;
    console.log(dish.id);
  }

  delete(dish: Dishes) {
    let i;
    for (i = 0; this.dishes.length; i++) {
      if (this.dishes[i] === dish) {
        this.dishes.splice(i, 1);
        const num = dish.price;
        this.price = parseFloat((this.price - num * 100 / 100).toFixed(2));
        break;
      }
    }
  }
}


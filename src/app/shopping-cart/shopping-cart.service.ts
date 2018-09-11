import { Injectable } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Orders} from '../models/orders.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  dishes: Dishes[] = [];
  totalPrice = 0;
  isOrderFinished = false;

  constructor(readonly http: HttpClient) { }

  getDishes(): Dishes[] {
    return this.dishes;
  }

  addDishToOrder(dish: Dishes) {
    let repeat;
    let i;

    if (this.dishes.length === 0) {
      dish.count = 1;
      this.dishes.push(dish);
      repeat = true;
    } else {
      repeat = false;
      for (i = 0; i < this.dishes.length; i++) {
        if (this.dishes[i].id === dish.id) {
        repeat = true;
        this.dishes[i].count += 1; }
      }
    }
    if (repeat === false) {
      dish.count = 1;
      this.dishes.push(dish);
    }
    this.totalPrice = parseFloat((this.totalPrice + dish.price * 100 / 100).toFixed(2));
  }

  delete(dish: Dishes) {
    let i;
    if (dish.count > 1) {
      dish.count -= 1;
    } else if (dish.count === 1) {
      for (i = 0; i < this.dishes.length; i++) {
        if (this.dishes[i] === dish) {
          this.dishes.splice(i, 1);
        }
      }
    }
    this.totalPrice = parseFloat(((this.totalPrice - dish.price) * 100 / 100).toFixed(2));
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }


  saveOrder(orders: Orders): Observable<Orders> {
    let dishesIds: number[] = [];
    let i;
    for (i = 0; i < this.dishes.length; i++) {
      dishesIds.push(this.dishes[i].id);
    }
    orders.dishIds = dishesIds;
    orders.status = 'accepted';
    this.isOrderFinished = false;
    return this.http.post<Orders>('/api/orders', orders, httpOptions);
  }
}


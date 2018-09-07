import { Injectable } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  dishes: Dishes[] = [];
  price = 0;
  value = 0
  constructor(readonly http: HttpClient) { }

  getDishes(): Dishes[] {
    return this.dishes;
  }

  public getDishess(id: number): Dishes {
    return this.dishes
      .find((item: Dishes) => {
        return item.id === id;
      });
  }

  addValue() {
    return this.value++;
  }

  addDishToOrder(dish: Dishes) {
    let repeat;
    let i;

    if (this.dishes.length === 0){
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
      console.log(repeat);
      console.log('dd2 ' + this.dishes.length);
    }
    if (repeat === false) {
      dish.count = 1;
      this.dishes.push(dish);
      console.log(repeat);
    }
 //   this.dishes.push(dish);
 //   const num = dish.price;
    console.log(dish.id);
  }

  delete(dish: Dishes) {
    let i;
    for (i = 0; i < this.dishes.length; i++) {
      if (this.dishes[i] === dish) {
        this.dishes.splice(i, 1);
        const num = dish.price;
        this.price = parseFloat((this.price - num * 100 / 100).toFixed(2));
        break;
      }
    }
  }

  removeProduct(id: number) {
    this.dishes = this.dishes.filter((_item) =>  _item.id !== id );
  }
}


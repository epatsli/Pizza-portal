import {EventEmitter, Injectable, Output} from '@angular/core';
import {Dish} from '../models/dishes.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  isOpen = true;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(
    readonly http: HttpClient,
  ) {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit( this.isOpen);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable))
    );
  }
  getPizza(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'pizza'))
    );
  }
  getPasta(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'spagetti'))
    );
  }
  getDrinks(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'drink'))
    );
  }

  getDish(id: number): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => {
        return x.filter(y => {
          return y.id;
        });
      })
    );
  }

  getSomeOtherDish() {
    return 'dish';
  }
}

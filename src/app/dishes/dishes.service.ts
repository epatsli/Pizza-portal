import {Injectable} from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  constructor(
    readonly http: HttpClient,
  ) {
  }

  getDishes(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable))
    );
  }
  getPizza(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'pizza'))
    );
  }
  getPasta(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'spagetti'))
    );
  }
  getDrinks(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'fastfood'))
    );
  }

}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Dish} from '../models/dish.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListdishesService {

  constructor(readonly http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dish');
  }
  getPizza(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dish').pipe(
      map(x => x.filter(y => y.type === 'pizza'))
    );
  }
  getPasta(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dish').pipe(
      map(x => x.filter(y => y.type === 'spagetti'))
    );
  }
  getDrinks(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dish').pipe(
      map(x => x.filter(y => y.type === 'drink'))
    );
  }
}

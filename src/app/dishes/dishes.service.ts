import {EventEmitter, Injectable, Output} from '@angular/core';
import {Dish} from '../models/dish.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  isOpen = true;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
showView = true;

  constructor(
    readonly http: HttpClient,
  ) {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  getDishes(): Observable<Dish[]> {
    this.showView = true;
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable))
    );
  }

  getPizza(): Observable<Dish[]> {
   console.log('Jestem tutaj');
    this.showView = false;
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'pizza'))
    );
  }

  getPasta(): Observable<Dish[]> {
    this.showView = false;
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'spagetti'))
    );
  }

  getDrinks(): Observable<Dish[]> {
    this.showView = false;
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.isAvailable && y.type === 'drink'))
    );
  }

  getDish(id: number): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.id === id)));
  }

  getDishe(id: number): Observable<Dish> {
    return this.http.get<Dish>('/api/dishes');
  }

  updateDish(dish: Dish): Observable<Dish> {

    return this.http.put<Dish>(`/api/dishes/${dish.id}`, dish);
  }

  getSomeOtherDish() {
    return 'dish';
  }
}

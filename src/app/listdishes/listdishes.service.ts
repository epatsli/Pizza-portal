import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Dishes} from '../models/dishes.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListdishesService {

  constructor(readonly http: HttpClient) { }

  getDishes(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes');
  }
  getPizza(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.type === 'pizza'))
    );
  }
  getPasta(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.type === 'spagetti'))
    );
  }
  getDrinks(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('/api/dishes').pipe(
      map(x => x.filter(y => y.type === 'drink'))
    );
  }
}

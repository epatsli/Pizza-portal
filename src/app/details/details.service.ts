import { Injectable } from '@angular/core';
import {DetailsComponent} from './details.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dishes} from '../models/dishes.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(readonly http: HttpClient) { }

  getDish(id: number): Observable<Dishes> {
    return this.http.get<Dishes>(`/api/dishes/${id}`);
  }
}

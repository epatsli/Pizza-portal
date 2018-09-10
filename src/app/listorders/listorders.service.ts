import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Orders} from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class ListordersService {

  constructor(readonly http: HttpClient) { }

  getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>('/api/orders');
  }
}


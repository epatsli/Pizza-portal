import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orders} from '../models/orders.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(readonly http: HttpClient) { }

  getOrder(id: number): Observable<Orders> {
    return this.http.get<Orders>(`/api/orders/${id}`);
  }


}

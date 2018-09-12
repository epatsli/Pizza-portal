import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orders} from '../models/orders.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(readonly http: HttpClient) {
  }

  getOrder(id: number): Observable<Orders> {
    return this.http.get<Orders>(`/api/orders/${id}`);
  }

  public updateOrder(order: Orders): Observable<Orders> {

    return this.http.put<Orders>(`/api/orders/${order.id}`, order);
  }
}

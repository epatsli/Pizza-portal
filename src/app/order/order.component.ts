import { Component, OnInit, Input } from '@angular/core';
import { Orders} from '../models/orders.model';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from './order.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
//  order: Orders[];
  private readonly destroy$ = new Subject();

  @Input() orders: Orders;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderservice: OrderService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.orderservice.getOrder(+id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.orders = res);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Orders} from '../models/orders.model';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from './order.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Observable, Subject} from 'rxjs/index';
import {DishesService} from '../dishes/dishes.service';
import {Dish} from '../models/dishes.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private readonly destroy$ = new Subject();

  @Input() orders: Orders;

  sampleOrder$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderservice: OrderService,
    private readonly dishService: DishesService) { }

  ngOnInit() {
    const id = 1;
    // const id = this.route.snapshot.paramMap.get('id');
    this.orderservice.getOrder(+id)
      .pipe(takeUntil(this.destroy$));

    this.sampleOrder$ = this.orderservice.getOrder(+id)
      .pipe(takeUntil(this.destroy$));
  }

  public getDish(id: number) {
    // this.dishService.getDish(id);
    this.dishService.getSomeOtherDish();
  }
}

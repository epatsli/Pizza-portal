import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Order} from '../models/order.model';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from './order.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Observable, Subject, Subscription} from 'rxjs/index';
import {DishesService} from '../dishes/dishes.service';
import {Dish} from '../models/dish.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input()
  order: Order;
  private readonly destroy$ = new Subject();

  dishes: Dish[] = [];
  subscription: Subscription;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderservice: OrderService,
    private readonly dishService: DishesService) {
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.orderservice.getOrder(+id)
      .pipe(takeUntil(this.destroy$)).subscribe(res => this.order = res);
  }

  public getDish(id: number) {
    this.dishService.getDish(id);
  }

  public getDi(ids: Dish[] = []) {
    let i;
    for (i = 0; i < ids.length; i++) {
      this.getDish(i);
    }
    return this;
  }

  public changeStatusToInProgress(): void {
    this.order.status = 'In progress';
    this.update();
  }

  public changeStatusToInDelivery(): void {
    this.order.status = 'In delivery';
    this.update();
  }

  public changeStatusToDelivered(): void {
    this.order.status = 'Delivered';
    this.update();
  }

  public update(): void {
    this.orderservice.updateOrder(this.order).pipe(takeUntil(this.destroy$))
      .subscribe(res => this.order = res);
  }
}






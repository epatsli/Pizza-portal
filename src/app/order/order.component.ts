import {Component, OnInit, Input} from '@angular/core';
import {Orders} from '../models/orders.model';
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
  dishes: Dish[] = [];
  @Input() orders: Orders;

  sampleOrder$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderservice: OrderService,
    private readonly dishService: DishesService) {
  }

  ngOnInit() {
    //const id = 1;
    const id = this.route.snapshot.paramMap.get('id');

    this.orderservice.getOrder(+id)
      .pipe(takeUntil(this.destroy$)).subscribe(res => this.orders = res);

    // this.sampleOrder$ = this.orderservice.getOrder(+id)
    //   .pipe(takeUntil(this.destroy$));
  }

  public getDish(id: number) {
    this.dishService.getDish(id);
    }

  public getDishe(id: number) {
    this.dishService.getDish(id).pipe(takeUntil(this.destroy$))
      .subscribe(res => this.dishes = res);
      }
  }

  //this.dishService.getSomeOtherDish();




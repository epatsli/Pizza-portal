import { Component, OnInit } from '@angular/core';
import {Orders} from '../models/orders.model';
import {ListordersService} from './listorders.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.scss']
})
export class ListordersComponent implements OnInit {
  orders: Orders[] = [];

  constructor(private listordersService: ListordersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.listordersService.getOrders()
      .subscribe(res => {
      this.orders = res;
    });
  }

}

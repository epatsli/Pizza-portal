import { Injectable, Output, EventEmitter  } from '@angular/core';
import {DishesService} from '../dishes/dishes.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Orders} from '../models/orders.model';
import {Dishes} from '../models/dishes.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SummaryService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  dishes: Dishes[] = [];

  constructor(readonly http: HttpClient, public dishesService: DishesService) { }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.dishesService.toggle();
  }


}

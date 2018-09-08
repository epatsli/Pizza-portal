import { Injectable, Output, EventEmitter  } from '@angular/core';
import {DishesService} from '../dishes/dishes.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  isOpen = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(public dishesService: DishesService) { }

  toggle() {
    console.log('start sum: ' + this.isOpen);
    this.isOpen = !this.isOpen;
    console.log('in sum: ' + this.isOpen);
    this.change.emit(this.isOpen);
    console.log('after sum: ' + this.isOpen);
    this.dishesService.toggle();
  }
}

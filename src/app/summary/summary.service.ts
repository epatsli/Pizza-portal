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
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.dishesService.toggle();
  }
}

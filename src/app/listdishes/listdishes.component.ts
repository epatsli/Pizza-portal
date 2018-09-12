import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import {ListdishesService} from './listdishes.service';
import {ActivatedRoute} from '@angular/router';
import {Dish} from '../models/dishes.model';
import {Subscription} from 'rxjs';
import {DishesService} from '../dishes/dishes.service';

@Component({
  selector: 'app-listdishes',
  templateUrl: './listdishes.component.html',
  styleUrls: ['./listdishes.component.scss']
})
export class ListdishesComponent implements OnInit {

  dishes: Dish[] = [];
  contentEditable = false;
  sub: Subscription ;

  constructor(
    private listdishesService: ListdishesService,
    private router: ActivatedRoute,
    private dishService: DishesService) { }

  @Input()
  prop !: number;

  ngOnInit() {
        this.getDishes();
  }

  getDishes(): void {
    this.listdishesService.getDishes()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  getPizza(): void {
    this.listdishesService.getPizza()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  getPasta(): void {
    this.listdishesService.getPasta()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  getDrinks(): void {
    this.listdishesService.getDrinks()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  toggleVisibility(event) {

    if ( event.target.checked ) {
      this.contentEditable = true;
    }
  }

  changeWhenIsNotAvailability(dish: Dish): void {

    if (dish.isAvailable) {
      dish.isAvailable = false;
    } else {
      dish.isAvailable = true;
    }

    console.log(dish.id);
    this.sub = this.dishService.updateDish(dish).subscribe();
  }

}

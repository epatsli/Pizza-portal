import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import {ListdishesService} from './listdishes.service';
import {ActivatedRoute} from '@angular/router';
import {Dish} from '../../models/dish.model';
import {Subscription} from 'rxjs';
import {DishesService} from '../../dishes/dishes.service';

@Component({
  selector: 'app-listdishes',
  templateUrl: './listdishes.component.html',
  styleUrls: ['./listdishes.component.scss']
})
export class ListdishesComponent implements OnInit {

  dish: Dish[] = [];
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
        this.dish = res;
      });
  }

  getPizza(): void {
    this.listdishesService.getPizza()
      .subscribe(res => {
        this.dish = res;
      });
  }

  getPasta(): void {
    this.listdishesService.getPasta()
      .subscribe(res => {
        this.dish = res;
      });
  }

  getDrinks(): void {
    this.listdishesService.getDrinks()
      .subscribe(res => {
        this.dish = res;
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

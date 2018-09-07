import {Component, OnInit} from '@angular/core';
import {DishesService} from './dishes.service';
import {Dishes} from '../models/dishes.model';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dishes: Dishes[];

  constructor(private dishesService: DishesService) {
  }

  ngOnInit() {
     // this.getDishes();
     this.getPizza();
    // this.getPasta();
    // this.getDrinks();
  }

  getDishes(): void {
    this.dishesService.getDishes()
      .subscribe(res => {
        this.dishes = res;
        console.log(res);
      });
  }
  getPizza(): void {
    this.dishesService.getPizza()
      .subscribe(res => {
        this.dishes = res;
        console.log(res);
      });

  }
  getPasta(): void {
    this.dishesService.getPasta()
      .subscribe(res => {
        this.dishes = res;
        console.log(res);
      });

  }
  getDrinks(): void {
    this.dishesService.getDrinks()
      .subscribe(res => {
        this.dishes = res;
        console.log(res);
      });
  }
}

import {Component, OnInit, HostBinding} from '@angular/core';
import {DishesService} from './dishes.service';
import {Dishes} from '../models/dishes.model';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dishes: Dishes[] = [];
  value = 0;

  @HostBinding('class.is-open')
  isOpen = true;

  constructor(
    private shoppingcartservice: ShoppingCartService,
    private dishesService: DishesService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.dishesService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    // this.getDishes();

    this.router.paramMap.subscribe(params => {
      const type = params.get('type');

      if (type === 'pizza') {
        this.getPizza();
      } else if (type === 'pasta') {
        this.getPasta();
      } else if (type === 'drink') {
        this.getDrinks();
      } else {
        this.getDishes();
      }
    });
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
  addDishToOrder(dish: Dishes) {
    this.value++;
    console.log(this.value);
    this.shoppingcartservice.addDishToOrder(dish);
  }
}

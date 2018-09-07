import {Component, OnInit} from '@angular/core';
import {DishesService} from './dishes.service';
import {Dishes} from '../models/dishes.model';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dishes: Dishes[] = [];
  value = 0;


  constructor(
    private dishesService: DishesService,
    private router: ActivatedRoute,
 //   public shoppingcartcomponent: ShoppingCartComponent,
  ) {}

  ngOnInit() {
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
   // this.shoppingcartcomponent.addToShoppingCart(dish);
    console.log(this.value);
  }
}

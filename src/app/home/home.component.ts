import { Component, OnInit } from '@angular/core';
import { DishesComponent} from '../dishes/dishes.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {AuthService} from '../login-form/auth.service';

@Component({
  providers: [ DishesComponent ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dishesComponent: DishesComponent, public authService: AuthService) { }

  ngOnInit() {}

  public getPizza(): void {
    this.dishesComponent.getPizza();
  }

  public getPasta(): void {
    this.dishesComponent.getPasta();
  }

  public getDrinks(): void {
    this.dishesComponent.getDrinks();
  }
}

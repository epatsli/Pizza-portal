import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ListdishesComponent} from './listdishes/listdishes.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent },
  { path: 'dishes/:type', component: DishesComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'summary', component: ShoppingCartComponent },
  { path: 'listdishes', component: ListdishesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

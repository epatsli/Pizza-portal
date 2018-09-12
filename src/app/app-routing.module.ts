import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ListdishesComponent} from './listdishes/listdishes.component';
import {DetailsComponent} from './details/details.component';
import {ListordersComponent} from './listorders/listorders.component';
import {OrderComponent} from './order/order.component';
import {AddressDetailsComponent} from './address-details/address-details.component';
import {AuthService} from './login-form/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent },
  { path: 'dishes/:type', component: DishesComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'summary', component: ShoppingCartComponent },
  { path: 'listdishes', component: ListdishesComponent},
  { path: 'listdishes/details/:id', component: DetailsComponent},
  { path: 'listorders', component: ListordersComponent, canActivate: [AuthService]},
  { path: 'listorders/order/:id', component: OrderComponent, canActivate: [AuthService]},
  { path: 'listorders/address-details/:id', component: AddressDetailsComponent, canActivate: [AuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

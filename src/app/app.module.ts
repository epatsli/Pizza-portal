import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { DishesComponent } from './dishes/dishes.component';
import {HttpClientModule} from '@angular/common/http';
import { SummaryComponent } from './summary/summary.component';
import {SummaryService} from './summary/summary.service';
import { ListdishesComponent } from './template/listdishes/listdishes.component';
import { DetailsComponent } from './details/details.component';
import { ListordersComponent } from './template/listorders/listorders.component';
import { OrderComponent } from './order/order.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { RoleGuardComponent } from './role-guard/role-guard.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent,
    LoginFormComponent,
    HomeComponent,
    ShoppingCartComponent,
    DishesComponent,
    SummaryComponent,
    ListdishesComponent,
    DetailsComponent,
    ListordersComponent,
    OrderComponent,
    AddressDetailsComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'dish/pizza',
        component: DishesComponent
      },
      {
        path: 'dish/pasta',
        component: DishesComponent
      },
      {
        path: 'dish/drink',
        component: DishesComponent
      }
    ]),
    FormsModule
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

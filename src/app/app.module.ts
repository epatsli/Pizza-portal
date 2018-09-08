import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {AuthService} from './auth.service';
import { SummaryComponent } from './summary/summary.component';
import {SummaryService} from './summary/summary.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent,
    LoginFormComponent,
    HomeComponent,
    ShoppingCartComponent,
    DishesComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
        path: 'dishes/pizza',
        component: DishesComponent
      },
      {
        path: 'dishes/pasta',
        component: DishesComponent
      },
      {
        path: 'dishes/drink',
        component: DishesComponent
      },
      {
        path: 'dishes/summary',
        component: SummaryComponent
      }
    ])
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

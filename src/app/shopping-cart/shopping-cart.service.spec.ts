import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import {ShoppingCartComponent} from './shopping-cart.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

fdescribe('ShoppingCartService', () => {
  let shoppingcartComponent: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      providers: [ShoppingCartService, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    shoppingcartComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});

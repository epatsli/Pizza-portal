import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DishesComponent} from './dishes.component';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {OrderService} from '../order/order.service';
import {DishesService} from './dishes.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Dish} from '../models/dish.model';
import {of, Subject} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {SummaryService} from '../summary/summary.service';


 fdescribe('DishesComponent', () => {
  let dishesComponent: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;
  let dishesService: DishesService;
  let params: Subject<Params>;
  const dishes: Dish[] = [{id: 1, name: 'dishes', isAvailable: true, description: 'dishes', type: 'dishes', price: 1, count: 0}];
  const pizza: Dish[] = [{id: 2, name: 'pizza', isAvailable: true, description: 'pizza', type: 'pizza', price: 1, count: 0}];
  const pasta: Dish[] = [{id: 3, name: 'pasta', isAvailable: true, description: 'pasta', type: 'pasta', price: 1, count: 0}];
  const drink: Dish[] = [{id: 4, name: 'drink', isAvailable: true, description: 'drink', type: 'drink', price: 1, count: 0}];
  const dishesServiceMock = {
    dishes: new Subject<Dish[]>(),
    getDishes: jasmine.createSpy('getDishes').and.returnValue(of(dishes)),
    getPizza: jasmine.createSpy('getPizza').and.returnValue(of(pizza)),
    getPasta: jasmine.createSpy('getPasta').and.returnValue(of(pasta)),
    getDrink: jasmine.createSpy('getDrink').and.returnValue(of(drink))
  };

  beforeEach(async(() => {
    params = new Subject<Params>();

    TestBed.configureTestingModule({
      declarations: [DishesComponent],
      providers: [
        {provide: DishesService, useValue: dishesServiceMock},
        {provide: ActivatedRoute, useValue: {paramMap: params}},
        OrderService,
        DishesService,
        HttpClient,
        // HttpHandler,
        //   SummaryService
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule, ReactiveFormsModule]
    })
      .compileComponents();
    dishesService = TestBed.get(DishesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    dishesComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(dishesComponent).toBeTruthy();
  });

  it('should init', fakeAsync(() => {

    // given
    params.next(<ParamMap>({
      get: (key: string) => 'pizza'
    }));
    const getPizzaSpy = spyOn(dishesService, 'getPizza');
    //   getPizzaSpy.and.returnValue(pizza);

    // when
    dishesComponent.ngOnInit();

    // then
    tick();
   // expect(dishesService.getPizza).toHaveBeenCalled();
    // expect(dishesComponent.getPizza).toHaveBeenCalled();
     expect(getPizzaSpy).toHaveBeenCalled();
    // expect(dishesComponent.dish).toBe(pizza);
  }));

});



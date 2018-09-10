import { Component, OnInit } from '@angular/core';
import {ListdishesService} from './listdishes.service';
import {ActivatedRoute} from '@angular/router';
import {Dishes} from '../models/dishes.model';

@Component({
  selector: 'app-listdishes',
  templateUrl: './listdishes.component.html',
  styleUrls: ['./listdishes.component.scss']
})
export class ListdishesComponent implements OnInit {

  dishes: Dishes[] = [];
  contentEditable = false;
private isAvailable = true;
  constructor(private listdishesService: ListdishesService, private router: ActivatedRoute ) { }

  ngOnInit() {
        this.getDishes();
  }

  getDishes(): void {
    this.listdishesService.getDishes()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  getPizza(): void {
    this.listdishesService.getPizza()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  getPasta(): void {
    this.listdishesService.getPasta()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  getDrinks(): void {
    this.listdishesService.getDrinks()
      .subscribe(res => {
        this.dishes = res;
      });
  }

  toggleVisibility(event) {

    if ( event.target.checked ) {
      this.contentEditable = true;
    }
  }


}

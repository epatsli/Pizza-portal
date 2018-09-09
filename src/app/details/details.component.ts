import { Component, OnInit } from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {DishesService} from '../dishes/dishes.service';
import {DetailsService} from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dishes: Dishes[] = [];
  constructor(private detailsService: DetailsService) { }
  ngOnInit() {
    this.getDish(1);
  }

  getDish(id: number): void {
    this.detailsService.getDish(id)
      .subscribe(res => {
        this.dishes = res;
      });
  }
}

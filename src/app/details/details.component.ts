import {Component, OnInit, OnDestroy} from '@angular/core';
import {Dishes} from '../models/dishes.model';
import {DishesService} from '../dishes/dishes.service';
import {DetailsService} from './details.service';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/internal/operators';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dishes: Dishes[] = [];
  private readonly destroy$ = new Subject();

  constructor(private detailsService: DetailsService,
              private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    alert(id);
    this.detailsService.getDish(+id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.dishes = res);
  }

}

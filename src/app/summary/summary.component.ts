import { Component, HostBinding, OnInit } from '@angular/core';
import {SummaryService} from './summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.summaryService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}

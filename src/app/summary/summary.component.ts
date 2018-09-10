import { Component, HostBinding, OnInit } from '@angular/core';
import {SummaryService} from './summary.service';
import {FormGroup} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  myForm: FormGroup;
  post: any;
  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private summaryService: SummaryService) {
  }

  ngOnInit() {
    this.summaryService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  addPost(post) {
    alert('Post: ' + post.firstname + ' ' + post.lastname + ' ' + post.phone);
  }
}

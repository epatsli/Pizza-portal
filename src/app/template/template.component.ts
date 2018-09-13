import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../login-form/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  isDishList = false;
  isOrderList = false;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  showListOrder() {
    this.isDishList = false;
    this.isOrderList = true;
    this.router.navigate(['listorders']);
  }

  showListDish() {
    this.isDishList = true;
    this.isOrderList = false;
    alert(this.isDishList);
    alert(this.isOrderList);
    this.router.navigate(['listdishes']);
  }

}

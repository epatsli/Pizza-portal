import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Users} from '../models/users.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: Users[] = [];

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser(event) {

    const name = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    if (name === 'admin' && password === 'admin') {
      this.router.navigate(['listorders']);
    }
    else {
      alert('Incorect name or pasword');
    }
  }
}


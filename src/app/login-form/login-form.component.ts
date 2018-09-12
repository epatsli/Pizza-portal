import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  login = false;
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser(event) {
    const name = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    if (name === 'admin' && password === 'admin') {
      this.login = true;
      this.router.navigate(['listorders']);
    } else {
      this.login = false;
      alert('Incorect name or pasword');
    }
  }

  check() {
    this.authService.check(this.username, this.password);
  }
}


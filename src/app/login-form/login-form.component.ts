import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: User[] = [];

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser(event) {
    //  event.preventDefault();

    let name = event.target.elements[0].value;
  //  this.getUser(name);
    let password = event.target.elements[1].value;

    if (name === 'admin' && password === 'admin') {
      //   this.user.setUserLoggedIn();
      this.router.navigate(['dishes/drink']);
    }
    else {
      alert('Incorect name or pasword');
    }

    //  this.authService.getUserDetails(username, password);
    //  console.log(username, password);
  }



  getUser(name: string): void {
  this.authService.getUser(name)
      .subscribe(res => {
        this.user = res;
        console.log('eee' + res);
      });

  }
}


import { Component, Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../login-form/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-role-guard',
  templateUrl: './role-guard.component.html',
  styleUrls: ['./role-guard.component.scss']
})

@Injectable()
export class RoleGuardComponent implements CanActivate {

  constructor(private router: Router, private readonly authService: AuthService) { }

  canActivate(): boolean {
  //  let url: string = state.url;
    if (!this.authService.isLogin) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  //  return this.checkLogin(url);
  }


  checkLogin(url: string): boolean {
    if (this.authService.isLogin) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}

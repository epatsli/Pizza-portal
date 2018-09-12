import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../models/users.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  sub: Subscription;
  isLogin = false;

  constructor(
    private  http: HttpClient,
    private router: Router,
  ) {
  }

  getUser(name: string): Observable<Users[]> {
   return this.http.get<Users[]>('/api/users').pipe(
      map(x => x.filter(y => y.name === name) )
    );
  }

  check(login: string, password: string) {
    let users: Users[] = [];
    this.sub = this.http.get<Users[]>('/api/users').pipe(
      map(x => x.filter(y => y.name === login && y.password === password))
    ).subscribe(res => {
      users = res;
      console.log(res);

      if (users.length !== 0) {
        this.isLogin = true;
        this.router.navigate(['listorders']);
      } else {
        alert('Incorect name or pasword');
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

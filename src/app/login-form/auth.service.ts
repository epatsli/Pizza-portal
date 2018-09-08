import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dishes} from '../models/dishes.model';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private  http: HttpClient,
  ) {
  }

  getUserDetails(name, password) {
    if ((name === 'admin') && (password === 'admin')) {
      window.alert('aas');
    }
  }



  getUser(name: string): Observable<User[]> {
   return this.http.get<User[]>('/api/user').pipe(
      map(x => x.filter(y => y.name === name))
    );
  }
}

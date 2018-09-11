import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../models/dishes.model';
import {map} from 'rxjs/operators';
import {Users} from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private  http: HttpClient,
  ) {
  }

  getUser(name: string): Observable<Users[]> {
   return this.http.get<Users[]>('/api/users').pipe(
      map(x => x.filter(y => y.name === name) )
    );
  }
}

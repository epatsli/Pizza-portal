import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getUserDetails(username, password) {
    if ((username === 'admin') && (password === 'admin')) {
      window.alert('aas');
    }
    return this.http.post('/server/db.json', {
      username,
      password
    });
  }
}

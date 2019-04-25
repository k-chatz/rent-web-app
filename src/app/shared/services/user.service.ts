import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiRoot}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiRoot}/users/${id}`);
  }
}

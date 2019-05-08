import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {PagedResponse} from '../models/payload/PagedResponse';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll(filters) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<PagedResponse<User>>(`${environment.apiRoot}/users`, {params});
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiRoot}/users/${id}`);
  }
}

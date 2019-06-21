import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {PagedResponse} from '../models/payload/pagedResponse';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {Profile} from '../models/profile';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll(filters) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<PagedResponse<User>>(`${environment.usersEndpoint}`, {params}).pipe(
      map((users: PagedResponse<User>) => {
        return {
          ...users,
          content: users.content.map((user: User) => {
            return {
              ...user,
              role: user.role.name.substr(5),
              createdAt: moment(new Date(user.createdAt)).format('DD-MM-YYYY - HH:mm'),
              updatedAt: moment(new Date(user.updatedAt)).format('DD-MM-YYYY - HH:mm')
            };
          })
        };
      }),
    );
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.usersEndpoint}/${id}`);
  }

  getProfileByUsername(username: string) {
    return this.http.get<Profile>(`${environment.usersEndpoint}/${username}/profile`);
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersRouteDataProvider {
  private behaviorSubject: BehaviorSubject<User>;

  constructor() {
    this.behaviorSubject = new BehaviorSubject<User>(null);
  }

  setUser(user: User) {
    this.behaviorSubject.next(user);
  }

  getUser$(): Observable<User> {
    return this.behaviorSubject.asObservable();
  }

  get user(): User {
    return this.behaviorSubject.value;
  }
}

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../shared/models/user';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  currentUser$: Observable<User | null>;

  constructor(
    private http: HttpClient
  ) {
  }

  signIn() {
    const x = this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      map((data: any) => {
        return {
          ...data,
          id: 1,
          email: data.email,
          name: 'kostas',
          surname: 'hatzopoulos',
          username: 'kwstarikanos',
          photoUrl: 'https://www.tutorialrepublic.com/examples/images/avatar/3.jpg',
        };
      })
    ).subscribe((user: User) => {
      console.log(user);
      this.currentUser$ = new Observable(observer => {
        observer.next(user);
       // observer.complete();
      });
    });
  }

  signOut() {
    this.currentUser$ = new Observable(observer => {
      observer.next(null);
      // observer.complete();
    });
  }
}

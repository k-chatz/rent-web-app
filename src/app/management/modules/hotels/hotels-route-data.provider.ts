import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Hotel} from '../../../shared/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsRouteDataProvider {
  private behaviorSubject: BehaviorSubject<Hotel>;

  constructor() {
    this.behaviorSubject = new BehaviorSubject<Hotel>(null);
  }

  setHotel(hotel: Hotel) {
    this.behaviorSubject.next(hotel);
  }

  getHotel$(): Observable<Hotel> {
    return this.behaviorSubject.asObservable();
  }

  get hotel(): Hotel {
    return this.behaviorSubject.value;
  }
}

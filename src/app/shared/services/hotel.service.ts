import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Hotel} from '../models/hotel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient
  ) { }

  getHotelDetails(hotelID): Observable<Hotel> {
    return this.http.get<Hotel>(environment.apiRoot + '/hotels/' + hotelID);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Hotel} from '../models/hotel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {SearchResponse} from '../models/payload/searchResponse';
import {Room} from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient
  ) {
  }

  getHotel(hotelID): Observable<Hotel> {
    return this.http.get<Hotel>(environment.apiRoot + '/hotels/' + hotelID);
  }

  getHotelRooms(hotelID): Observable<Room> {
    return this.http.get<Room>(environment.apiRoot + '/hotels/' + hotelID + '/rooms');
  }

  getHotelsByProvider(filters) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<Room>(environment.apiRoot + '/hotels/', {params});
  }

  search(filters) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<SearchResponse>(`${environment.hotelsEndpoint + '/search'}`, {params}).pipe(
      map((searchResponse: SearchResponse) => {
        return {
          ...searchResponse,
          results: {
            ...searchResponse.pagedHotels,
            content: searchResponse.pagedHotels.content.map((hotel: Hotel) => {
              return {
                ...hotel,
                createdAt: moment(new Date(hotel.createdAt)).format('DD-MM-YYYY - HH:mm'),
                updatedAt: moment(new Date(hotel.updatedAt)).format('DD-MM-YYYY - HH:mm'),
                photo: 'https://picsum.photos/id/' + (Math.floor(Math.random() * 500) + 1).toString() + '/200/200',
                address: ''
              };
            })
          }
        };
      }),
    );
  }
}

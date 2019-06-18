import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Hotel} from '../models/Hotel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {SearchResults} from '../models/payload/SearchResults';
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
    return this.http.get<SearchResults>(`${environment.hotelsEndpoint + '/search'}`, {params}).pipe(
      map((searchResults: SearchResults) => {
        return {
          ...searchResults,
          results: {
            ...searchResults.results,
            content: searchResults.results.content.map((hotel: Hotel) => {
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';
import { PagedResponse } from '../models/payload/PagedResponse';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient
  ) {
  }

  getHotelDetails(hotelID): Observable<Hotel> {
    return this.http.get<Hotel>(environment.apiRoot + '/hotels/' + hotelID);
  }

  search(filters) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<PagedResponse<Hotel>>(`${environment.hotelsEndpoint + '/search'}`, {params}).pipe(
      map((hotels: PagedResponse<Hotel>) => {
        return {
          ...hotels,
          content: hotels.content.map((hotel: Hotel) => {
            return {
              ...hotel,
              createdAt: moment(new Date(hotel.createdAt)).format('DD-MM-YYYY - HH:mm'),
              updatedAt: moment(new Date(hotel.updatedAt)).format('DD-MM-YYYY - HH:mm')
            };
          })
        };
      }),
    );
  }

}

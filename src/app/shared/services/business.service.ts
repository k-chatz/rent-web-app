import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Business} from '../models/business';
import {PagedResponse} from '../models/payload/pagedResponse';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMyBusinesses(filters) {
    const params = new HttpParams({fromObject: filters});
    return this.http.get<PagedResponse<Business>>(environment.apiRoot + '/businesses/my', {params});
  }
}

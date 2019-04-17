import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsResolver implements Resolve<Observable<any>> {
  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('route', route);
    const city = route.queryParams.city;
    /* TODO: Get query params from url*/
    /* TODO: Fetch data*/
    return of(city).pipe(
      delay(1000)
    );
  }
}

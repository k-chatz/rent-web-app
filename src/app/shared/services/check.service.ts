import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  constructor(
    private http: HttpClient
  ) {
  }

  checkEmailExists(email: string) {
    return this.http.get<any>(environment.apiRoot + '/check/email/' + email);
  }

  checkUsernameExists(username: string) {
    return this.http.get<any>(environment.apiRoot + '/check/username/' + username);
  }

  checkProviderApplicationStatus() {
    return this.http.get<any>(environment.apiRoot + '/check/provider/');
  }

}

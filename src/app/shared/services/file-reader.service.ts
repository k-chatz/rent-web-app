import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor() {
  }

  read$(file): Observable<any> {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return Observable.create(observer => {
      fileReader.onload = (ev: any) => {
        observer.next(ev.target);
      };
      fileReader.onerror = error => observer.error(error);
    });
  }
}

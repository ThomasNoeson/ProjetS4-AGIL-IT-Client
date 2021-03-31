import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {JeuxInfo} from '../_models/jeux-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  constructor(private http: HttpClient) {
  }

  getJeux(): Observable<JeuxInfo> {
    return this.http.get<any>(environment.apiUrl + '/jeux', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }

  getJeuxTri($event): Observable<JeuxInfo> {
    if ($event.value === 'nom') {
      return this.http.get<any>(environment.apiUrl + '/jeux?sort=nom', httpOptions)
        .pipe(
          map(rep => rep.data.item),
          catchError(err => throwError(err))
        );
    }
    return this.http.get<any>(environment.apiUrl + '/jeux?sort=note', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {UserInfo} from "../_models/user-info";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {GameDetails} from "../_models/game-details";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GameDetailsService {

  constructor(private http: HttpClient) { }

  getGameDetails(id: number): Observable<GameDetails> {
    return this.http.get<any>(environment.apiUrl + '/jeux/' + id, httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }
}

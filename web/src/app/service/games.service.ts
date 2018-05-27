import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable"

@Injectable()
export class GamesService {

  constructor(private _http: HttpClient) { }

  getLijst(cons : string) : Observable<IGames[]> {
    return this._http.get<IGames[]>("http://localhost:5000/api/v1/games?console=" + cons);
  }

}

export interface Console {
  id: number;
  name: string;
}

export interface IGames {
  id: number;
  name: string;
  releaseYear: string;
  console: Console;
}
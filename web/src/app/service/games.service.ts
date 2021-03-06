import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable"

@Injectable()
export class GamesService {

  constructor(private _http: HttpClient) { }

  getLijst(cons : string) : Observable<IGames[]> {
    return this._http.get<IGames[]>("http://localhost:5000/api/v1/games?console=" + cons);
  }

  postGame(name: string, releaseYear: string, consoleId: number){

    return this._http.post('http://localhost:5000/api/v1/games', 
    {
      name: name,
      releaseYear: releaseYear,
      consoleId : consoleId
    });
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
  consoleId: number;
}
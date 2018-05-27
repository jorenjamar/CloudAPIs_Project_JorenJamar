import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable"

@Injectable()
export class GamesService {

  constructor(private _http: HttpClient) { }

  getLijst(cons : string) : Observable<IGames[]> {
    return this._http.get<IGames[]>("http://localhost:5000/api/v1/games?console=" + cons);
  }

  postGame(){

    return this._http.post('http://localhost:5000/api/v1/games', 
    {
      name: 'test',
      releaseYear: '1997'
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
}
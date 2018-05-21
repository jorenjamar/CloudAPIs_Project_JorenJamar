import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokemonSetsService {

  constructor(private _http: HttpClient) { }

  getSetsByName(name: string) : Observable<ISet>{
    return this._http.get<ISet>("https://api.pokemontcg.io/v1/sets?name=" + name);
  }
}

export interface Set {
  code: string;
  ptcgoCode: string;
  name: string;
  series: string;
  totalCards: number;
  standardLegal: boolean;
  expandedLegal: boolean;
  releaseDate: string;
  symbolUrl: string;
  logoUrl: string;
  updatedAt: string;
}

export interface ISet {
  sets: Set[];
}



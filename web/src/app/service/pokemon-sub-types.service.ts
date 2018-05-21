import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable"

@Injectable()
export class PokemonSubTypesService {

  constructor(private _http: HttpClient) { }

  getLijst() : Observable<ISubtypes> {
    return this._http.get<ISubtypes>("https://api.pokemontcg.io/v1/subtypes");
  }
}

export interface ISubtypes {
  subtypes: string[];
}

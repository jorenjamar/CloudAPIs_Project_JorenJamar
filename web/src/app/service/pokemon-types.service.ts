import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokemonTypesService {

  constructor(private _http: HttpClient) { }

  getLijst() : Observable<iTypes> {
    return this._http.get<iTypes>("https://api.pokemontcg.io/v1/types");
  }

}

export interface iTypes {
  types: string[];
}
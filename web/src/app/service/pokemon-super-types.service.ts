import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokemonSuperTypesService {

  constructor(private _http: HttpClient) { }

  getLijst() : Observable<ISupertypes> {
    return this._http.get<ISupertypes>("https://api.pokemontcg.io/v1/supertypes");
  }

}

export interface ISupertypes {
  supertypes: string[];
}

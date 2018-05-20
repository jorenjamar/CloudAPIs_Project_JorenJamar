import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PokemonService {

  constructor(private _http: HttpClient) {

  }

  getLijst() : Observable<IPokemon> {
    return this._http.get<IPokemon>("https://api.pokemontcg.io/v1/cards");
  }

  getPokemon(poke:string) : Observable<IPokemon> {
    return this._http.get<IPokemon>("https://api.pokemontcg.io/v1/cards?name=" + poke);
  }
}


  export interface Ability {
      name: string;
      text: string;
      type: string;
  }

  export interface Attack {
      cost: string[];
      name: string;
      text: string;
      damage: string;
      convertedEnergyCost: number;
  }

  export interface Resistance {
      type: string;
      value: string;
  }

  export interface Weakness {
      type: string;
      value: string;
  }

  export interface Card {
      id: string;
      name: string;
      nationalPokedexNumber: number;
      imageUrl: string;
      imageUrlHiRes: string;
      types: string[];
      supertype: string;
      subtype: string;
      evolvesFrom: string;
      ability: Ability;
      hp: string;
      retreatCost: string[];
      convertedRetreatCost: number;
      number: string;
      artist: string;
      rarity: string;
      series: string;
      set: string;
      setCode: string;
      attacks: Attack[];
      resistances: Resistance[];
      weaknesses: Weakness[];
  }

  export interface IPokemon {
      cards: Card[];
  }

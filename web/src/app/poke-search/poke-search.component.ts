import { Component, OnInit } from '@angular/core';
import {PokemonService, IPokemon} from '../service/pokemon.service';
import {FormsModule} from '@angular/forms';
import { iTypes, PokemonTypesService } from '../service/pokemon-types.service';
import { ISubtypes, PokemonSubTypesService } from '../service/pokemon-sub-types.service';
import { ISupertypes, PokemonSuperTypesService } from '../service/pokemon-super-types.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  title = 'app';

  lijst : IPokemon;
  typeLijst : iTypes;
  subLijst: ISubtypes;
  superLijst: ISupertypes;

  constructor(private hydramoviesService:PokemonService, private typesService: PokemonTypesService, private subTypeService: PokemonSubTypesService, private superTypesService: PokemonSuperTypesService){
  }

  ngOnInit(){
    this.hydramoviesService.getPokemon("pikachu").subscribe(result => 
    {
      console.log("result cards");
      console.log(result);
      this.lijst = result;
    });

    this.typesService.getLijst().subscribe(resultTypes => 
      {
        console.log("result types");
        console.log(resultTypes);
        this.typeLijst = resultTypes;
    });

    this.subTypeService.getLijst().subscribe(resultTypes => 
      {
        console.log("result types");
        console.log(resultTypes);
        this.subLijst = resultTypes;
    });

    this.superTypesService.getLijst().subscribe(resultTypes => 
      {
        console.log("result types");
        console.log(resultTypes);
        this.superLijst = resultTypes;
    });
  }

  search(poke : string){
    this.hydramoviesService.getPokemon(poke).subscribe(result => 
      {
        console.log("result");
        console.log(result);
        this.lijst = result;
      });
      console.log(poke);
  }

  searchType(type : string){
    this.hydramoviesService.getPokemonType(type).subscribe(result => 
      {
        console.log("result");
        console.log(result);
        this.lijst = result;
      });
      console.log(type);
  }

  searchSubType(subtype : string){
    this.hydramoviesService.getPokemonSubType(subtype).subscribe(result => 
      {
        console.log("result");
        console.log(result);
        this.lijst = result;
      });
      console.log(subtype);
  }

  searchSuperType(){

  }

}

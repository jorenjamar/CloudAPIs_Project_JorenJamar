import { Component, OnInit } from '@angular/core';
import {PokemonService, IPokemon} from '../service/pokemon.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  title = 'app';

  lijst : IPokemon;

  constructor(private hydramoviesService:PokemonService){
  }

  ngOnInit(){
    this.hydramoviesService.getPokemon("pikachu").subscribe(result => 
    {
      console.log("result");
      console.log(result);
      this.lijst = result;
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

  goToDetail(pokeId : string){
    
  }

}

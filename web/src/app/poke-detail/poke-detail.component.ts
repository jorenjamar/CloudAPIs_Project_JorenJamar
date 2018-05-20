import { Component, OnInit } from '@angular/core';
import { IPokemon, PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  lijst : IPokemon

  constructor(private hydramoviesService:PokemonService) { }

  ngOnInit(){
    this.hydramoviesService.getPokemon("pikachu").subscribe(result => 
    {
      console.log("result");
      console.log(result);
      this.lijst = result;
    });
  }

}

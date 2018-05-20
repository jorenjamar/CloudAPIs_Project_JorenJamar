import { Component, OnInit } from '@angular/core';
import { IPokemon, PokemonService } from '../service/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  lijst : IPokemon;
  id : string;

  constructor(private hydramoviesService:PokemonService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.hydramoviesService.getPokemon("pikachu").subscribe(result => 
    {
      console.log("result");
      console.log(result);
      this.lijst = result;
    });
    console.log("route");
    console.log(this.route);
    this.id = this.route.snapshot.params.id;
    console.log("name");
    console.log(this.id);
    
  }

}

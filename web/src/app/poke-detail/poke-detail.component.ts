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
    this.id = this.route.snapshot.params.id;
    this.hydramoviesService.getPokeId(this.id).subscribe(result => 
    {
      console.log("result");
      console.log(result);
      this.lijst = result;
    });
    
  }

  getTypes(){
    var num: number;
    var text : string = "";
    for(num=0; num < this.lijst.cards[0].types.length ;num++) {
      console.log(this.lijst.cards[0].types[num]);
      text = text + this.lijst.cards[0].types[num]
      if (num + 1 < this.lijst.cards[0].types.length){
        text = text + ", "
      }
    }
    return text;
  }

  getRc(){
    var num: number;
    var text : string = "";
    for(num=0; num < this.lijst.cards[0].retreatCost.length ;num++) {
      console.log(this.lijst.cards[0].retreatCost[num]);
      text = text + this.lijst.cards[0].retreatCost[num]
      if (num + 1 < this.lijst.cards[0].retreatCost.length){
        text = text + ", "
      }
    }
    return text;
  }



}

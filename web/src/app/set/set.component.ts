import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISet, PokemonSetsService } from '../service/pokemon-sets.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {

  name : string = "";
  lijst: ISet

  constructor(private setService: PokemonSetsService ,private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;

    this.setService.getSetsByName(this.name).subscribe(result => 
      {
        console.log("result sets");
        console.log(result);
        this.lijst = result;
      });
  }

}

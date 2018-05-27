import { Component, OnInit } from '@angular/core';
import { GamesService, IGames } from '../service/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  lijst : IGames[];
  cons : string;

  constructor(private gamesService : GamesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cons = this.route.snapshot.params.cons;
    this.gamesService.getLijst(this.cons).subscribe(result => 
      {
        console.log("result consoles");
        console.log(result);
        this.lijst = result;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { GamesService, IGames } from '../service/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  lijst : IGames[];

  constructor(private gamesService : GamesService) { }

  ngOnInit() {
    this.gamesService.getLijst("game boy").subscribe(result => 
      {
        console.log("result consoles");
        console.log(result);
        this.lijst = result;
      });
  }

}

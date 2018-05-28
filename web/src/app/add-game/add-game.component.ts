import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  consId : number = 1;

  constructor(private gamesService : GamesService) { }

  ngOnInit() {
  }

  postGame(name: string, releaseYear: string){
    this.gamesService.postGame(name, releaseYear, this.consId).subscribe(
      (data:any) => {
        console.log(data)
      }
    );;
  }

}

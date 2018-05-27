import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  constructor(private gamesService : GamesService) { }

  ngOnInit() {
  }

  postGame(){
    this.gamesService.postGame().subscribe(
      (data:any) => {
        console.log(data)
      }
    );;
  }

}

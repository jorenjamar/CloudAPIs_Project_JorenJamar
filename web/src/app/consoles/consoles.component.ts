import { Component, OnInit } from '@angular/core';
import { GameConsolesService, iConsole } from '../service/game-consoles.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss']
})
export class ConsolesComponent implements OnInit {

  lijst: iConsole[];

  constructor(private gamesConsolesService: GameConsolesService) { }

  ngOnInit() {
    this.gamesConsolesService.getLijst().subscribe(result => 
      {
        console.log("result consoles");
        console.log(result);
        this.lijst = result;
      });
  }
}

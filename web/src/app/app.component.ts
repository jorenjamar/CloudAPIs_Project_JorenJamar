import { Component, OnInit } from '@angular/core';
import {HydramoviesService, IPokemon} from './hydramovies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  moviePoster = 'https:\/\/hydramovies.com\/wp-content\/uploads\/2018\/04\/Inception-Movie-Poster.jpg';
  movieTitle = 'Inception (2010)';
  movieDescription = 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.';
  ytid : string;
  imdbid : string;
  serviceApi = "https://hydramovies.com/api-v2/?source=http://hydramovies.com/api-v2/current-Movie-Data.csv&Title=Inception";

  lijst : IPokemon[];

  constructor(private hydramoviesService:HydramoviesService){
  }

  ngOnInit(){
    this.hydramoviesService.getLijst().subscribe(d => this.lijst = d);
    console.log(this.lijst);
  }

  
  goToTrailer(){
    this.ytid = "YoHD9XEInc0";
    window.location.href = 'https://www.youtube.com/watch?v=' + this.ytid;
  }

  goToImdb(){
    this.imdbid = "tt1375666";
    window.location.href =  "http://www.imdb.com/title/" + this.imdbid;
  }

  search(){

  }
}




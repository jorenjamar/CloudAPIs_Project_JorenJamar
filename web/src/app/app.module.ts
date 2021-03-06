import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { PokemonService } from './service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonSetsService } from './service/pokemon-sets.service';
import { SetComponent } from './set/set.component';
import { PokemonTypesService } from './service/pokemon-types.service';
import { PokemonSubTypesService } from './service/pokemon-sub-types.service';
import { PokemonSuperTypesService } from './service/pokemon-super-types.service';
import { ConsolesComponent } from './consoles/consoles.component';
import { GameConsolesService } from './service/game-consoles.service';
import { GamesService } from './service/games.service';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./service/auth.service";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeDetailComponent,
    PageNotFoundComponent,
    SetComponent,
    ConsolesComponent,
    GamesComponent,
    AddGameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: "pokeSearch", component: PokeSearchComponent},
      { path: "consoles", component: ConsolesComponent},
      { path: "addGame", component: AddGameComponent},
      { path: "games/:cons", component: GamesComponent},
      { path: "pokeDetail/:id", component: PokeDetailComponent},
      { path: "set/:name", component: SetComponent},
      { path: "", redirectTo: "pokeSearch", pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], {useHash: true})
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ 
    PokemonService,
    PokemonSetsService,
    PokemonTypesService,
    PokemonSubTypesService,
    PokemonSuperTypesService,
    GameConsolesService,
    GamesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

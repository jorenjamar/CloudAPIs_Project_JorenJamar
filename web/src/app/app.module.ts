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

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: "pokeSearch", component: PokeSearchComponent},
      { path: "pokeDetail", component: PokeDetailComponent},
      { path: "pokeDetail/:id", component: PokeDetailComponent},
      { path: "", redirectTo: "pokeSearch", pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], {useHash: true})
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ PokemonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

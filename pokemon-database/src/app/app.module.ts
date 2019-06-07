import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PokemonComponent } from './dashboard/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './dashboard/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

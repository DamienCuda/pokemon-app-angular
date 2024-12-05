import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PokemonModule
  ]
})


export class AppComponent{}

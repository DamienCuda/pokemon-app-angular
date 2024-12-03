import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { PokemonModule } from './pokemon/pokemon.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [PokemonModule, AppRoutingModule]
})

export class AppComponent{}

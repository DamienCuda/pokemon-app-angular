import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [AppRoutingModule, FormsModule, PokemonModule]
})

export class AppComponent{}

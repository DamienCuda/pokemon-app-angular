import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  imports: [PokemonFormComponent],
  template: `
    <h2 class="center">Ajouter un Pokémon</h2>
    <app-pokemon-form [pokemon]="this.pokemon"></app-pokemon-form>
  `,
})
export class AddPokemonComponent implements OnInit {
  pokemon :Pokemon;

  ngOnInit(){
    this.pokemon = new Pokemon();
  }
}

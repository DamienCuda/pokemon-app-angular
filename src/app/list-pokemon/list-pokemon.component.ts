import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  imports: [BorderCardDirective, PokemonTypeColorPipe, CommonModule],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router:Router){}

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}

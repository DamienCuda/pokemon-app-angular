import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonbyId(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypelist(): string[]{
    return [
      'Plante',
      'Feu',
      'Poison',
      'Eau',
      'Insecte',
      'Normal',
      'Vol',
      'Electrik',
      'Fée',
      'Combat',
      'Psy'
    ];
  }
}

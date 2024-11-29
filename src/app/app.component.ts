import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons !</h1>`,
})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[4]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez selectionné ${pokemon.name} !`)
  }
}

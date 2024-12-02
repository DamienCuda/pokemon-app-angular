import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [CommonModule]
})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(){
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){
      console.log(`Vous avez selectionné ${pokemon.name} !`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous avez selectionné un pokémpn qui n'existe pas !`);
      this.pokemonSelected = pokemon;
    }
  }
}

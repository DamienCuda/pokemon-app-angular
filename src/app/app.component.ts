import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(){
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur ${pokemon.name} !`)
  }
}

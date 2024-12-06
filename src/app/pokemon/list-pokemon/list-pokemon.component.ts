import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-list-pokemon',
  imports: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    CommonModule,
    SearchPokemonComponent,
    LoaderComponent
],
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent implements OnInit{
  
  pokemonList: Pokemon[]= [];

  constructor(
    private router:Router,
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
    this.pokemonService.getPokemonList()
    .subscribe(pokemonData => this.pokemonList = pokemonData);
  }

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }

}

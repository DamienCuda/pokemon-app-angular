import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  imports: [BorderCardDirective, PokemonTypeColorPipe, CommonModule],
  templateUrl: './list-pokemon.component.html',
})

export class ListPokemonComponent implements OnInit{
  
  pokemonList: Pokemon[]= [];

  constructor(
    private router:Router,
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }

}

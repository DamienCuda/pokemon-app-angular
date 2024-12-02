import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS; 
  pokemon: Pokemon|undefined

  constructor(private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const pokemonId: number|null  = Number(this.route.snapshot.paramMap.get('id'));
    if(pokemonId){
      this.pokemon = this.pokemonList.find( pokemon => pokemon.id == pokemonId);
    }
  }

  goToPokedex(){
    this.router.navigate(['/'])
  }

}
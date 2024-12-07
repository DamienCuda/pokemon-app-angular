import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-detail-pokemon',
  imports: [
    CommonModule,
    PokemonTypeColorPipe,
    HttpClientModule,
    LoaderComponent
],
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private pokemonService: PokemonService
  ){}

  ngOnInit(): void {
    const pokemonId: number|null  = Number(this.route.snapshot.paramMap.get('id'));
    if(pokemonId){
      this.pokemonService.getPokemonbyId(pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  goToPokedex(){
    this.router.navigate(['/pokemons'])
  }

  editPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id])
  }

  deletePokemon(pokemon: Pokemon){
    if(pokemon){
      this.pokemonService.deletePokemonById(pokemon.id).subscribe(
        () => this.router.navigate(['/pokemons'])
      )
    }
  }

}
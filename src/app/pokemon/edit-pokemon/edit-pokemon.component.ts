import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Route } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-pokemon',
  imports: [
    CommonModule,
    PokemonFormComponent,
    HttpClientModule
  ],
  template: `
    <h2 class="center">Editer {{pokemon?.name}}</h2>
    <p class="center" *ngIf="pokemon">
      <img [src]="pokemon.picture"/>
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const pokemonId: number|null  = Number(this.route.snapshot.paramMap.get('id'));
    if(pokemonId){
      this.pokemonService.getPokemonbyId(pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }
  }
}

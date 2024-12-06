import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-pokemon',
  imports: [CommonModule],
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>(); //Class Subject depuis rxJS. Stocke les recherches successives de l'utitlisateur. Un flux dans le temps des recherches.
  pokemons$ : Observable<Pokemon[]>; //Affiche les résultats depuis le Subject

  constructor(
    private pokemonService : PokemonService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300), //permet de ne garder que les termes écarter par 300ms pour ne pas surcharger les requêtes serveur
      distinctUntilChanged(), //modifie le flux pour ne pas avoir plusieurs requête identique
      switchMap((term) => this.pokemonService.searchPokemonList(term)) //renvoie la pokemonList de la dernière recherche de l'utilisateur
    );
  }

  search(term: string){
    this.searchTerms.next(term); //Pousse le terme de recherche de l'utilisateur dans le flux Subject
    return null;
  }

  goToDetailPokemon(pokemon: Pokemon){
    const link = [`pokemon/${pokemon.id}`];
    this.router.navigate(link);
  }

}

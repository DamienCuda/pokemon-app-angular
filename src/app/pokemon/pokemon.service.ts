import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient){}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe( 
      tap((response) => this.log(response)), //tap => equivalent console.log
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonbyId(pokemonId: number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon) :Observable<null>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number) :Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, null))
    );
  }

  addPokemon(pokemon : Pokemon) : Observable<Pokemon>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this.http.post<Pokemon>('api/pokemons/', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, null))
    );
  }

  searchPokemonList(term: string) : Observable<Pokemon[]>{
    if(term.length <= 1){
      return of([]); //return of() renvoie un flux avec une liste vide
    }
    return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, []))
    );
  }


  private log(response: any){
    // console.table(response)
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
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

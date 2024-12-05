import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient} from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';

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

  private log(response: Pokemon[] | Pokemon | undefined ){
    console.table(response)
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

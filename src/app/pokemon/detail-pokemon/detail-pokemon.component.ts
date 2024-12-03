import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule, PokemonTypeColorPipe],
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
      this.pokemon = this.pokemonService.getPokemonbyId(pokemonId);
    }
  }

  goToPokedex(){
    this.router.navigate(['/'])
  }

}
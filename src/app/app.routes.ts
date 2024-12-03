import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    // Pokemon Routes
    { path: 'edit/pokemon/:id', component: EditPokemonComponent},
    { path: 'pokemons', component: ListPokemonComponent},
    { path: 'pokemon/:id', component:  DetailPokemonComponent},
    
    // Main Routes
    { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent} //En dernier pour ne pas croiser avec une route existante
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {}
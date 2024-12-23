import { RouterModule, Routes } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './pokemon/add-pokemon/add-pokemon.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    // Pokemon Routes
    { 
        path: 'edit/pokemon/:id',
        component: EditPokemonComponent,
        canActivate: [authGuard],},
    { 
        path: 'pokemon/add',
        component: AddPokemonComponent,
        canActivate: [authGuard]},
    { 
        path: 'pokemons',
        component: ListPokemonComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'pokemon/:id',
        component:  DetailPokemonComponent,
        canActivate: [authGuard],
    },
    
    // Main Routes
    { 
        path: '',
        redirectTo: 'login', pathMatch: 'full'},
    { 
        path: 'login',
        component:  LoginComponent},
    { 
        path: '**',
        component: PageNotFoundComponent} //En dernier pour ne pas croiser avec une route existante
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {}
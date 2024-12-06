import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  message: string = 'Vous êtes déconnecté';
  name: string;
  password: string;
  auth: AuthService

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(){
    this.message = this.authService.isLoggedIn ? 'Vous êtes connecté' : 'Identifiant ou mot de passe incorrect';
  }

  login(){
    this.message = 'Tentative de connexion en cours';
    this.authService.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/pokemons']);
      }else{
        this.password = ''; //réinitaliser le mot de passe pour que l'utilisateur n'est pas à le faire
        this.router.navigate(['/login']);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.message = 'Vous êtes déconnecté 😉'
  }

}

import { Component } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.email,
  ]);
  tipo = false;
  router: any;
  login: any;
  email = '';
  senha = '';
  constructor(router: Router, login: LoginService) {
    this.router = router;
    this.login = login;
  }
  oculto = () => {
    this.tipo = !this.tipo;
    return this.tipo;
  };

  redirectCadastro = () => {
    this.router.navigate(['cadastro']);
  };

  redirectHome = () => {
    //fazer as válidações
    let user = {
      email: this.email,
      password: this.senha
    }
    this.login.userLogin(user)
    this.router.navigate(['home']);
  };
}

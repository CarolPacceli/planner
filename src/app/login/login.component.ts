import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  email = '';
  constructor(router: Router) {
    this.router = router;
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
    this.router.navigate(['home']);
  };
}

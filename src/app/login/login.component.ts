import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  tipo = false
  router:any;
  constructor(router: Router) {
    this.router = router;
   }
  LoginComponent(){
    // this.router = router;
  }
  oculto = () => {
    this.tipo = !this.tipo
    return this.tipo
  };

  redirectCadastro = () => {
    this.router.navigate(['cadastro']);
  }

  redirectHome = () => {
    this.router.navigate(['home']);
  }
}

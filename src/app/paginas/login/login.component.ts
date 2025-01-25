import { Component, inject } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private snackBar = inject(MatSnackBar);
  url = '/user/login';
  emailFormControl = new FormControl('', [Validators.email]);
  tipo = false;
  router: any;
  baseService: any;
  email = '';
  senha = '';
  constructor(router: Router, baseService: BaseService) {
    this.router = router;
    this.baseService = baseService;
  }
  oculto = () => {
    this.tipo = !this.tipo;
    return this.tipo;
  };

  redirectCadastro = () => {
    this.router.navigate(['cadastro']);
  };

  redirectHome = async () => {
    //fazer as válidações
    let user = {
      email: this.email,
      password: this.senha,
    };
    if (!this.email) {
      this.openSnackBar('Por favor, preencha o campo email corretamente');
      return;
    }
    if (!this.senha) {
      this.openSnackBar('Por favor, preencha o campo senha corretamente');
      return;
    }
    await this.baseService.post(this.url, user).subscribe((resp: any) => {
        try {
        console.log('resp', resp.name);
        if (resp.name) {
          localStorage.setItem('@planner.dono_nome', resp.name);
          localStorage.setItem('@planner.dono_email', this.email);
          this.router.navigate(['home']);
        } else {
          console.log('resp2', resp.name);
        }
      } catch (error) {
        this.openSnackBar('Senha ou email incorretos, favor verificar');
      }
      });
  };

  redirectEsqueceuSenha = () => {
    this.router.navigate(['esqueceusenha']);
  };
  openSnackBar(mensagem: string) {
    this.snackBar.open(mensagem);
  }
}

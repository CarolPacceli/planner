import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CadastroService }from '../../services/cadastro.service'
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nomeFormControl = new FormControl('', [Validators.required]);
  senhaFormControl = new FormControl('', [Validators.required]);
  c_senhaFormControl = new FormControl('', [Validators.required]);

  tipo1 = true;
  tipo2 = true;
  nome = '';
  email = '';
  senha = '';
  c_senha = '';

  cadastroService: any;

  constructor(cadastroService: CadastroService) {
    this.cadastroService = cadastroService;
   }

  oculto1 = () => {
    this.tipo1 = !this.tipo1;
    return this.tipo1;
  };
  oculto2 = () => {
    this.tipo2 = !this.tipo2;
    return this.tipo2;
  };
  validaSenha = () => {
    if (this.senha === this.c_senha) return true;
    return false;
  };

  cadastrar = () => {
    if (!this.nome || !this.senha || !this.c_senha || !this.email) {
      //colocar aviso aqui
      console.log("Chegou2")
    } else if (!this.validaSenha()) {
      //colocar um aviso aqui
      console.log("Chegou3")
    } else {
      let novo_usuario = {
        name: this.nome,
        email: this.email,
        password: this.senha,
      };
      //colocar a api de cadastro aqui
      this.cadastroService.cadastrarUsuario(novo_usuario);

    }
  };
}

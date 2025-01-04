import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  tipo1 = true;
  tipo2 = true;
  nome = "";
  email = "";
  senha = "";
  c_senha = "";
  oculto1 = () => {
    this.tipo1 = !this.tipo1
    return this.tipo1
  };
  oculto2 = () => {
    this.tipo2 = !this.tipo2
    return this.tipo2
  };
}

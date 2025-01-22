import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracoesComponent } from 'src/app/componentes/configuracoes/configuracoes.component';
import { NovaViagemComponent } from 'src/app/componentes/nova-viagem/nova-viagem.component';

export interface IViagem{
  Periodo: string;
  Titulo: string;
  Descricao: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
readonly dialog = inject(MatDialog);
Logo: any;
Viagens: IViagem[];
constructor() {
  this.Viagens = [];
 // this.Logo = require("../../imgs/logo.png");
 }

 criarNovaViagem() {
  const dialogRef = this.dialog.open(NovaViagemComponent);

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log(`Dialog result: ${result}`);
  // });
}
editarUsuario() {
  const dialogRef = this.dialog.open(ConfiguracoesComponent);

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log(`Dialog result: ${result}`);
  // });
}
}

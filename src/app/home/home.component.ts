import { Component } from '@angular/core';

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

Logo: any;
Viagens: IViagem[];
constructor() {
  this.Viagens = [];
 // this.Logo = require("../../imgs/logo.png");
 }
}

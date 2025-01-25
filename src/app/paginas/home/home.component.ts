import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracoesComponent } from 'src/app/componentes/configuracoes/configuracoes.component';
import { ConvidadosComponent } from 'src/app/componentes/convidados/convidados.component';
import { NovaViagemComponent } from 'src/app/componentes/nova-viagem/nova-viagem.component';
import { BaseService } from 'src/app/services/base.service';

export interface IViagem {
  id: string;
  title: string;
  description: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: string;
  created_at: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);
  url = '/trips/all';
  Logo: any;
  baseService: any;
  Viagens: IViagem[];
  email_usuario: string;
  constructor(baseService: BaseService) {
    this.Viagens = [
      {
        id: '',
        title: '',
        description: '',
        destination: '',
        starts_at: '',
        ends_at: '',
        is_confirmed: '',
        created_at: '',
      },
    ];
    this.baseService = baseService;
    this.email_usuario =
      localStorage.getItem('@planner.dono_email') || 'varqqc@qqc.com';

    // this.Logo = require("../../imgs/logo.png");
  }
  ngOnInit() {
    this.email_usuario =
      localStorage.getItem('@planner.dono_email') || 'varqqc@qqc.com';
    this.listarViagens();
  }

  criarNovaViagem() {
    const dialogRef = this.dialog.open(NovaViagemComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  listarViagens = async () => {
    await this.baseService
      .post(this.url, this.email_usuario)
      .subscribe((resp: any) => {
        this.Viagens = resp.trips;
      });
  };
  editarUsuario() {
    const dialogRef = this.dialog.open(ConfiguracoesComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  editarConvidados = (id: string) => {

    const dialogRef = this.dialog.open(ConvidadosComponent, {
      data: { id: id },
    });
  };
}

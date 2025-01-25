import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseService } from 'src/app/services/base.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

const hoje = new Date();
const dia = hoje.getUTCDay();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

@Component({
  selector: 'app-nova-viagem',

  templateUrl: './nova-viagem.component.html',
  styleUrls: ['./nova-viagem.component.css'],
})
export class NovaViagemComponent {
  private snackBar = inject(MatSnackBar);
  durationInSeconds = 5;
  baseService: any;
  nova_viagem_url = '/trips';
  atividades = [
    {
      titulo: 'Criar viagem',
      data: `${hoje.toLocaleDateString('en-US', {
        month: 'numeric',
        day: '2-digit',
        year: '2-digit',
      })} - ${hoje.toLocaleDateString('en-US', {
        month: 'numeric',
        day: '2-digit',
        year: '2-digit',
      })}`,
    },
  ];
  nova_atividade = { titulo: '', data: new Date(ano, mes, dia) };
  nova_viagem = '';
  descricao = '';
  localizacao = '';
  nova_viagem_data_inicial = new Date();
  nova_viagem_data_final = new Date();
  nome_dono = 'carol';
  email_dono = 'carolina.pacceli@ufv.br';
  novo_convidado = '';
  convidados = [''];

  readonly data_viagem = new FormGroup({
    start: new FormControl(new Date(ano, mes, 31)),
    end: new FormControl(new Date(ano, mes + 1, 3)),
  });

  readonly data_atividade = new FormGroup({
    start: new FormControl(new Date(ano, mes, 31)),
    end: new FormControl(new Date(ano, mes + 1, 1)),
  });

  constructor(baseService: BaseService) {
    this.baseService = baseService;
    this.nome_dono = localStorage.getItem('@planner.dono_nome') || 'carol';
    this.email_dono = localStorage.getItem('@planner.dono_email') || 'varqqc@qqc.com';
  }
  criarNovaAtividade = (event: any) => {
    if (event.key === 'Enter') {
      let data_str = `${this.data_atividade.value.start?.toLocaleDateString(
        'en-US',
        { month: 'numeric', day: '2-digit', year: '2-digit' }
      )} - ${this.data_atividade.value.end?.toLocaleDateString('en-US', {
        month: 'numeric',
        day: '2-digit',
        year: '2-digit',
      })}`;
      let atividade_str = {
        titulo: this.nova_atividade.titulo,
        data: data_str,
      };
      this.atividades.push(atividade_str);
    }
  };
  adicionaNovoConvidado = (event: any) => {
    if (event.key === 'Enter') {
      this.convidados.push(this.novo_convidado);
      let convi = this.convidados.filter((item, index) => item !== '');
      this.convidados = convi;
    }
  };
  addNovaViagem = async () => {
    let info = {
      title: this.nova_viagem,
      description: this.descricao,
      destination: this.localizacao,
      starts_at: this.data_atividade.value.start?.toLocaleDateString('en-US', {
        month: 'numeric',
        day: '2-digit',
        year: '2-digit',
      }),
      ends_at: this.data_atividade.value.end?.toLocaleDateString('en-US', {
        month: 'numeric',
        day: '2-digit',
        year: '2-digit',
      }),
      owner_name: this.nome_dono,
      owner_email: this.email_dono,
      emails_to_invite: this.convidados,
    };
    await this.baseService
      .post(this.nova_viagem_url, info)
      .subscribe((resp: any) => {
        let mensagem = 'Viagem criada com sucesso';
        console.log('resp', resp);
        if (!resp.tripId) {
          mensagem =
            'Algo deu errado, por favor verifique se os campos estão preenchidos corretamente';
        }
        this.openSnackBar(mensagem);
      });
  };

  removerConvidado = (convidado: string) => {
      let convi = this.convidados.filter((item, index) => item !== convidado);
      this.convidados = convi;
  }
  openSnackBar(mensagem: string) {
    this.snackBar.open(mensagem);
  }
}

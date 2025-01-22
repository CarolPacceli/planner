import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-nova-viagem',

  templateUrl: './nova-viagem.component.html',
  styleUrls: ['./nova-viagem.component.css'],
})
export class NovaViagemComponent {
  baseService: any;
  nova_viagem_url = '/trips';
  dono = { nome: '', email: '' };
  atividades: [
    {
      titulo: string;
      data: Date;
    }
  ];
  nova_atividade = { titulo: '', data: new Date() };
  nova_viagem = '';
  descricao = '';
  localizacao = '';
  nova_viagem_data_inicial = new Date();
  nova_viagem_data_final = new Date();
  nome_dono = '';
  email_dono = '';
  novo_convidado = '';
  convidados = [''];
  constructor(baseService: BaseService) {
    this.baseService = baseService;
    this.atividades = [
      {
        titulo: '',
        data: new Date(),
      },
    ];
    this.dono.nome = localStorage.getItem('@planner.dono_nome') || '';
    this.dono.email = localStorage.getItem('@planner.dono_email') || '';
  }
  criarNovaAtividade = (event: any) => {
    if (event.key === 'Enter') {
      this.atividades.push(this.nova_atividade);
      console.log('Deu bom', this.atividades);
    }
  };
  adicionaNovoConvidado = (event: any) => {
    if (event.key === 'Enter') {
      this.convidados.push(this.novo_convidado);
      console.log('Deu bom', this.atividades);
    }
  };
  addNovaViagem = () => {
    let info = {
      title: this.nova_viagem,
      description: this.descricao,
      destination: this.localizacao,
      starts_at: this.nova_viagem_data_inicial,
      ends_at: this.nova_viagem_data_final,
      owner_name: this.nome_dono,
      owner_email: this.email_dono,
      emails_to_invite: this.convidados,
    };
    this.baseService.post(this.nova_viagem_url, info).subscribe();
  };
}

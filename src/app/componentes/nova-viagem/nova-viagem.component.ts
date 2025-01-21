import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-nova-viagem',

  templateUrl: './nova-viagem.component.html',
  styleUrls: ['./nova-viagem.component.css'],
})
export class NovaViagemComponent {
  baseService: any;
  atividades: [
    {
      titulo: string;
      data: Date;
    }
  ];
  nova_atividade = { titulo: '', data: new Date() };
  nova_viagem = '';
  descricao = '';
  constructor(baseService: BaseService) {
    this.baseService = baseService;
    this.atividades = [
      {
        titulo: '',
        data: new Date(),
      },
    ];
  }
  criarNovaAtividade = (event: any) => {
    if (event.key === 'Enter') {
      this.atividades.push(this.nova_atividade);
      console.log('Deu bom', this.atividades);
    }
  };
}

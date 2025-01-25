import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css'],
})
export class ConfiguracoesComponent {
  baseService: any;
  router: any;
  url = '/user';
  email = '';
  nome = '';
  constructor(router: Router, baseService: BaseService) {
    this.baseService = baseService;
    this.router = router;
    this.nome = localStorage.getItem('@planner.dono_nome') || 'carol'
    this.email = localStorage.getItem('@planner.dono_email') || 'varqqc@qqc.com'
  }
  salvar = () => {
    let user = {
      email: this.email,
      name: this.nome,
    };
    this.baseService.put(this.url, user).subscribe(()=>{});
  };

  sair = () => {
    //limpar o localhost
    this.router.navigate(['']);
  };
}

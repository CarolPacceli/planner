import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css'],
})
export class ConfiguracoesComponent {
  readonly dialogRef = inject(MatDialogRef<ConfiguracoesComponent>);
  private snackBar = inject(MatSnackBar);
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
    this.baseService.put(this.url, user).subscribe((resp: any)=>{
      localStorage.setItem('@planner.dono_nome', this.nome)
      this.openSnackBar("Mundanças salvas com sucesso")
    });
  };

  sair = () => {
    //limpar o localhost
    localStorage.clear();
    this.dialogRef.close();
    this.router.navigate(['']);
  };

  openSnackBar(mensagem: string) {
    this.snackBar.open(mensagem);
  }
}

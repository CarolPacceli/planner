import { Component, Inject, inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseService } from 'src/app/services/base.service';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-convidados',
  templateUrl: './convidados.component.html',
  styleUrls: ['./convidados.component.css'],
})
export class ConvidadosComponent {
  readonly dialogRef = inject(MatDialogRef<ConvidadosComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  private snackBar = inject(MatSnackBar);
  novo_convidado = { name: '', email: '', is_confirmed: false, novo: true };
  novos_convidados = [{ name: '', email: '', is_confirmed: false }];
  convidados = [{ name: '', email: '', is_confirmed: false, novo: false }];
  baseService: any;
  url = '/trips/';
  constructor(baseService: BaseService) {
    this.baseService = baseService;
  }
  ngOnInit() {
    //  this.email_usuario = localStorage.getItem('@planner.dono_email') || 'varqqc@qqc.com'
    this.listarConvidados();
  }

  adicionaNovoConvidado = (event: any) => {
    if (event.key === 'Enter') {
      this.novo_convidado.novo = true;
      this.convidados.push(this.novo_convidado);
      //this.novos_convidados.push(this.novo_convidado);
      let convi = this.convidados.filter((item, index) => item.email !== '');
      //let novos_convi = this.novos_convidados.filter((item, index) => item.email !== '');
      this.convidados = convi;
      //this.novos_convidados = novos_convi;
    }
  };
  sair = () => {
    //limpar o localhost
    this.dialogRef.close();
  };
  convidar = async (email: string) => {
    let obj = {
      email: email,
    }
    //limpar o localhost
    await this.baseService
      .post(`${this.url}${this.data.id}/invites`, obj)
      .subscribe(() => {
        this.openSnackBar('Convite enviado com sucesso');
      });
  };
  listarConvidados = async () => {
    // /:trip_id/participants
    await this.baseService
      .get(`${this.url}${this.data.id}/participants`)
      .subscribe((resp: any) => {
        this.convidados = resp.participants;
      });
  };
  openSnackBar(mensagem: string) {
    this.snackBar.open(mensagem);
  }
}

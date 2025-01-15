import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseService: any
  constructor(baseService: BaseService) {
    this.baseService = baseService;
   }

   cadastrarUsuario = (user: any)=>{
    let url = `/user/create`
    this.baseService.post(url, user).subscribe((data: any) => {console.log( ...data)});

  }
}

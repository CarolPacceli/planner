import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ListarService {
  baseService: any
  constructor(baseService: BaseService) {
    this.baseService = baseService;
   }

  getLista(){
    let url = `/listar`
    this.baseService.get(url).subscribe((data: any) => {return { ...data }});

  }
}

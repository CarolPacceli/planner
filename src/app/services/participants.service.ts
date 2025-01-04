import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  baseService: any
  constructor(baseService: BaseService) {
    this.baseService = baseService;
   }

   getParticipant(id: string){
    let url = `/particiants/${id}`
    this.baseService.get(url).subscribe((data: any) => {return { ...data }});

  }

  confirmParticipant(id: string){
    let url = `/particiants/${id}/confirm`
    this.baseService.get(url).subscribe((data: any) => {return { ...data }});

  }
}

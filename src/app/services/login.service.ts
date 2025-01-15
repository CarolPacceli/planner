import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseService: any
  constructor(baseService: BaseService) {
    this.baseService = baseService;
   }

   userLogin = async(user: any)=>{
    let url = `/user/login`
    let qqc = ''
    let qqc2 = await this.baseService.post(url, user).subscribe((data: any) => {
      qqc = data.message
      console.log("data", data)
    });
    console.log("qqc", qqc)
    return qqc
  }
}

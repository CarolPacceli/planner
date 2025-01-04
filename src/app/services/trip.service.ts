import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Paths } from './interfaces/path';
@Injectable({
  providedIn: 'root'
})
export class TripService{
  baseService: any;

  constructor(baseService: BaseService) {
    this.baseService = baseService;
   }

/**
 * Gets
 */

getTrip(id: string){
  let url = `/trips/${id}`
  this.baseService.get(url).subscribe((data: any) => {return { ...data }});

}

getLink(id: string){
  let url = `/trips/${id}/links`
  this.baseService.get(url).subscribe((data: any) => {return { ...data }});

}

getActivities(id: string){
  let url = `/trips/${id}/activities`
  this.baseService.get(url).subscribe((data: any) => {return { ...data }});

}

getTripParticipants(id: string){
  let url = `/trips/${id}/participants`
  this.baseService.get(url).subscribe((data: any) => {return { ...data }});

}

confirmTrip(id: string){
  let url = `/trips/${id}/confirm`
  this.baseService.get(url).subscribe((data: any) => {return { ...data }});

}


/**
 * Posts
 */

createTrip(id: string, body: any){
  let url = `/trips/${id}`
  this.baseService.post(url, body).subscribe((data: any) => {return { ...data }});

}

createActivities(id: string, body: any){
  let url = `/trips/${id}/activities`
  this.baseService.post(url, body).subscribe((data: any) => {return { ...data }});

}

createLink(id: string, body: any){
  let url = `/trips/${id}/links`
  this.baseService.post(url, body).subscribe((data: any) => {return { ...data }});

}

createInvite(id: string, body: any){
  let url = `/trips/${id}/invites`
  this.baseService.post(url, body).subscribe((data: any) => {return { ...data }});

}

/**
 * Puts
 */

updateTrip(id: string, body: any){
  let url = `/trips/${id}`
  this.baseService.post(url, body).subscribe((data: any) => {return { ...data }});

}

}

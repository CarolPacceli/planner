import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  configUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get<Config>(this.configUrl+url);
  }
  post(url: string, obj: any) {
    return this.http.post<Config>(this.configUrl+url, obj);
  }
  put(url: string, obj: any) {
    return this.http.put<Config>(this.configUrl+url, obj);
  }
}

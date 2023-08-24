import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  baseUrl:string = "http://localhost:3000/api";

  async get_products(){
    this.http.get(this.baseUrl + '/db').subscribe((res)=>{
      console.log(res);
    });
  }
}

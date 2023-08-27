import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PropertyDetailModel} from "../../lib/model/property-detail.model";
@Injectable()
export class ConfigService{
  constructor(private http: HttpClient) { }

  baseUrl:string = "http://localhost:3000/api";

  get_properties(){
    return this.http.get<PropertyDetailModel[]>(this.baseUrl + '/properties');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyDetailModel } from '../../lib/model/property-detail.model';
import { environment } from '../../environments/environment';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.apiUrl;
  private imageUrl: string = environment.imageUrl;

  get_properties() {
    return this.http.get<PropertyDetailModel[]>(this.baseUrl + '/properties');
  }

  get_property_detail(id: string) {
    return this.http.get<PropertyDetailModel>(
      `${this.baseUrl}/property/${id}`,
    );
  }

  get_image(id: string) {
    return this.http.get<PropertyDetailModel[]>(`${this.imageUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skin_Care_Product } from '../models/data_types';
import { SKIN_CARE } from '../shared/url';

@Injectable({
  providedIn: 'root'
})
export class SkinCareProductsService {

  constructor(private http:HttpClient) { }

  getAllSkin_CareProduct(): Observable<Skin_Care_Product[]> {
    return this.http.get<Skin_Care_Product[]>(SKIN_CARE);
  }

  deleteProduct(id: any): Observable<Skin_Care_Product> {
    return this.http.delete<Skin_Care_Product>(`http://localhost:4000/api/skin_care/${id}`);
  }

  createProduct(productData: any): Observable<Skin_Care_Product> {
    return this.http.post<Skin_Care_Product>(SKIN_CARE, productData);
  }


}

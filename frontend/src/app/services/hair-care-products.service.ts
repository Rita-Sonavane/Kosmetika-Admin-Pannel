import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hair_Care_Product } from '../models/data_types';
import { Observable } from 'rxjs';
import { HAIR_CARE } from '../shared/url';

@Injectable({
  providedIn: 'root'
})
export class HairCareProductsService {

  constructor(private http:HttpClient) { }

  getAllHair_CareProduct(): Observable<Hair_Care_Product[]> {
    return this.http.get<Hair_Care_Product[]>(HAIR_CARE);
  }

  deleteProduct(id: any): Observable<Hair_Care_Product> {
    return this.http.delete<Hair_Care_Product>(`http://localhost:4000/api/hair_care/${id}`);
  }

  createProduct(productData: any): Observable<Hair_Care_Product> {
    return this.http.post<Hair_Care_Product>(HAIR_CARE, productData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../model/response';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  public getAllProducts(
    page: number,
    size: number
  ): Observable<ResponseApi<Product>> {
    const url = `products?page=${page}&size=${size}`;
    return this.http.get<any>(url);
  }
}

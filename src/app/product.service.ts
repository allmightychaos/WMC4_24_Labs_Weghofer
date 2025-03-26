import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from './product.model';

// laut Angabe soll das Service ein Observable<ApiResponse> zurückgeben.
export interface ApiResponse {
      data: {
            result: Product[];
      };
}


@Injectable({
      providedIn: 'root'
})
export class ProductService {
      searchProducts(query: string): Observable<Product[]> {
            return this.http.get<Product[]>(`${this.apiUrl}?search=${query}`);
      }

      private baseUrl = 'https://fakestoreapi.com';

      constructor(private http: HttpClient) { }

      public getAllProducts(): Observable<ApiResponse> {
            return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
                  map((products: Product[]) => {
                        console.log('Fetched products:', products);
                        return {
                              data: {
                                    result: products
                              }
                        } as ApiResponse;
                  })
            );
      }
}
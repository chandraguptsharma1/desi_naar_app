import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct(collectionType:any){
    const cleanCollectionType = typeof collectionType === 'string' ? collectionType.trim() : '';
    const url = cleanCollectionType
      ? `${environment.baseUrl}/products/getProduct?collectionType=${encodeURIComponent(cleanCollectionType)}`
      : `${environment.baseUrl}/products/getProduct`;

    return this.http.get(url);
  }

  addCart(productID:any){
    return this.http.post(environment.baseUrl + `/cart/saveCart/${productID}`,'')
  }
}

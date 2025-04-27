import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminproductService {
  constructor(private http: HttpClient) {}

  addproduct(productData: any) {
    return this.http.post(
      environment.baseUrl + '/products/upload',
      productData
    );
  }
}

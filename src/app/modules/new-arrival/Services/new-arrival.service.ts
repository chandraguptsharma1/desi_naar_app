import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

export interface NewArrivalApiItem {
  _id?: string;
  title?: string;
  sku?: string;
  price?: number;
  description?: string;
  imageUrls?: string[];
  detailImages?: string[];
  sizes?: string[];
  colors?: Array<{ name?: string; code?: string } | string>;
  fabric?: string;
  color?: string;
  workType?: string;
  collectionType?: string;
  sequenceNo?: number;
  isActive?: boolean;
}

export interface NewArrivalApiResponse {
  status: string;
  statusCode: number;
  message: string;
  count: number;
  data: NewArrivalApiItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NewArrivalService {
  constructor(private http: HttpClient) { }

  getNewArrivals(collectionType?: string) {
    let params = new HttpParams().set('active', 'true');

    const cleanCollectionType = collectionType?.replace(/"/g, '').trim();
    if (cleanCollectionType) {
      params = params.set('collectionType', cleanCollectionType);
    }

    return this.http.get<NewArrivalApiResponse>(`${environment.baseUrl}/new-arrival`, { params });
  }
}

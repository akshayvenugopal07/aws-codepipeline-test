import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  getRequest(reqUrl: string, params?: any): Observable<any> {
    const endpoint = environment.API_ENDPOINT + reqUrl;
    const options = params ? new HttpParams({ fromObject: params }) : {};
    return this.http.get(endpoint, {'params': options});
  }

}
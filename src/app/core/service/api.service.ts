import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';

import { environment } from './../../../environments/environment';

import { ResultModel } from './../model/result.model';

import { ObjectUtil } from '../util/object.util';

@Injectable()
export class ApiService {
  
  private env = environment;

  constructor(public http: HttpClient) {}

  send(
    type: string,
    url: string,
    payload: any = {},
    loading: boolean = false,
    auth: boolean = false,
    header: CampoHeader[] = new Array<CampoHeader>()
  ): Observable<ResultModel> {
    const fullUrl = `${this.env.url}${url}`;
    let headers = new HttpHeaders();
    let request: Observable<any>;
    if (auth) {
      const token = '';
      headers = headers.append('Authorization', `Bearer ${token || 'NONE'}`);
    }
    if (header.length > 0) {
      for (let index = 0; index < header.length; index++) {
        headers = headers.append(header[index].campo, header[index].valor);
      }

    }
    if (type.toLowerCase() === 'get') {
      let params = '/';
      ObjectUtil.listProperties(payload).forEach(prop => {
        params += payload[prop] + '/';
      });
      request = this.http.get<ResultModel>(fullUrl + params, {
        headers: headers
      });
    } else if (type.toLowerCase() === 'post') {
      request = this.http.post<ResultModel>(fullUrl, payload, {
        headers: headers
      });
    }
    return this.buildRequest(request, loading);
  }

  // login(
  //   email: string,
  //   password: string,
  //   type: string
  // ): Observable<ResultModel> {
  //   let res: ResultModel;
  //   const fullUrl = `${this.env.urlBase}/token`;
  //   const params = `username=${email}&password=${password}&grant_type=password`;
  //   const headers = {
  //     headers: new HttpHeaders().append('User-Type', type)
  //   };
  //   const request = this.http
  //     .post<ResultModel>(fullUrl, params, headers)
  //     .map((result: any) => {
  //       res = { valid: true, payload: result.access_token };
  //       return res;
  //     })
  //     .catch((error: HttpErrorResponse) => {
  //       res = { valid: false, payload: error.error.error };
  //       return Observable.of(res);
  //     });
  //   return request;
  // }

  private buildRequest(
    request: Observable<any>,
    loading: boolean
  ): Observable<any> {
    let res: ResultModel;
    return request
      .map(result => {
        res = { valid: true, payload: result };
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        if (error.status === 400) {
          if (error.error.message) {
            res = { valid: false, payload: error.error.message };
          } else {
            res = { valid: false, payload: error.error };
          }
          return of(res);
        } else {
          res = { valid: false, payload: error.error.message };
          return of(res);
        }
      });
  }
}

export class CampoHeader {
  campo: string;
  valor: string;
}

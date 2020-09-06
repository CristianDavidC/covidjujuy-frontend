import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { ServerResponse } from '../../model/product.model';



@Injectable()
export class DashboardService {
    private url = environment.url;

    // constructor(private http: HttpClient) {
    // }


    // getAllProducts(limitOfResults = 10): Observable<ServerResponse> {
    //     return this.http.get<ServerResponse>(this.url + 'products', {
    //         params: {
    //             limit: limitOfResults.toString()
    //         }
    //     });
    // }

}
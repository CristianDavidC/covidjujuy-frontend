import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@config';
import { ApiService } from '@core/service/api.service';


@Injectable()
export class UsuarioService {
    private url = environment.url;

    constructor(
        private httpCliente: HttpClient,
        private http: ApiService
    ) {
    }


    getAllUsers(limitOfResults = 10): Observable<any> {
        return this.httpCliente.get<any>(this.url + 'usuarios', {
            params: {
                limit: limitOfResults.toString()
            }
        });
    }

    getUsers(limitOfResults = 1): Observable<any> {
        return this.http.send('get', 'usuarios', limitOfResults);
    }

}
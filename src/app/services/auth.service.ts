import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    auth = false;

    constructor() { }

    login(): Observable<boolean> {
        this.auth = true;
        return of(true);
    }

    logout() {
        this.auth = false;
    }
    
}
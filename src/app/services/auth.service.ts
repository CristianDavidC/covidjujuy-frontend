import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from 'app/model/auth/user.model';

export const CurrentUser = 'current-user';

@Injectable()
export class AuthService {
    
    
    private _userSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public get userValue(): User {
        return this._userSubject.value;
    }

    constructor() { 
        this._userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
        this.currentUser = this._userSubject.asObservable();
    }


    login(): Observable<boolean> {
        const user: User = {
            id: 1,
            username: 'cristian',
            email: 'cristian@gmail.com'
        };
        localStorage.setItem(CurrentUser, btoa(JSON.stringify(user)));
        this._userSubject.next(user);
        return of(true);
    }

    logout() {
        localStorage.removeItem(CurrentUser);
        this._userSubject.next(null);
        
    }
    
    private getUserFromLocalStorage(): User {
        try {
          return JSON.parse(atob(localStorage.getItem(CurrentUser)!));
        } catch (error) {
          return null!;
        }
      }
}
import { TokenService } from './../login/login/token/token.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import jwt_decode from "jwt-decode";

@Injectable ({providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>({id:null, name:null, email:null, profile:null});

    constructor (
        private tokenService: TokenService) 
        {
            this.tokenService.hasToken() && 
                this.decodeAndNotiFy();
        }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotiFy();

    }

    getUser (){
        return this.userSubject.asObservable();
    }

    private decodeAndNotiFy(){
        const token: any= this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }
}


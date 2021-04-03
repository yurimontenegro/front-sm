import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../login/login/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
      private tokenService : TokenService,
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler, ): Observable<HttpEvent<any>> {
    const dupReq = request.clone({
      headers: request.headers.set('Authorization', `${this.tokenService.getToken()}`)
    });
    return next.handle(dupReq);
  }
}
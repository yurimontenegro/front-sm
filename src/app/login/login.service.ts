import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:8080/login"


  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) 
     { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  loggingIn(service: Login): Observable <Login> {
    return this.http.post<Login>(this.baseUrl, service)
  }
}
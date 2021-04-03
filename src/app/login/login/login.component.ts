import { UserService } from './../../user/user.service';
import { Login } from './../login.model';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  service: Login = {
    email: '',
    password: ''
  }


  constructor(private serviceService: LoginService,
    private router: Router,
    private userService: UserService) {}
  ngOnInit(): void {
  }

  loginUser(): void {
    this.serviceService.loggingIn(this.service).subscribe(data => {
      this.serviceService.showMessage('Usuário autenticado!')
      this.router.navigate(['/home'])
      const authToken = JSON.parse(JSON.stringify(data)).token
      console.info(authToken)
      this.userService.setToken(authToken)
      //localStorage.setItem("user", btoa(JSON.stringify(data.user)));
      //console.info("token: " + localStorage.getItem("token"))
  }, error =>  {
    this.service.password = ''
    if (error.status == 400){
      this.serviceService.showMessage(error.error[0].error)
    }
  })  
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}

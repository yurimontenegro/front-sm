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


  constructor(private serviceService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.serviceService.loggingIn(this.service).subscribe(data => {
      this.serviceService.showMessage('Usuário autenticado!')
      this.router.navigate(['/home'])
  }, error =>  {
    this.service.password = ''
    if (error.status == 400){
      this.serviceService.showMessage(error.error[0].error)
    }
  })  
  }
}

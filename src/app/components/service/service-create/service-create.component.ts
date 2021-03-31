import { Service } from './../service.model';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {

  service: Service = {
    email: '',
    password: ''
  }

  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createService(): void {
    this.serviceService.create(this.service).subscribe(() => {
      this.serviceService.showMessage('Serviço criado!')
      this.router.navigate(['/services'])
  })
}

  cancel(): void {
    this.router.navigate(['/services'])
  }

}

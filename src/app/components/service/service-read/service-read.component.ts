import { ServiceService } from './../service.service';
import { Service } from './../service.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-read',
  templateUrl: './service-read.component.html',
  styleUrls: ['./service-read.component.css']
})
export class ServiceReadComponent implements OnInit {

  services: Service[] | undefined 
  
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.read().subscribe(services => {
      this.services = services
    })
  }

}

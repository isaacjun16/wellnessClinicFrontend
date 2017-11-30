import { Component, OnInit } from '@angular/core';
import { BservicesService } from '../../../services/bservices/bservices.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services;

  constructor(service: BservicesService) {
    this.services = service.getBusinessServices();
  }

  ngOnInit() {
  }

}

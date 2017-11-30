import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../../services/testimonials/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials;

  constructor(service: TestimonialsService) { 
    this.testimonials = service.getTestimonials();
  }

  ngOnInit() {
    
  }

}

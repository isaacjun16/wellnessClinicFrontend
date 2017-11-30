import { Injectable } from '@angular/core';

@Injectable()
export class TestimonialsService {

  constructor() { }

  getTestimonials() {
    return [{
      content: "Some text",
      author: "Some author"
    },
    {
      content: "Great wellness program experiance. Friendly and very accomodating",
      author: "John Doe"
    }];
  }
}

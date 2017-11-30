import { Injectable } from '@angular/core';

@Injectable()
export class BservicesService {

  constructor() { }

  getBusinessServices() {
    return [{
      image: "./assets/img/service1.png",
      description: "",
      title: "Donec elitu commodo"
    },
    {
      image: "./assets/img/service2.png",
      description: "",
      title: "Ipsum samsi nayakio"
    },
    {
      image: "./assets/img/service3.png",
      description: "",
      title: "Aliguiam Maecenas"
    },
    {
      image: "./assets/img/service1.png",
      description: "",
      title: "Donec elitu commodo"
    },
    {
      image: "./assets/img/service2.png",
      description: "",
      title: "Ipsum samsi nayakio"
    },
    {
      image: "./assets/img/service3.png",
      description: "",
      title: "Aliguiam Maecenas"
    }];
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {

  constructor() { }

  getInstagramPhotos(){
    return [
      "assets/img/instagramPhoto1.png",
      "assets/img/instagramPhoto2.png",
      "assets/img/instagramPhoto3.png",
      "assets/img/instagramPhoto4.png",
      "assets/img/instagramPhoto5.png",
      "assets/img/instagramPhoto2.png"
    ]
  }
}

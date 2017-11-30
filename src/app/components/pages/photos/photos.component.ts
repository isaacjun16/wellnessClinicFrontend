import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../services/photos/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos;

  constructor(service: PhotosService) {
    this.photos = service.getInstagramPhotos();
  }

  ngOnInit() {
  }

}

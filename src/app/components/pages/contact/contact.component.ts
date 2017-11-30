import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 14.6219076;
  lng: number = -90.5145733;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  }

  onSubmit(form: any): void {  
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title:'Is this the data you enter?', 
      message:'Name: ' + form.name + 
      ', Email: ' + form.email + 
      ', Message: ' + form.message})
      .subscribe((isConfirmed)=>{
          if(isConfirmed) {
              //do something with confirm dialog
          }

          else {
              //do NOt do nothing
          }
      });
  }
}

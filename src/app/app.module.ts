import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal'

/*import { RouterModule, Routes } from '@angular/router';*/

import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PhotosComponent } from './components/pages/photos/photos.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';

import { TestimonialsService } from './services/testimonials/testimonials.service';
import { BservicesService } from './services/bservices/bservices.service';
import { PhotosService } from './services/photos/photos.service';

import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/elements/contact-form/contact-form.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { ConfirmComponent } from './components/elements/confirm/confirm.component';

/*let routes = [
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'contact', component: ContactComponent}
];*/

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    PhotosComponent,
    TestimonialsComponent,
    NewsComponent,
    PartnersComponent,
    ContactComponent,
    NavbarComponent,
    ContactFormComponent,
    FooterComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule.forRoot({container:document.body}),
    AgmCoreModule.forRoot({
      apiKey: ''
    })/*,
    RouterModule.forRoot(routes)*/
  ],
  providers: [
    TestimonialsService,
    BservicesService,
    PhotosService
  ],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

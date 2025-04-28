import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionGalleryComponent } from './collection-gallery/collection-gallery.component';
import { AboutTheLaboratoryComponent } from './about-the-laboratory/about-the-laboratory.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionGalleryComponent,
    AboutTheLaboratoryComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

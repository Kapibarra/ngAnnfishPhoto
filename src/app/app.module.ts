import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './homepage/shared/components/gallery/gallery.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { FormComponent } from './homepage/shared/components/form/form.component';
import { LoginComponent } from './homepage/shared/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    HeaderComponent,
    FormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

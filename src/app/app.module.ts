import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './homepage/shared/components/gallery/gallery.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    LoginPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

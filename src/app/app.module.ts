import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './homepage/shared/components/form/form.component';
import { GalleryComponent } from './homepage/shared/components/gallery/gallery.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { LoginComponent } from './homepage/shared/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    HeaderComponent,
    FormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFullpageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

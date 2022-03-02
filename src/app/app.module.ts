import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginModule } from './auth/login.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

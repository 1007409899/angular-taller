import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule


  ],
  exports: [
    NavbarComponent,

  ],

})
export class SharedModule { }

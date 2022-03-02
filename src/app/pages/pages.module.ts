import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { GeneroPipe } from '../pipes/genero.pipe';
import { FiltroUsuarioComponent } from './filtro-usuario/filtro-usuario.component';
import { FormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    InicioComponent,
    HomeComponent,
    GeneroPipe,
    FiltroUsuarioComponent,
    DetalleUsuarioComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,

  ],

})
export class PagesModule { }

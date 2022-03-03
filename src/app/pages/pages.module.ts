import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { GeneroPipe } from '../pipes/genero.pipe';
import { FiltroUsuarioComponent } from './filtro-usuario/filtro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    InicioComponent,
    HomeComponent,
    GeneroPipe,
    FiltroUsuarioComponent,
    DetalleUsuarioComponent,
    EmpleadoComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ],

})
export class PagesModule { }

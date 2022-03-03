import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [

  {
    path: "",
    component: InicioComponent, children: [
      {
        path: "home",
        component:HomeComponent,
      },
      {
        path: "usuarios",
        component: ListaUsuariosComponent

      }, {

        path: "usuarios/:id",
        component: DetalleUsuarioComponent
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"

      },
      {
        path: "empleados",
        component: EmpleadoComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

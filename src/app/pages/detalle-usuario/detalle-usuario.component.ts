import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleUsuario } from 'src/app/model/detalleUsuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css'],
})
export class DetalleUsuarioComponent implements OnInit {
  usuarioSeleccionado: DetalleUsuario | undefined;

  detalleUsuarios: Array<DetalleUsuario> = [
    {
      cedula: '24056078',
      descripcion: 'Persona encargada de la logistica de la empresa',

    },
    {
      cedula: '1053768901',
      descripcion: 'Lider del departamento de ventas en la ciudad de Armenia.',
    },
    {
      cedula: '16077654',
      descripcion: 'Departamento de diseño e inovación para nuevos productos.',
    },
    {
      cedula: '1054123456',
      descripcion: 'Lider de la zona oriental',
    },
  ];

  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit() {

    const cedulaSelec = this.activeRoute.snapshot.paramMap.get('id');
    this.usuarioSeleccionado = this.detalleUsuarios.find(
      (d) => d.cedula === cedulaSelec
    );
  }
}

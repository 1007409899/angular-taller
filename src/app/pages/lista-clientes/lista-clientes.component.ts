import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {

  cantidadClientes: number;
  clientes: Array<Cliente> = [];
  constructor(private clienteServices: ClientesService) {}

  ngOnInit(): void {
    this.clienteServices
      .ObtenerClientes(10)
      .subscribe((d) => console.log('si', d));
  }
  consultarClientes(cantClientes: number) {
    if (cantClientes) {
      console.log(cantClientes);
      this.clienteServices
        .ObtenerClientes(cantClientes)
        .subscribe((lstClients: Array<Cliente>) => {
          this.clientes = lstClients;
        });
    } else {
      alert('Ingrese la cantidad de clientes que desea visualizar');
      this.clientes = [];
    }
  }
}

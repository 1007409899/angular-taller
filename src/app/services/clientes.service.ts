import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  readonly url = environment.urlServicio;

  constructor(private http: HttpClient) {}

  ObtenerClientes(cantidad: number): Observable<Array<Cliente>> {
    const urlCliente = `${this.url}/?results=${cantidad}`;
    const lstClientes: Array<Cliente> = [];
    return this.http.get<any>(urlCliente).pipe(
      map((clientes) => {
        (clientes.results).forEach((registro: any) => {
          lstClientes.push({
            nombre: registro.name.first,
            apellido: registro.name.last,
            detalleDireccion: {
              calle: registro.location.street.number,
              ciudad: registro.location.city,
              pais: registro.location.country,
            },
            foto: registro.picture.medium,
          });
        });
        return lstClientes;
      })
    );
  }
}

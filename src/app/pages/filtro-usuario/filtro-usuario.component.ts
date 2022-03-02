import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-usuario',
  templateUrl: './filtro-usuario.component.html',
  styleUrls: ['./filtro-usuario.component.css'],
})
export class FiltroUsuarioComponent implements OnInit {
  selectedAllUser= "ALL"
  @Input() todos = 0;
  @Input() masculino = 0;
  @Input() femenino = 0;
  constructor() {}
  @Output() generoSeleccionado: EventEmitter<string> = new EventEmitter<string>()
  ngOnInit(): void { }


  obtenerGenero(genero: string) {
    this.generoSeleccionado.emit(genero);
  }
}

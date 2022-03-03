import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
 function validarNombreUsuario(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value != null && ((c.value as string).toUpperCase() === 'JPEREZ') || !isNaN(c.value)) {
  return { nameError: true };
  }
  return null;
  }
  function SalarioColaborador(minSalario: number, maxSalario: number) {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (
        c.value != null &&
        c.value !== '' &&
        (c.value < minSalario || c.value > maxSalario)
      ) {
        return { salario: true };
      }
      return null;
    };
  }
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  frmEmpleado!: FormGroup;
  constructor(private frm: FormBuilder) {}
  ngOnInit() {
    this.frmEmpleado = this.initForm();
  }

  initForm(): FormGroup {
    return this.frm.group({
      nombreColaborador: ['', [Validators.required, Validators.minLength(3),validarNombreUsuario]],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      ciudad: [''],
      salario: [''],
      nacionalidad: ['col'],
    });
  }

  selectNacionalidad(nac: string) {
    var ctrlCiudad = this.frmEmpleado.get('ciudad');
    var ctrlSalario = this.frmEmpleado.get('salario');
    if (nac === 'col') {
      ctrlCiudad?.clearValidators();
      ctrlSalario?.clearValidators();
    } else {
      ctrlCiudad?.setValidators(Validators.required);
      ctrlSalario?.setValidators([Validators.required, SalarioColaborador(1000,2000)]);
    }
    ctrlCiudad?.updateValueAndValidity();
ctrlSalario?.updateValueAndValidity();

  }

}

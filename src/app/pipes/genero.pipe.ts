import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {
    return value === 'M' ? 'Masculino':'Femenino';
  }

}

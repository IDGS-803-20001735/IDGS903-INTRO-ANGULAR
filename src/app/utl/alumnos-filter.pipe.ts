import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnos } from './alumnos';

@Pipe({
  name: 'alumnosFilter',
})
export class AlumnosFilterPipe implements PipeTransform {
  transform(value: IAlumnos[], args: string): IAlumnos[] {
    let filter: string = args ? args.toLocaleLowerCase() : '';
    return filter
      ? value.filter(
          (alumno: IAlumnos) =>
            alumno.nombre.toLocaleLowerCase().indexOf(filter) != -1
        )
      : value;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intro-angular-idgs903';
  grupo = 'IDGS-903';

  alumnos = {
    matricula: 20001735,
    nombre: 'Diego Estrada',
    fechaNacimiento: new Date(),
    pago: 123.56,
  };

  duplicar(valor: number): number {
    return valor * 2;
  }
}

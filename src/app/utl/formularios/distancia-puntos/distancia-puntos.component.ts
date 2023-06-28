import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-puntos',
  templateUrl: './distancia-puntos.component.html',
  styleUrls: ['./distancia-puntos.component.css'],
})
export class DistanciaPuntosComponent {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  distancia!: number;

  calcularDistancia() {
    this.distancia = Math.sqrt(
      Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2)
    );
  }
}

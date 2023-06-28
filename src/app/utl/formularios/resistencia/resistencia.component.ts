import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css'],
})
export class ResistenciaComponent {
  colorBandas = [
    { color: 'black', valor: 0 },
    { color: 'rosybrown', valor: 1 },
    { color: 'crimson', valor: 2 },
    { color: 'tomato', valor: 3 },
    { color: 'khaki', valor: 4 },
    { color: 'palegreen', valor: 5 },
    { color: 'paleturquoise', valor: 6 },
    { color: 'violet', valor: 7 },
    { color: 'gainsboro', valor: 8 },
    { color: 'white', valor: 9 },
    { color: 'darkgoldenrod', valor: 0.05 },
    { color: 'silver', valor: 0.1 },
  ];

  banda1!: number;
  banda2!: number;
  banda3!: number;
  tolerancia!: number;

  color1: string =
    this.colorBandas.find((color) => color.valor === this.banda1)?.color || '';
  color2: string =
    this.colorBandas.find((color) => color.valor === this.banda2)?.color || '';
  color3!: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent {
  num1: number = 0;
  num2: number = 0;
  operacion: string = '';
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.num1 + this.num2;
  }

  operacionesBasicas(): void {
    if (this.operacion == 'sum') {
      this.resultado = this.num1 + this.num2;
    } else if (this.operacion == 'res') {
      this.resultado = this.num1 - this.num2;
    } else if (this.operacion == 'mul') {
      this.resultado = this.num1 * this.num2;
    } else if (this.operacion == 'div') {
      this.resultado = this.num1 / this.num2;
    }
  }
}

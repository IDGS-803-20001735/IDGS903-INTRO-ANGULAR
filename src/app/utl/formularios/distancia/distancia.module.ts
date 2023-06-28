import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DistanciaPuntosComponent } from '../distancia-puntos/distancia-puntos.component';

@NgModule({
  declarations: [DistanciaPuntosComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [DistanciaPuntosComponent],
})
export class DistanciaModule {}

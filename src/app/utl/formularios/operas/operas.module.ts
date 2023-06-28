import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OperasBasComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [OperasBasComponent],
})
export class OperasModule {}

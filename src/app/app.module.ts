import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component';
import { ievnComponent } from './utl/ievn.component';
import { IrdComponent } from './utl/ird/ird.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistanciaModule } from './utl/formularios/distancia/distancia.module';
import { ResistenciaComponent } from './utl/formularios/resistencia/resistencia.component';
import { MenuComponent } from './utl/menu/menu.component';
import { AlumnosFilterPipe } from './utl/alumnos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IrdComponent,
    SumaComponent,
    ResistenciaComponent,
    MenuComponent,
    AlumnosFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

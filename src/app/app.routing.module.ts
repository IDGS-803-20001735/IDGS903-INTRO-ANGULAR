import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IrdComponent } from './utl/ird/ird.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'IRD', component: IrdComponent },
  { path: 'Formulario', component: AlumnoReactiveComponent },
  //{ path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

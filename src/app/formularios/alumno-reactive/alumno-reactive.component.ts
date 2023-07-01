import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css'],
})
export class AlumnoReactiveComponent {
  alumnoForm!: FormGroup;
  alumnosGuardados: any = [];

  constructor(private readonly fb: FormBuilder) {
    this.alumnoForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form-> ', this.alumnoForm.value);
    this.obtenerValores();

    console.log(this.alumnosGuardados);
  }

  obtenerValores(): void {
    let matricula = this.alumnoForm.get('matricula')?.value;
    let nombre = this.alumnoForm.get('nombre')?.value;
    let edad = this.alumnoForm.get('edad')?.value;
    let correo = this.alumnoForm.get('correo')?.value;
    let pago = this.alumnoForm.get('pago')?.value;
    let foto = this.alumnoForm.get('foto')?.value;
    let calif = this.alumnoForm.get('calif')?.value;

    const objeto = this.alumnoForm.value;
    this.alumnosGuardados.push(objeto);
    console.log('Arreglo de objetos:', this.alumnosGuardados);

    //console.log(`Matricula: ${matricula}`);
    //console.log(`Nombre: ${nombre}`);
  }

  initForm(): FormGroup {
    return this.fb.group({
      matricula: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: [''],
      correo: [''],
      pago: [''],
      foto: [''],
      calif: [''],
    });
  }
}

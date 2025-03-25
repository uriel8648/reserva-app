import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AjusteReservaService } from '../ajuste-reserva.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-ajuste-reserva',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ],
  templateUrl: './ajuste-reserva.component.html',
  styleUrl: './ajuste-reserva.component.css'
})
export class AjusteReservaComponent {
 /*
ajustes: any[] = [];
ajusteForm: FormGroup;
showNewAjusteForm = false;

constructor(private ajusteReservaService: AjusteReservaService, private fb: FormBuilder) {
  this.ajusteForm = this.fb.group({
    ramoContable: ['', Validators.required],
    cobertura: ['', Validators.required],
    sumaAsegurada: ['', Validators.required],
    reservaInicial: ['', Validators.required],
    ajustes: ['', Validators.required],
    pagos: ['', Validators.required],
    saldo: ['', Validators.required]
  });
}

ngOnInit(): void {
  this.ajustes = this.ajusteReservaService.getAjustes();
}

openNewAjusteForm(): void {
  this.showNewAjusteForm = true;
}

closeNewAjusteForm(): void {
  this.showNewAjusteForm = false;
}

onSubmit(): void {
  if (this.ajusteForm.valid) {
    this.ajusteReservaService.addAjuste(this.ajusteForm.value);
    this.ajustes = this.ajusteReservaService.getAjustes();
    this.ajusteForm.reset();
    this.showNewAjusteForm = false;
  }
}

deleteAjuste(index: number): void {
  this.ajusteReservaService.deleteAjuste(index);
  this.ajustes = this.ajusteReservaService.getAjustes();
}*/
ajustes: any[] = [];
ajusteForm: FormGroup;
showNewAjusteForm = false;

constructor(private ajusteReservaService: AjusteReservaService, private fb: FormBuilder) {
  this.ajusteForm = this.fb.group({
    ramoContable: ['', Validators.required],
    cobertura: ['', Validators.required],
    sumaAsegurada: ['', Validators.required],
    reservaInicial: ['', Validators.required],
    ajustes: ['', Validators.required],
    pagos: ['', Validators.required],
    saldo: ['', Validators.required]
  });
}

ngOnInit(): void {
  this.loadAjustes();
}

loadAjustes(): void {
  this.ajusteReservaService.getAjustes().subscribe(data => {
    this.ajustes = data;
  });
}

openNewAjusteForm(): void {
  this.showNewAjusteForm = true;
}

closeNewAjusteForm(): void {
  this.showNewAjusteForm = false;
}

onSubmit(): void {
  if (this.ajusteForm.valid) {
    this.ajusteReservaService.addAjuste(this.ajusteForm.value).subscribe(() => {
      this.loadAjustes();
      this.ajusteForm.reset();
      this.showNewAjusteForm = false;
    });
  }
}

deleteAjuste(id: string): void {
  this.ajusteReservaService.deleteAjuste(id).subscribe(() => {
    this.loadAjustes();
  });
}
}
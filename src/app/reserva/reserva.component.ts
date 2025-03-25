import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModificacionReservaService } from '../modificacion-reserva.service';

@Component({
  selector: 'app-reserva',
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  standalone: true,
  styleUrl: './reserva.component.css'
})
export class ReservaComponent implements OnInit {
  
  records: any[] = [];
  ajustes: any[] = [];

  constructor(private modificacionReservaService: ModificacionReservaService) { }

  ngOnInit(): void {
    this.records = this.modificacionReservaService.getRecords();
  }
  
  addNewRecord(): void {
    this.modificacionReservaService.addRecord({
      ramoContable: '',
      cobertura: '',
      sumaAseg: '',
      priRvaInicial: '',
      ajustes: '',
      pagos: '',
      saldo: '',
      ajusteRva: '',
      nvoMtoAjte: '',
      nvoSaldo: '',
      mensaje: '',
      validaAjustes: ''
    });
    this.records = this.modificacionReservaService.getRecords();
  }

  deleteRecord(index: number): void {
    this.modificacionReservaService.deleteRecord(index);
    this.records = this.modificacionReservaService.getRecords();
  }
}


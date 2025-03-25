import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModificacionReservaService {
  private records: any[] = [
    {
      ramoContable: 'CA',
      cobertura: 'CARB_DE_CAC',
      sumaAseg: 'CACB_DE_COBERTURA',
      priRvaInicial: 'MASEG_NVO',
      ajustes: 'PRI',
      pagos: 'C_MT_RESER',
      saldo: 'F_AJUSTADO',
      ajusteRva: 'TE_RESERVA',
      nvoMtoAjte: 'STADO_NVO',
      nvoSaldo: 'SALDO_NVO',
      mensaje: 'MSJ_VALIDA',
      validaAjustes: 'CA'
    },
    // Add more initial records as needed
  ];

  constructor() { }

  getRecords(): any[] {
    return this.records;
  }

  addRecord(record: any): void {
    this.records.push(record);
  }

  deleteRecord(index: number): void {
    this.records.splice(index, 1);
  }
}
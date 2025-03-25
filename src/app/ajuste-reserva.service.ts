import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjusteReservaService {
  /*
  private ajustes: any[] = [
    {
      ramoContable: 'RAMO',
      cobertura: 'DSP_CARB_CD_RAMO',
      sumaAsegurada: 'SICC_DSP_CACB_DE_COBERTURA',
      reservaInicial: 'CC_MT_SUMASEG',
      ajustes: 'ICC_MT_RESERVA',
      pagos: 'CC_MT_AJUSTADO',
      saldo: 'MT_LIQUIDACION',
    },
    // Add more initial ajustes as needed
  ];

  constructor() { }

  getAjustes(): any[] {
    return this.ajustes;
  }

  addAjuste(ajuste: any): void {
    this.ajustes.push(ajuste);
  }

  deleteAjuste(index: number): void {
    this.ajustes.splice(index, 1);
  }*/
    private apiUrl = 'http://localhost:3000/api/ajustes';

    constructor(private http: HttpClient) { }

    getAjustes(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }

    addAjuste(ajuste: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, ajuste);
    }

    deleteAjuste(id: string): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
  }

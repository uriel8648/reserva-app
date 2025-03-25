import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservaComponent } from "./reserva/reserva.component";
import { AjusteReservaComponent } from "./ajuste-reserva/ajuste-reserva.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReservaComponent, AjusteReservaComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reserva-app';
}

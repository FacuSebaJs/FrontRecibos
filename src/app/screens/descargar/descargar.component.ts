import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descargar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css']
})
export class DescargarComponent {
  anioSeleccionado: number | null = null;

  descargarHistorial() {
    if (!this.anioSeleccionado) {
      alert("Por favor, ingresá un año válido.");
      return;
    }

    alert(`Descargando historial de recibos del año ${this.anioSeleccionado}...`);
  }
}

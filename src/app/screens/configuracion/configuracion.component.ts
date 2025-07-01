import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  especiales = [
    { titulo: 'Aguinaldo Diciembre', fecha: '20/12/2024' },
    { titulo: 'Vacaciones Julio', fecha: '05/07/2024' },
    { titulo: 'Bono productividad', fecha: '15/06/2024' }
  ];

  descargar(item: any) {
    alert(`Descargando: ${item.titulo}`);
  }
}

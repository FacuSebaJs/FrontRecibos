import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // 👈 Esto activa el sistema de rutas
  template: `<router-outlet />`  // 👈 Esto reemplaza al LandingComponent fijo
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
userEmail: string | null = null;

ngOnInit() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      this.userEmail = user.email;
    } else {
      this.userEmail = 'Invitado';
    }
  });
}


  descargarRecibo() {
  console.log("🔍 FUNCION descargarRecibo() LLAMADA");

  const mes = (document.querySelector('select[name="mes"]') as HTMLSelectElement).value;
  const anio = (document.querySelector('input[name="anio"]') as HTMLInputElement).value;

  console.log("📅 MES:", mes);
  console.log("📅 AÑO:", anio);

  if (!mes || !anio) {
    alert("Por favor seleccioná el mes y el año.");
    return;
  }

  const nombreArchivo = `recibo_${anio}_${mes}.pdf`;
  const ruta = `/${nombreArchivo}`;
  console.log("📄 Ruta a descargar:", ruta);

  const link = document.createElement('a');
  link.href = ruta;
  link.download = nombreArchivo;
  link.target = '_blank';
  link.click();
}
}

import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginWithGoogle().then((result) => {
      console.log("Usuario logueado:", result.user);
      this.router.navigate(['/dashboard']);

    }).catch((error) => {
      console.error("Error al iniciar sesión:", error);
    });
  }

  irAHome() {
    this.router.navigate(['/dashboard']);
    
  }
}

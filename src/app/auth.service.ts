// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { firebaseConfig } from './firebase-config'; // desde /src/app/



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private provider = new GoogleAuthProvider();

  loginWithGoogle() {
    return signInWithPopup(this.auth, this.provider);
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}

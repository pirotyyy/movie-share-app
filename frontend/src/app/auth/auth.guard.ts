import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private url?: string;

  constructor(private auth: AuthService, private router: Router) {}

  private authState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  private notAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

  private isLoginOrRegister(): boolean {
    if (
      this.url?.includes('/auth/login') ||
      this.url?.includes('/auth/register')
    ) {
      return true;
    }
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.url = state.url;
    if (this.auth.isAuthenticated()) {
      return this.authState();
    }
    return this.notAuthState();
  }
}

import { inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import jwt_decode, {jwtDecode} from 'jwt-decode'; // Achten Sie darauf, dass die Import-Anweisung dem tatsächlichen Importpfad entspricht

interface TokenPayload {
  roles: string[];
}

export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      this.navigateToLogin();
      return false;
    }

    try {
      const payload: TokenPayload = jwtDecode<TokenPayload>(token);
      if (this.isUserAdmin(payload)) {
        return true;
      }
    } catch (error) {
      console.error('Error decoding token', error);
    }

    this.navigateToLogin();
    return false;
  }

  private isUserAdmin(payload: TokenPayload): boolean {
    return payload.roles.includes('admin');
  }

  private navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}

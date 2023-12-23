import { inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import jwt_decode, {jwtDecode} from 'jwt-decode'; // Ensure the import path matches your project's structure

interface TokenPayload {
  roles: string[];
}

// Guard to restrict access to admin roles
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  // CanActivate method to determine if a route can be activated
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

  // Helper method to check if user is admin
  private isUserAdmin(payload: TokenPayload): boolean {
    return payload.roles.includes('admin');
  }

  // Navigation to login if user is not authorized
  private navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}

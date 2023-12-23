import { CanActivateFn } from '@angular/router';

// Guard function to check for access token
export const authGuard: CanActivateFn = (route, state) => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  // Grants access only if an access token is present
  return !!accessToken;
};

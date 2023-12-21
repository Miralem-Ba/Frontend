import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  // Erlaubt den Zugriff nur, wenn ein Access Token vorhanden ist
  return !!accessToken;
};

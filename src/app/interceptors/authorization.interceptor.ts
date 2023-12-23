import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('ACCESS_TOKEN')) {

      return  next.handle(req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
      }));
    }
    return next.handle(req);
  }
}

import { HttpInterceptorFn } from '@angular/common/http';

// Simple interceptor function
export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
// Forward the request without any modifications
  return next(req);
};

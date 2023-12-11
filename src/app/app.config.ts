// Import necessary Angular core modules and functions
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

// Import the main application routes
import { routes } from './app.routes';

// Import modules for animations and HTTP functionality
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptors} from "@angular/common/http";

// Import custom interceptor for HTTP authorization
import {authorizationInterceptor} from "./interceptors/authorization.interceptor";

/**
 * Define the main configuration for the Angular application.
 * This includes setting up routes, HTTP client, and animations.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Configure the router with the defined routes
    provideRouter(routes),
    // Set up the HttpClient with additional interceptors,
    // in this case, the authorizationInterceptor for handling
    // authentication and authorization tasks in HTTP requests
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    // Enable animations throughout the application
    provideAnimations()
  ]
};

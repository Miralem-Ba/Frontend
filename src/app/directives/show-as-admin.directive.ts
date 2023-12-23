import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import {jwtDecode} from "jwt-decode";// Corrected import of jwtDecode

// Interface defining the structure of the JWT payload.
interface TokenPayload { // Definiert eine Schnittstelle für die Token-Nutzlast
  roles: string[];
}

// Directive to display content only for admin users.
@Directive({
  selector: '[pmShowAsAdmin]',
  standalone: true
})
export class ShowAsAdminDirective {

  // Constructor injecting TemplateRef and ViewContainerRef.
  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.setupView();// Calls setup function on initialization
  }

  // Sets up the view based on user role.
  private setupView(): void {
    const token = localStorage.getItem("ACCESS_TOKEN"); // Retrieves token from localStorage

    if (token) {
      try {
        // Decodes the token and checks user role
        const decodedToken: TokenPayload = jwtDecode(token); // Typisierung hinzugefügt

        // Only displays content if the user has 'admin' role
        if (decodedToken.roles && decodedToken.roles.includes("admin")) {
          this.viewContainerRef.createEmbeddedView(this.template);
        } else {
          this.viewContainerRef.clear();// Clears the container if the role is not 'admin'
        }
      } catch (error) {
        // Error handling for failed token decoding
        console.error('Error decoding token:', error);
        this.viewContainerRef.clear();
      }
    } else {
      // Clears the container if no token is present
      this.viewContainerRef.clear();
    }
  }
}

import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import {jwtDecode} from "jwt-decode";


interface TokenPayload { // Definiert eine Schnittstelle für die Token-Nutzlast
  roles: string[];
}

@Directive({
  selector: '[pmShowAsAdmin]',
  standalone: true
})
export class ShowAsAdminDirective {

  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.setupView();
  }

  private setupView(): void {
    const token = localStorage.getItem("ACCESS_TOKEN");

    if (token) {
      try {
        const decodedToken: TokenPayload = jwtDecode(token); // Typisierung hinzugefügt

        if (decodedToken.roles && decodedToken.roles.includes("admin")) {
          this.viewContainerRef.createEmbeddedView(this.template);
        } else {
          this.viewContainerRef.clear();
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        this.viewContainerRef.clear();
      }
    } else {
      this.viewContainerRef.clear();
    }
  }
}

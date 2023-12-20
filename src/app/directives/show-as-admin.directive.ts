import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {jwtDecode} from "jwt-decode";

@Directive({
  selector: '[pmShowAsAdmin]',
  standalone: true
})
export class ShowAsAdminDirective {

  constructor(
    private template: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      const token: any = jwtDecode(localStorage.getItem("ACCESS_TOKEN")!);
      if (token.roles.includes("admin")) {
        this.viewContainerRef.createEmbeddedView(this.template);
      } else {
        this.viewContainerRef.clear();
      }
    }
  }
}

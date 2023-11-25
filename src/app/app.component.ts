import { Component } from '@angular/core';
import {AccordionWrapperComponent} from "./accordion-wrapper/accordion-wrapper.component";
import {AccordionElementComponent} from "./accordion-element/accordion-element.component";

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    AccordionWrapperComponent,
    AccordionElementComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'playground';
  date = new Date();
  protected readonly History = History;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Decorator for defining 'FooterComponent'
@Component({
  selector: 'pm-footer', // Component's CSS selector
  standalone: true, // Standalone component, no external module required
  imports: [CommonModule], // CommonModule imported for common Angular directives
  templateUrl: './footer.component.html', // Link to the HTML template
  styleUrl: './footer.component.scss' // Link to the stylesheet
})
export class FooterComponent {
  // Basic class for footer component - no additional logic
}

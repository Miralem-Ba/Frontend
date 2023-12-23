import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

// Component decorator for defining 'HeaderComponent'
@Component({
  selector: 'pm-header', // Component's CSS selector
  standalone: true, // Indicates that the component is standalone
  imports: [
    CommonModule, // CommonModule for basic Angular directives
    MatToolbarModule, // Material Toolbar Module
    MatButtonModule, // Material Button Module
    MatIconModule, // Material Icon Module
    RouterLink // RouterLink for navigation
  ],
  templateUrl: './header.component.html', // Link to the HTML template
  styleUrl: './header.component.scss' // Link to the stylesheet
})
export class HeaderComponent {
  // Basic class for header component - no additional logic
}

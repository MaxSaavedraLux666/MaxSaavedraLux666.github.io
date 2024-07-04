import { Component, booleanAttribute, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css',
})
export class ContentCardComponent {
  private router = inject(Router);

  public reversed = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public title = input.required<string>();
  public description = input.required<string>();
  public image = input.required<string>();
  public imageClass = input.required<string>();

  public toLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}

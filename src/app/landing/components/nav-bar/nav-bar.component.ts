import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  private router = inject(Router);

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

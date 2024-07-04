import { Component } from '@angular/core';
import { NavBarComponent } from '@/app/shared/components/nav-bar/nav-bar.component';
import { ContentCardComponent } from '@/app/landing/components/content-card/content-card.component';
import { FooterCardComponent } from '@/app/landing/components/footer-card/footer-card.component';

@Component({
  selector: 'landing-layout',
  standalone: true,
  imports: [NavBarComponent, ContentCardComponent, FooterCardComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export default class LandingLayoutComponent {}

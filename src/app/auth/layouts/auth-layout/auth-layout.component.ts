import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export default class AuthLayoutComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private currentRoute = this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      const { url } = this.router;
      this.isLoginPage.update(() => url === '/auth/login');
    });

  public isLoginPage = signal<boolean>(false);

  ngOnInit(): void {
    this.currentRoute;
  }

  ngOnDestroy(): void {
    this.currentRoute.unsubscribe();
  }
}

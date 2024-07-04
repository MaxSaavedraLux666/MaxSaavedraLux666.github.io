import { CoralInputComponent } from '@/app/shared/components/coral-input/coral-input.component';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CoralInputComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export default class LoginPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  public form = this.fb.group({
    email: [''],
    password: [''],
  });

  public onLogin() {
    this.router.navigate(['/dashboard']);
  }
}

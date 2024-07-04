import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CoralInputComponent } from '@/app/shared/components/coral-input/coral-input.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CoralInputComponent, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export default class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  public form = this.fb.group({
    name: [''],
    lastName: [''],
    birthday: [''],
    email: [''],
    password: [''],
    country: [''],
    nativeLanguage: [''],
    learningLanguage: this.fb.array([
      this.fb.group({
        language: [''],
        level: [''],
      }),
    ]),
    fluidLanguage: [''],
    topics: this.fb.array([
      this.fb.group({
        name: [''],
      }),
    ]),
  });

  public lastStep = signal<boolean>(false);

  public nextStep() {
    this.lastStep.update((value) => !value);
  }

  public onRegister() {
    const user = this.form.value;
    // Register user
    this.router.navigate(['/auth/login']);
  }
}

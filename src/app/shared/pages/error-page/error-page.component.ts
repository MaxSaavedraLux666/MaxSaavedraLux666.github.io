import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'error-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export default class ErrorPageComponent {}

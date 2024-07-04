import { Component, input, signal } from '@angular/core';
import { PlanCardItem } from '@/app/dashboard/interfaces/plan-card-item.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dashboard-plan-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css',
})
export class PlanCardComponent {
  public planCardItems = input.required<PlanCardItem>();
}

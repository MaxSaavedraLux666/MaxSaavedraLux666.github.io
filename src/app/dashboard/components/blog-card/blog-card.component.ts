import { Component, input } from '@angular/core';
import { BlogCardItem } from '@/app/dashboard/interfaces/blog-card-item.interface';

@Component({
  selector: 'dashboard-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  public blogCardItems = input.required<BlogCardItem>();
}

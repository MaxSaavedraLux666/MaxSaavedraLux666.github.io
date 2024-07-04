import { Component, input, signal } from '@angular/core';
import { SpeakerContentItem } from '@/app/dashboard/interfaces/speaker-content-item.interface';
import { CoralInputComponent } from '@/app/shared/components/coral-input/coral-input.component';

@Component({
  selector: 'dashboard-speakers-content',
  standalone: true,
  imports: [CoralInputComponent],
  templateUrl: './speakers-content.component.html',
  styleUrl: './speakers-content.component.css',
})
export class SpeakersContentComponent {
  public speakerContentItems = input.required<SpeakerContentItem[]>();
}

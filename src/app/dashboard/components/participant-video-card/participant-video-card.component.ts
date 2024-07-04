import {
  Component,
  ElementRef,
  ViewChild,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { StreamVideoParticipant, Call } from '@stream-io/video-client';
import { CallingService } from '../../services/calling.service';

@Component({
  selector: 'dashboard-participant-video-card',
  standalone: true,
  imports: [],
  templateUrl: './participant-video-card.component.html',
  styleUrl: './participant-video-card.component.css',
})
export class ParticipantVideoCardComponent {
  private callingService = inject(CallingService);
  public participant = input.required<StreamVideoParticipant>();
  public sessionId = signal<string[]>([]);
  public isCameraOn = input<boolean>(true);

  public unbindVideoElement: (() => void) | undefined;
  public unbindAudioElement: (() => void) | undefined;
  @ViewChild('videoCallElement') videoElement!: ElementRef<HTMLDivElement>;

  public effectParticipants = effect(
    () => {
      const call = this.callingService.isCallCreated();
      const videoElementId = document.getElementById(
        `video-${this.participant().sessionId}`
      );

      if (
        call &&
        this.participant().sessionId !== undefined &&
        !videoElementId
      ) {
        const video = document.createElement('video');
        video.autoplay = true;
        video.style.maxHeight = '25rem';
        video.id = `video-${this.participant().sessionId}`;
        video.setAttribute('sessionId', this.participant().sessionId);

        const audio = document.createElement('audio');
        audio.id = `audio-${this.participant().sessionId}`;

        this.videoElement.nativeElement.appendChild(video);
        this.videoElement.nativeElement.appendChild(audio);

        this.unbindVideoElement = call.bindVideoElement(
          video,
          this.participant().sessionId,
          'videoTrack'
        );

        this.unbindAudioElement = call.bindAudioElement(
          audio,
          this.participant().sessionId
        );
      }
    },
    { allowSignalWrites: true }
  );

  public ngOnDestroy(): void {
    this.unbindVideoElement?.();
    this.unbindAudioElement?.();
  }
}

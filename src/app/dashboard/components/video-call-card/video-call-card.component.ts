import {
  Component,
  OnDestroy,
  OnInit,
  effect,
  inject,
  output,
  signal,
} from '@angular/core';
import { CallResponse, StreamVideoParticipant } from '@stream-io/video-client';
import { CallingService } from '@/app/dashboard/services/calling.service';
import { ParticipantVideoCardComponent } from '../participant-video-card/participant-video-card.component';

@Component({
  selector: 'dashboard-video-call-card',
  standalone: true,
  imports: [ParticipantVideoCardComponent],
  templateUrl: './video-call-card.component.html',
  styleUrl: './video-call-card.component.css',
})
export class VideoCallCardComponent implements OnInit, OnDestroy {
  private callingService = inject(CallingService);

  public remoteParticipants = signal<StreamVideoParticipant[]>([]);
  public localParticipant = signal<StreamVideoParticipant>(
    {} as StreamVideoParticipant
  );

  public callResponse = signal<CallResponse | null>(null);

  public isCamera = signal<boolean>(true);
  public isMicrophone = signal<boolean>(true);
  public isLeaveCall = output<undefined>();
  public setInterval = signal<NodeJS.Timeout | undefined>(undefined);

  toggleMicrophone() {
    const call = this.callingService.isCallCreated();
    if (call) {
      call.microphone.toggle();
      this.isMicrophone.update(() => !this.isMicrophone());
    }
  }

  toggleCamera() {
    const call = this.callingService.isCallCreated();
    if (call) {
      call.camera.toggle();
      this.isCamera.update(() => !this.isCamera());
    }
  }

  // trackBySessionId(_: number, participant: StreamVideoParticipant) {
  //   return participant.sessionId;
  // }

  leaveCall() {
    this.isLeaveCall.emit(undefined);
  }

  public ngOnInit(): void {
    this.setInterval.update(() =>
      setInterval(() => this.initializeParticipants(), 1000)
    );
  }

  private initializeParticipants(): void {
    const call = this.callingService.isCallCreated();
    if (call) {
      call.state.localParticipant$.subscribe((value) => {
        if (value) {
          this.localParticipant.update(() => value);
        }
      });

      call.state.remoteParticipants$.subscribe((value) => {
        this.remoteParticipants.update(() => value);
      });
    }
  }

  public asyncEffectCallResponse = effect(async () => {
    const call = this.callingService.isCallCreated();
    if (call) {
      const getCall = (await call.get()).call;
      this.callResponse.update(() => getCall);
    }
  });

  ngOnDestroy() {
    clearInterval(this.setInterval());
  }
}

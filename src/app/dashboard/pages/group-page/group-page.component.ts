import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { SearchCardComponent } from '@/app/dashboard/components/search-card/search-card.component';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';
import { CallingService } from '@/app/dashboard/services/calling.service';
import { CoralInputComponent } from '@/app/shared/components/coral-input/coral-input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VideoCallCardComponent } from '@/app/dashboard/components/video-call-card/video-call-card.component';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-group-page',
  standalone: true,
  imports: [
    SearchCardComponent,
    CoralInputComponent,
    ReactiveFormsModule,
    VideoCallCardComponent,
  ],
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.css',
})
export default class GroupPageComponent implements OnInit {
  private callingService = inject(CallingService);
  private chatService = inject(ChatService);
  private fb = inject(FormBuilder);

  public isLoading = signal<boolean>(false);

  public form = this.fb.group({
    callId: ['', Validators.required],
  });

  public getChatItems = computed<ChatItem[]>(() =>
    this.chatService.chatItems()
  );

  public onCallJoin() {
    if (this.form.invalid) return;
    this.isLoading.set(true);

    const { callId } = this.form.value;
    this.callingService.setCallId(callId ?? '');
  }

  public isCallCreated = computed(() => {
    return this.callingService.isCallCreated();
  });

  public onCallCreate() {
    this.isLoading.set(true);

    const callId = this.randomCallId(10);
    this.callingService.setCallId(callId);
  }

  public randomCallId(length: number): string {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  }

  leaveCall(event: undefined) {
    this.callingService.setCallId(event);
    this.isLoading.set(false);
    localStorage.removeItem('participants');
  }

  public getChatItemsToLocalStorage() {
    if (localStorage.getItem('chatItems') === null) {
      localStorage.setItem(
        'chatItems',
        JSON.stringify(this.chatService.chatItems())
      );
    } else {
      this.chatService.chatItems.set(
        JSON.parse(localStorage.getItem('chatItems')!)
      );
    }
  }

  public ngOnInit(): void {
    this.getChatItemsToLocalStorage();
  }
}

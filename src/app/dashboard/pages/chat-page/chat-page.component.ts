import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { SearchCardComponent } from '@/app/dashboard/components/search-card/search-card.component';
import {
  ChatItem,
  Message,
} from '@/app/dashboard/interfaces/chat-item.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '@/app/dashboard/services/chat.service';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [SearchCardComponent, ReactiveFormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export default class ChatPageComponent implements OnInit {
  @ViewChild('chatContainer')
  private chatContainer?: ElementRef<HTMLDivElement>;
  private fb = inject(FormBuilder);
  private chatService = inject(ChatService);

  public form = this.fb.group({
    message: ['', Validators.required],
  });

  private scrollToBottom() {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }

  public pushMessage(message: Message[], clear?: boolean) {
    if (clear && this.chatContainer) {
      this.chatContainer.nativeElement.innerHTML = '';
    }

    message.forEach((message) => {
      if (!this.chatContainer) return;

      if (message.isMe) {
        // Create My Message elements inside the loop
        const myMessage = document.createElement('div');
        myMessage.className = 'flex flex-col items-end py-6 px-16 ml-2';
        const myMessageBackground = document.createElement('div');
        myMessageBackground.className =
          'break-words overflow-hidden flex justify-center items-center bg-blue-500 text-white rounded-t-lg rounded-bl-lg p-4 my-2';
        const myMessageText = document.createElement('span');
        myMessageText.style.maxWidth = '40rem';
        myMessageText.textContent = message.message; // Set text content here
        const myMessageTime = document.createElement('span');
        myMessageTime.className = 'text-gray-500 text-sm';
        myMessageTime.textContent = message.time; // Set time content here

        // Append my message and time to the message container
        myMessageBackground.appendChild(myMessageText);
        myMessage.appendChild(myMessageBackground);
        myMessage.appendChild(myMessageTime);

        this.chatContainer.nativeElement.appendChild(myMessage);
      } else {
        // Create Other Message elements inside the loop
        const otherMessage = document.createElement('div');
        otherMessage.className =
          'flex flex-col items-start py-6 px-16 mr-2 text-gray-500';
        const profileName = document.createElement('span');
        profileName.className = 'font-semibold text-base';
        profileName.textContent = this.getChatItem()?.profileName || ''; // Set profile name here
        const otherMessageBackground = document.createElement('div');
        otherMessageBackground.className =
          'break-words overflow-hidden flex justify-center items-center bg-gray-200 rounded-b-lg rounded-tr-lg p-4 my-2';
        const otherMessageText = document.createElement('span');
        otherMessageText.style.maxWidth = '40rem';
        otherMessageText.textContent = message.message; // Set text content here
        const otherMessageTime = document.createElement('span');
        otherMessageTime.className = 'text-sm';
        otherMessageTime.textContent = message.time; // Set time content here

        // Append other message and time to the message container
        otherMessageBackground.appendChild(otherMessageText);
        otherMessage.appendChild(profileName);
        otherMessage.appendChild(otherMessageBackground);
        otherMessage.appendChild(otherMessageTime);

        this.chatContainer.nativeElement.appendChild(otherMessage);
      }
    });
  }

  public ngOnInit(): void {
    this.chatItemToLocalStorage();
  }

  public getChatItems = computed<ChatItem[]>(() =>
    this.chatService.chatItems()
  );

  public chatItemToLocalStorage() {
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

  public onSendMessage() {
    if (this.form.invalid) return;
    if (
      this.form.value.message === null ||
      this.form.value.message === undefined
    )
      return null;
    if (this.getChatItem() !== null) {
      const message: Message = {
        message: this.form.value.message,
        time: new Date().toLocaleTimeString('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isMe: true,
      };

      this.getChatItem.update((value) => {
        if (value === null) return null;
        value.message.push(message);
        return value;
      });
      // this.getChatItem.update(() => chatItem);

      // Save to local storage
      this.chatService.chatItems.update((value) => {
        value.map((item) => {
          if (item.profileName === this.getChatItem()!.profileName) {
            item.message = this.getChatItem()!.message;
          }
          return item;
        });
        localStorage.setItem('chatItems', JSON.stringify(value));
        return value;
      });

      this.pushMessage([message]);
    }

    this.form.reset();
    console.log('Message sent');
    this.scrollToBottom();
    return null;
  }

  public getChatItem = signal<ChatItem | null>(null);

  public selectChatItem(chatItem: ChatItem | null) {
    this.getChatItem.set(chatItem);
    this.pushMessage(chatItem?.message || [], true);
    this.scrollToBottom();
  }
}

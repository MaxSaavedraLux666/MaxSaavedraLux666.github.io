import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '@/app/dashboard/interfaces/chat-item.interface';

@Pipe({
  name: 'lastMessage',
  pure: false,
  standalone: true,
})
export class LastMessagePipe implements PipeTransform {
  transform(value: Message[]): string {
    return value[value.length - 1].isMe
      ? 'Tú: ' + value[value.length - 1].message
      : value[value.length - 1].message;
  }
}

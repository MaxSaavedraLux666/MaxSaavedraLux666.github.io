export interface ChatItem {
  profileName: string;
  profileImage: string;
  message: Message[];
  status: string;
}

export interface Message {
  message: string;
  time: string;
  isMe: boolean;
}

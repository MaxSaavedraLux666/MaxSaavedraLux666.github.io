import { User } from '@stream-io/video-client';

export interface UserStream {
  token: string;
  user: User;
}

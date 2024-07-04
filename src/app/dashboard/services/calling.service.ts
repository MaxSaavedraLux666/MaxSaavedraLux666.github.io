import { Injectable, effect, signal } from '@angular/core';
import {
  Call,
  StreamVideoClient,
  StreamVideoParticipant,
} from '@stream-io/video-client';

import { environment } from '@/environments/environments.dev';

import { UserStream } from '@/app/dashboard/interfaces/user-stream.interface';

@Injectable({
  providedIn: 'root',
})
export class CallingService {
  private client!: StreamVideoClient;

  public callId = signal<string | undefined>(undefined);
  public isCallCreated = signal<Call | undefined>(undefined);

  public asyncEffectCallId = effect(async () => {
    const currentCallId = this.callId();
    if (currentCallId === undefined) return undefined;

    const call = this.client.call('default', currentCallId);
    await call.join({ create: true });
    await call.camera.enable();
    await call.microphone.enable();

    this.isCallCreated.update(() => call);
  });

  public getParticipantsToLocalStorage(): StreamVideoParticipant[] {
    const participants = localStorage.getItem('participants');
    if (participants === null) return [];

    return JSON.parse(participants);
  }

  constructor() {
    localStorage.setItem('participants', JSON.stringify(this.usersData()));
    this.client = this.streamVideoClient();
  }

  private streamVideoClient(): StreamVideoClient {
    const activeParticipants = this.getParticipantsToLocalStorage();
    const availableParticipant = this.usersData().find((u) => {
      return !activeParticipants.find((ap) => ap.userId === u.user.id);
    });

    const UserStreamVideocredentials = {
      apiKey: environment.STREAM_VIDEO_API_KEY,
      token: availableParticipant?.token,
      user: availableParticipant?.user,
    };
    return new StreamVideoClient(UserStreamVideocredentials);
  }

  public setCallId(callId: string | undefined) {
    if (callId === undefined) {
      const isCallCreated = this.isCallCreated();
      if (isCallCreated) {
        isCallCreated.leave();
      }
      this.isCallCreated.update(() => callId);
    }
    this.callId.update(() => callId);
  }

  private usersData = signal<UserStream[]>([
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRmVkZXJpY29fU2lsdmEifQ.Vk-x6Id5xbzTGz1cfdjHplkOtA92RdrYoRUjEZrB7p8',
      user: { id: 'Federico_Silva', name: 'Federico Silva' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTWF4X1NhYXZlZHJhIn0.eEzYzoSWuOvB-I-_syIjpJnUS3Nb8qsas7gd-FCHPsM',
      user: { id: 'Max_Saavedra', name: 'Max Saavedra' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSm9yZ2VfQ2F5ZXRhbm8ifQ.0kAE6NdbRBAqlDjLuIhyd54puxhME5yQ53y_2-4QTp8',
      user: { id: 'Jorge_Cayetano', name: 'Jorge Cayetano' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRmFicmljaW9fVmlkYWwifQ.duQcWNxXm0R4u1Akpe8TYenPtEk1TZfiDYF9ChBJENQ',
      user: { id: 'Fabricio_Vidal', name: 'Fabricio Vidal' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTWFyaWFfRG9lIn0.HPGg_-Gut6QBho-C28tdiumz9leDy5mKgjqWKQZTyHU',
      user: { id: 'Maria_Doe', name: 'Maria Doe' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSmhvbl9Eb2UifQ.BcMKHlIpD92BbNhF72NgNkqTHC10fJnlvsmu2NWvbVs',
      user: { id: 'Jhon_Doe', name: 'Jhon Doe' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUGltcG9sbG8ifQ.6xZzSAmR2HV4Ax6JLyzIPlOUIqY9LeQjGCz9x-02oqY',
      user: { id: 'Pimpollo', name: 'Pimpollo' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRGFmbmEifQ.d5h0DDyduV3HbIgc-jppkwLwQLbrRxguX0BcwfUtbgY',
      user: { id: 'Dafna', name: 'Dafna' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRmlvcmVsbGEifQ.EBcPenRpnogdEfr90hiTnIqeDom33-rO8CN_4SNYHBs',
      user: { id: 'Fiorella', name: 'Fiorella' },
    },
    {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiTWF0ZW8ifQ.wInimUBtrPxVXomtOn-Rnj7-ryjR1oyWFKg26i5l51k',
      user: { id: 'Mateo', name: 'Mateo' },
    },
  ]);
}

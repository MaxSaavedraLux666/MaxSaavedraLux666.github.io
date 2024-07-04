import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  public sideBarVisible = input<boolean>(true);

  public logout() {
    localStorage.removeItem('localParticipant');
    localStorage.removeItem('remoteParticipants');
    localStorage.removeItem('participants');
    localStorage.removeItem('chatItems');
  }
}

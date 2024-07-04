import { NavBarComponent } from '@/app/shared/components/nav-bar/nav-bar.component';
import { SideBarComponent } from '@/app/shared/components/side-bar/side-bar.component';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterModule, NavBarComponent, SideBarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export default class DashboardLayoutComponent {
  public sideBarVisible = signal<boolean>(true);

  public sideBarToggled(val: boolean): void {
    this.sideBarVisible.set(val);
  }
}

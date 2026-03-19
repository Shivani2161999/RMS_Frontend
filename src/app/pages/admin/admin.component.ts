import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 sidebarCollapsed = false;
sidebarOpen = true;

toggleCollapse() {
  this.sidebarCollapsed = !this.sidebarCollapsed;
}

toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}
}

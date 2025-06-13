import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent {
  @Input() host?: {
    name: string;
    picture: string;
  };

  getFirstName(): string {
    return this.host?.name.split(' ')[0] || '';
  }

  getLastName(): string {
    const nameParts = this.host?.name.split(' ') || [];
    return nameParts.length > 1 ? nameParts[1] : '';
  }
}
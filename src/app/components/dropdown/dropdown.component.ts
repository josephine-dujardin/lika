import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() title!: string;
  @Input() text?: string;
  @Input() list?: string[]; 
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
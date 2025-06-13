import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  @Input() title: string = '';
  @Input() location: string = '';
  @Input() tags: string[] = [];

  // Optimisation pour le trackBy dans ngFor
  trackByTag(index: number, tag: string): string {
    return tag;
  }
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating?: string;
  @Input() maxStars: number = 5;

  get stars(): boolean[] {
    const ratingNumber = parseInt(this.rating || '0');
    
    return Array.from({ length: this.maxStars }, (_, index) => index < ratingNumber);
  }
}
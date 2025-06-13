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

  get stars(): boolean[] {
    const ratingNumber = parseInt(this.rating || '0');
    
    switch (ratingNumber) {
      case 5:
        return [true, true, true, true, true];
      case 4:
        return [true, true, true, true, false];
      case 3:
        return [true, true, true, false, false];
      case 2:
        return [true, true, false, false, false];
      case 1:
        return [true, false, false, false, false];
      default:
        return [false, false, false, false, false];
    }
  }
}
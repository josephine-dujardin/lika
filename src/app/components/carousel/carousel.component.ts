import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() pictures: string[] = [];
  index = 0;

  nextSlide() {
    this.index = (this.index + 1) % this.pictures.length;
  }

  prevSlide() {
    this.index = (this.index - 1 + this.pictures.length) % this.pictures.length;
  }
}

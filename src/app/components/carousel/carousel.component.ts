import { Component, Input, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() pictures: string[] = [];
  index = 0;
  private slideInterval?: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  nextSlide(): void {
    this.index = (this.index + 1) % this.pictures.length;
    this.restartAutoSlide();
  }

  prevSlide(): void {
    this.index = (this.index - 1 + this.pictures.length) % this.pictures.length;
    this.restartAutoSlide();
  }

  getSlidePosition(slideIndex: number): string {
    if (this.pictures.length === 1) {
      return 'activeSlide';
    }

    if (slideIndex === this.index) {
      return 'activeSlide';
    }

    if (slideIndex === this.index - 1 || 
        (this.index === 0 && slideIndex === this.pictures.length - 1)) {
      return 'lastSlide';
    }

    return 'nextSlide';
  }

  shouldShowControls(): boolean {
    return this.pictures.length > 1;
  }

  private startAutoSlide(): void {
    // Vérifier si on est côté client (navigateur)
    if (!isPlatformBrowser(this.platformId) || this.pictures.length <= 1) {
      return;
    }

    this.slideInterval = window.setInterval(() => {
      this.index = (this.index + 1) % this.pictures.length;
    }, 3000);
  }

  private clearAutoSlide(): void {
    if (isPlatformBrowser(this.platformId) && this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = undefined;
    }
  }

  private restartAutoSlide(): void {
    this.clearAutoSlide();
    this.startAutoSlide();
  }
}
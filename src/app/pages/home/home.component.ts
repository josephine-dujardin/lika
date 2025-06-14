import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}

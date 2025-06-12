// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { LogementService } from '../../services/logement.service';
// import { Logement } from '../../models/logement.model';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   logements: Logement[] = [];

//   constructor(private logementService: LogementService) {}

//   ngOnInit(): void {
//     this.logementService.getLogements().subscribe((data) => {
//       this.logements = data;
//     });
//   }
// }

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

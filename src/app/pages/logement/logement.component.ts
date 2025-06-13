import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../../components/description/description.component';
import { LogementService } from '../../services/logement.service';
import { Logement } from '../../models/logement.model';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HostComponent } from '../../components/host/host.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';

@Component({
  selector: 'app-logement',
  standalone: true,
  imports: [
    CommonModule, 
    CarouselComponent, 
    MatIconModule, 
    DescriptionComponent, 
    HostComponent, 
    StarRatingComponent, 
    DropdownComponent
  ],
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.scss']
})
export class LogementComponent implements OnInit {
  logementId!: string;
  logement?: Logement;

  constructor(
    private route: ActivatedRoute,
    private logementService: LogementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logementId = this.route.snapshot.paramMap.get('logementId')!;
    this.logementService.getLogements().subscribe((logements) => {
      this.logement = logements.find(l => l.id === this.logementId);

      if (!this.logement) {
        this.router.navigate(['/404']);
      }
    });
  }
}
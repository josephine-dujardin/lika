import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogementService } from '../../services/logement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  logements: any[] = [];

  constructor(private logementService: LogementService, private router: Router) {}

  ngOnInit(): void {
    this.logementService.getLogements().subscribe((data) => {
      this.logements = data;
    });
  }

  goToLogement(id: string): void {
    this.router.navigate(['/logement', id]);
  }
}

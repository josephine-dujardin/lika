import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogementService } from '../../services/logement.service';
import { Logement } from '../../models/logement.model';

@Component({
  selector: 'app-logement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.scss']
})
export class LogementComponent implements OnInit {
  logementId!: string;
  logement?: Logement;

  constructor(
    private route: ActivatedRoute,
    private logementService: LogementService
  ) {}

  ngOnInit(): void {
    this.logementId = this.route.snapshot.paramMap.get('logementId')!;
    this.logementService.getLogements().subscribe((logements) => {
      this.logement = logements.find(l => l.id === this.logementId);
    });
  }
}

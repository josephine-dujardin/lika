import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logement } from '../models/logement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  private apiUrl = 'https://josephine-dujardin.github.io/kasa/data.json';

  constructor(private http: HttpClient) {}

  getLogements(): Observable<Logement[]> {
    return this.http.get<Logement[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Token {
  id?: number;
  studentId: string;
  tokenNumber: number;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MyPortfolioService {
  private apiUrl = 'http://localhost:8080/api/tokens';

  constructor(private http: HttpClient) {}

  getMytoken(studentId: string): Observable<Token> {
    return this.http.get<Token>(`${this.apiUrl}/student/${studentId}`);
  }

  
  getNextToken(): Observable<Token> {
    return this.http.get<Token>(`${this.apiUrl}/next`);
  }

  
 
}
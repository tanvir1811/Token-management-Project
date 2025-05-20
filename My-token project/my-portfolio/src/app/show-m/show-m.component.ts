import { Component, OnInit } from '@angular/core';
import { MyPortfolioService, Token } from '../services/my-portfolio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-m',
  standalone: true,
  imports: [],
  templateUrl: './show-m.component.html',
  styleUrls: ['./show-m.component.css']
})
export class ShowMComponent implements OnInit {
  presentTokenNumber: number | null = null;   // From getNextToken (admin)
  
  // From getMytoken (student)
 

  constructor(private myService: MyPortfolioService,
  private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCurrentToken();
    

  }
 

  loadCurrentToken(): void {
    this.myService.getNextToken().subscribe({
      next: (token: Token) => {
        this.presentTokenNumber = token.tokenNumber;
      },
      error: (err) => {
        console.error('No current token available.', err);
        this.presentTokenNumber = null;
      }
    });
     
  }

  

  
}

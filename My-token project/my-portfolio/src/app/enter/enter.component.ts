import { Component } from '@angular/core';
import { MyPortfolioService, Token } from '../services/my-portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  standalone: true,
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css'],
  imports: [] // Add FormsModule if using [(ngModel)]
})
export class EnterComponent {
  username: string = '';
  tokenData?: Token;
  studentTokenNumber: number |null=null;  
  constructor(
    private myService: MyPortfolioService,
    private router: Router
  ) {}

  submit(value: string): void {
   this.username = `ID-${String(value).trim()}`;


    
    console.log(this.username);

    if (this.username !== '') {
      this.myService.getMytoken(this.username).subscribe({
        next: (token: Token) => {
          this.tokenData = token;
          
           this.studentTokenNumber=token.tokenNumber;

          this.router.navigate(['/show']); 

          
          console.log(this.studentTokenNumber);

        },
        error: (err) => {
          alert("Could not get or generate token.");
          console.error(err);
        }
      });
    }
  }
}

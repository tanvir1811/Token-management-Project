import { Component } from '@angular/core';
import { MyPortfolioService } from './services/my-portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  id1 = 'Empty';
  id2 = 'Empty';
  id3 = 'Empty';
  id4 = 'Empty';
  id5 = 'Empty';

  token1 = 0;
  token2 = 0;
  token3 = 0;
  token4 = 0;
  token5 = 0;

  constructor(private tokenService: MyPortfolioService) {}

  on1(): void {
    if (this.id1 === 'Empty') {
      this.tokenService.getNextToken().subscribe({
        next: response => {
          this.id1 = response?.studentId ?? 'Empty';
          this.token1 = response?.tokenNumber ?? 0;
        },
        error: () => {
          this.id1 = 'Empty';
          this.token1 = 0;
        }
      });
    } else {
      this.tokenService.markTokenAsDone(this.id1).subscribe({
        next: () => {
          this.tokenService.getNextToken().subscribe({
            next: response => {
              this.id1 = response?.studentId ?? 'Empty';
              this.token1 = response?.tokenNumber ?? 0;
            },
            error: () => {
              this.id1 = 'Empty';
              this.token1 = 0;
            }
          });
        }
      });
    }
  }

  on2(): void {
    if (this.id2 === 'Empty') {
      this.tokenService.getNextToken().subscribe({
        next: response => {
          this.id2 = response?.studentId ?? 'Empty';
          this.token2 = response?.tokenNumber ?? 0;
        },
        error: () => {
          this.id2 = 'Empty';
          this.token2 = 0;
        }
      });
    } else {
      this.tokenService.markTokenAsDone(this.id2).subscribe({
        next: () => {
          this.tokenService.getNextToken().subscribe({
            next: response => {
              this.id2 = response?.studentId ?? 'Empty';
              this.token2 = response?.tokenNumber ?? 0;
            },
            error: () => {
              this.id2 = 'Empty';
              this.token2 = 0;
            }
          });
        }
      });
    }
  }

  on3(): void {
    if (this.id3 === 'Empty') {
      this.tokenService.getNextToken().subscribe({
        next: response => {
          this.id3 = response?.studentId ?? 'Empty';
          this.token3 = response?.tokenNumber ?? 0;
        },
        error: () => {
          this.id3 = 'Empty';
          this.token3 = 0;
        }
      });
    } else {
      this.tokenService.markTokenAsDone(this.id3).subscribe({
        next: () => {
          this.tokenService.getNextToken().subscribe({
            next: response => {
              this.id3 = response?.studentId ?? 'Empty';
              this.token3 = response?.tokenNumber ?? 0;
            },
            error: () => {
              this.id3 = 'Empty';
              this.token3 = 0;
            }
          });
        }
      });
    }
  }

  on4(): void {
    if (this.id4 === 'Empty') {
      this.tokenService.getNextToken().subscribe({
        next: response => {
          this.id4 = response?.studentId ?? 'Empty';
          this.token4 = response?.tokenNumber ?? 0;
        },
        error: () => {
          this.id4 = 'Empty';
          this.token4 = 0;
        }
      });
    } else {
      this.tokenService.markTokenAsDone(this.id4).subscribe({
        next: () => {
          this.tokenService.getNextToken().subscribe({
            next: response => {
              this.id4 = response?.studentId ?? 'Empty';
              this.token4 = response?.tokenNumber ?? 0;
            },
            error: () => {
              this.id4 = 'Empty';
              this.token4 = 0;
            }
          });
        }
      });
    }
  }

  on5(): void {
    if (this.id5 === 'Empty') {
      this.tokenService.getNextToken().subscribe({
        next: response => {
          this.id5 = response?.studentId ?? 'Empty';
          this.token5 = response?.tokenNumber ?? 0;
        },
        error: () => {
          this.id5 = 'Empty';
          this.token5 = 0;
        }
      });
    } else {
      this.tokenService.markTokenAsDone(this.id5).subscribe({
        next: () => {
          this.tokenService.getNextToken().subscribe({
            next: response => {
              this.id5 = response?.studentId ?? 'Empty';
              this.token5 = response?.tokenNumber ?? 0;
            },
            error: () => {
              this.id5 = 'Empty';
              this.token5 = 0;
            }
          });
        }
      });
    }
  }
}

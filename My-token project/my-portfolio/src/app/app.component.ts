import { Component } from '@angular/core';
import { EnterComponent } from './enter/enter.component';
import { ShowMComponent } from './show-m/show-m.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnterComponent ,ShowMComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

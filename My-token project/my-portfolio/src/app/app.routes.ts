import { Routes } from '@angular/router';
import { EnterComponent } from './enter/enter.component';
import { ShowMComponent } from './show-m/show-m.component';

export const routes: Routes = [
  { path: '', component: EnterComponent },
  { path: 'show', component: ShowMComponent },
  { path: '**', redirectTo: '' }
];

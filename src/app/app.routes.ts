import { Routes } from '@angular/router';
import { GameScreenComponent } from './screens/game_screen/game_screen.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, title: 'Rock. Paper? Scissors!' },
  { path: ':game_id', component: GameScreenComponent },
  { path: '**', redirectTo: '' },
];

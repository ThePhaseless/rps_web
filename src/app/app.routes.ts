import { Routes } from '@angular/router';
import { GameScreenComponent } from './screens/game_screen/game_screen.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';

export const routes: Routes = [
  { path: 'game/:game_id', component: GameScreenComponent },
  { path: '', component: WelcomeComponent, title: 'Rock. Paper? Scissors!' },
  { path: '**', redirectTo: '' },
];

import { Routes } from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {DateConfiguratorComponent} from './date-configurator/date-configurator.component';

export const routes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'date-configurator', component: DateConfiguratorComponent },
  {path: '**', redirectTo: 'question'},
];

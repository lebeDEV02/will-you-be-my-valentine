import {Component, inject, signal, WritableSignal} from '@angular/core';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  imports: [TuiButton, TuiTitle],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  router = inject(Router);
  willSofiaBeMyValentine: WritableSignal<boolean | null> = signal(null);


  setAnswer(answer: boolean): void {
    this.willSofiaBeMyValentine.set(answer);
  }

  navigateToDateConfigurator(): void {
    this.router.navigate(['/date-configurator']);
  }
}

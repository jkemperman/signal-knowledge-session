import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-input-example',
  standalone: true,
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GreetingComponent],
})
export class InputExampleComponent {}

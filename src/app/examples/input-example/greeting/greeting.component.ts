import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent {
  name = input.required<string>();
  includeWelcomeMessage = input<boolean>(true);
}

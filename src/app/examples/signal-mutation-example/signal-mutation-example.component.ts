import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-mutation-example',
  standalone: true,
  imports: [],
  templateUrl: './signal-mutation-example.component.html',
  styleUrl: './signal-mutation-example.component.css',
})
export class SignalMutationExampleComponent {
  count = signal(0);

  incrementCount() {
    this.count.update((count) => count + 1);
  }

  resetCount() {
    this.count.set(0);
  }
}

import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-mutation-example',
  standalone: true,
  imports: [],
  templateUrl: './effect-example.component.html',
  styleUrl: './effect-example.component.css',
})
export class EffectExampleComponent {
  count = signal(0);

  logCountChanged = effect(() => {
    console.debug('Count changed:', this.count());
  });

  incrementCount() {
    this.count.update((count) => count + 1);
  }
}

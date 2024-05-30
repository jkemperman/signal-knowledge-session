import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-example',
  standalone: true,
  imports: [],
  templateUrl: './computed-example.component.html',
  styleUrl: './computed-example.component.css',
})
export class ComputedExampleComponent {
  name = signal('Joep');
  greeting = computed(() => `Hello ${this.name()}`);
}

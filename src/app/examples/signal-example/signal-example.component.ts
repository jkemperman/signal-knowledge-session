import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  standalone: true,
  imports: [],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
})
export class SignalExampleComponent {
  name = signal('Joep');
}

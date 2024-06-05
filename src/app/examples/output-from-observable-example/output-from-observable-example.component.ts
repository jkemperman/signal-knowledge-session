import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MetronomeFromObservableComponent } from './metronome-from-observable/metronome-from-observable.component';

@Component({
  selector: 'app-output-from-observable-example',
  standalone: true,
  imports: [MetronomeFromObservableComponent],
  templateUrl: './output-from-observable-example.component.html',
  styleUrl: './output-from-observable-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutputFromObservableExampleComponent {
  tickCount = signal(0);

  onTick() {
    this.tickCount.update((count) => count + 1);
  }
}

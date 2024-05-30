import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MetronomeComponent } from './metronome/metronome.component';

@Component({
  selector: 'app-output-example',
  standalone: true,
  templateUrl: './output-example.component.html',
  styleUrl: './output-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MetronomeComponent],
})
export class OutputExampleComponent {
  tickCount = signal(0);

  onTick() {
    this.tickCount.update((count) => count + 1);
  }
}

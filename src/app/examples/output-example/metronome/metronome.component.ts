import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-metronome',
  standalone: true,
  imports: [],
  templateUrl: './metronome.component.html',
  styleUrl: './metronome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetronomeComponent {
  tick = output<void>();

  clock = interval(1000)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.tick.emit());
}

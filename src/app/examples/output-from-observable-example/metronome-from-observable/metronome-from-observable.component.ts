import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  outputFromObservable,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-metronome-from-observable',
  standalone: true,
  imports: [],
  templateUrl: './metronome-from-observable.component.html',
  styleUrl: './metronome-from-observable.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetronomeFromObservableComponent {
  private clock$ = interval(1000).pipe(takeUntilDestroyed());
  tick = outputFromObservable(this.clock$);
}

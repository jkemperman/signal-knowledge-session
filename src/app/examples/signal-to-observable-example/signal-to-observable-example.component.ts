import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-signal-to-observable-example',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './signal-to-observable-example.component.html',
  styleUrl: './signal-to-observable-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalToObservableExampleComponent {
  private notificationService = inject(NotificationService);

  userId = signal(12);

  notifications$ = toObservable(this.userId).pipe(
    switchMap((userId) => this.notificationService.getNotifications(userId))
  );
}

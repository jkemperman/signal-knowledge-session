import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-observable-to-signal-example',
  standalone: true,
  imports: [],
  templateUrl: './observable-to-signal-example.component.html',
  styleUrl: './observable-to-signal-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableToSignalExampleComponent {
  private notificationService = inject(NotificationService);

  notificationCount = toSignal(this.notificationService.notificationCount$, {
    initialValue: 0,
  });
  showNotificationCount = computed(() => this.notificationCount() > 0);
}

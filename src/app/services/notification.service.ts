import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationCount$ = of(Math.floor(Math.random() * 98 + 2)).pipe(delay(1000));

  getNotifications(userId: number): Observable<Notification[]> {
    return of([
      {
        message: 'Your account has been activated!',
      },
      {
        message: 'Your account has been banned.',
      },
    ]).pipe(delay(1000));
  }
}

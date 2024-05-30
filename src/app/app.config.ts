import {
  ApplicationConfig,
  ɵprovideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ɵprovideZonelessChangeDetection(), provideRouter(routes)],
};

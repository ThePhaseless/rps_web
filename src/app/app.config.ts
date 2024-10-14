import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BASE_PATH } from '../../api';

import { environment } from '../environments/environment.base';
import { routes } from './app.routes';
import { credentialsInterceptor } from './utils/secure.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([credentialsInterceptor])),
    provideAnimationsAsync(),
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.cliend_id),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
};

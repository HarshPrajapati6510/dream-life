import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routing';
import { StorageService } from './app/shared/services/component-services/storage.service';
import { modules } from './config/modules.data';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([
        (request, next) => {
          const storageService = inject(StorageService);
          const token = storageService.getToken();
          if (token) {
            request = request.clone({
              headers: request.headers.set(`Authorization`, `bearer ${token}`),
            });
          }
          return next(request);
        },
      ]),
    ),
    importProvidersFrom(RouterModule.forRoot(AppRoutes), ...modules),
  ],
}).catch((error) =>
  // eslint-disable-next-line no-console
  console.error(error),
);

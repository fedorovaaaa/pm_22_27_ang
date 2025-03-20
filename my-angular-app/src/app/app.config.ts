
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Додано withFetch

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch())] // Додаємо withFetch()
};
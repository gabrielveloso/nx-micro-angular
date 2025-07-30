import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CounterComponent } from './app/counter/counter';

bootstrapApplication(CounterComponent, appConfig).catch((err) => console.error(err));

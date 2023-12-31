import { Component } from '@angular/core';
import { commonModules } from './shared/imports/common-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: commonModules,
})
export class AppComponent {
  title = 'Moxy CRM Angular Admin Template';
}

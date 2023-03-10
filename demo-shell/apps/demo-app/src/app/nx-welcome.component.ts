import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'demo-shell-nx-welcome',
  template: `
    <h1 class="text-xl font-semibold">{{'welcome' | i18next}}</h1>
    <div class="flex flex-col space-y-m p-m">
    <span>{{'date' | i18next}}: {{ currentDate | date }}</span>
    <span>{{'currency' | i18next}}: {{ currency | currency : 'EUR' }}</span>
    <span>{{'percent' | i18next}}: {{ percent | percent : '2.2' }}</span>
    <span>{{'unmappedKey' | i18next}}</span>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  get currentDate() {
    return new Date();
  }

  get currency() {
    return 2000.0;
  }

  get percent() {
    return 0.105;
  }
}

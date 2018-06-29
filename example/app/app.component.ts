import {Component} from '@angular/core';
import {NgxRoutingHistoryProvider} from '../../src/ngx-routing-history.provider';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  constructor(routingHistory: NgxRoutingHistoryProvider) {
    routingHistory.loadRouting();
  }
}
